"use client";

import { useState, type KeyboardEvent, type PointerEvent } from "react";
import type { StatusMetricPoint } from "@/lib/api";

interface SeriesDefinition {
  key: "accountsCreated" | "sessionsCreated" | "activeSessionsPeak";
  label: string;
  color: string;
}

interface StatusChartProps {
  title: string;
  description: string;
  points: StatusMetricPoint[];
  series: SeriesDefinition[];
}

const WIDTH = 720;
const HEIGHT = 250;
const LEFT = 20;
const TOP = 16;
const RIGHT = 16;
const BOTTOM = 30;
const TOOLTIP_WIDTH = 164;

function xCoordinate(index: number, length: number): number {
  const denominator = Math.max(length - 1, 1);
  return LEFT + (index / denominator) * (WIDTH - LEFT - RIGHT);
}

function yCoordinate(value: number, maximum: number): number {
  return TOP + (HEIGHT - TOP - BOTTOM) - (value / maximum) * (HEIGHT - TOP - BOTTOM);
}

function coordinates(values: number[], maximum: number): string[] {
  return values.map((value, index) =>
    `${xCoordinate(index, values.length).toFixed(1)},${yCoordinate(value, maximum).toFixed(1)}`,
  );
}

function compactDate(value: string): string {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", timeZone: "UTC" })
    .format(new Date(`${value}T00:00:00Z`));
}

function fullDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function StatusChart({ title, description, points, series }: StatusChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const maximum = Math.max(
    1,
    ...series.flatMap((definition) => points.map((point) => point[definition.key])),
  );
  const middle = Math.ceil(maximum / 2);
  const yTicks = Array.from(new Set([0, middle, maximum]));
  const labelIndexes = [0, Math.floor((points.length - 1) / 2), points.length - 1]
    .filter((index, position, array) => index >= 0 && array.indexOf(index) === position);
  const activePoint = activeIndex === null ? null : points[activeIndex] ?? null;
  const activeX = activeIndex === null ? null : xCoordinate(activeIndex, points.length);
  const tooltipHeight = 34 + series.length * 18;
  const tooltipX = activeX === null
    ? 0
    : activeX > WIDTH / 2
      ? Math.max(LEFT, activeX - TOOLTIP_WIDTH - 10)
      : Math.min(WIDTH - RIGHT - TOOLTIP_WIDTH, activeX + 10);

  function selectNearestPoint(event: PointerEvent<SVGSVGElement>) {
    if (!points.length) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * WIDTH;
    const plotProgress = (pointerX - LEFT) / (WIDTH - LEFT - RIGHT);
    const index = Math.round(Math.max(0, Math.min(1, plotProgress)) * (points.length - 1));
    setActiveIndex(index);
  }

  function navigatePoints(event: KeyboardEvent<SVGSVGElement>) {
    if (!points.length) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    setActiveIndex((current) => {
      if (event.key === "Home") return 0;
      if (event.key === "End") return points.length - 1;
      const index = current ?? points.length - 1;
      return event.key === "ArrowLeft"
        ? Math.max(0, index - 1)
        : Math.min(points.length - 1, index + 1);
    });
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3" aria-label="Chart legend">
          {series.map((definition) => (
            <span key={definition.key} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-2 rounded-full" style={{ backgroundColor: definition.color }} aria-hidden="true" />
              {definition.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${title}. Highest daily value: ${maximum}. Move across the chart or use the arrow keys to inspect each date.`}
          tabIndex={points.length ? 0 : undefined}
          onPointerMove={selectNearestPoint}
          onPointerLeave={() => setActiveIndex(null)}
          onFocus={() => setActiveIndex((current) => current ?? Math.max(points.length - 1, 0))}
          onBlur={() => setActiveIndex(null)}
          onKeyDown={navigatePoints}
        >
          {yTicks.map((value) => {
            const y = TOP + (HEIGHT - TOP - BOTTOM) - (value / maximum) * (HEIGHT - TOP - BOTTOM);
            return (
              <g key={value}>
                <line x1={LEFT} x2={WIDTH - RIGHT} y1={y} y2={y} stroke="currentColor" className="text-border" strokeDasharray="4 7" />
                <text x={LEFT} y={Math.max(y - 7, 10)} className="fill-muted-foreground text-[10px]">{value}</text>
              </g>
            );
          })}

          {series.map((definition) => {
            const values = points.map((point) => point[definition.key]);
            const line = coordinates(values, maximum);
            return (
              <g key={definition.key}>
                <polyline
                  points={line.join(" ")}
                  fill="none"
                  stroke={definition.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {values.map((value, index) => {
                  if (value === 0) return null;
                  const [x, y] = line[index].split(",");
                  return <circle key={index} cx={x} cy={y} r="3" fill={definition.color} />;
                })}
              </g>
            );
          })}

          {labelIndexes.map((index) => {
            const x = xCoordinate(index, points.length);
            return (
              <text
                key={index}
                x={x}
                y={HEIGHT - 4}
                textAnchor={index === 0 ? "start" : index === points.length - 1 ? "end" : "middle"}
                className="fill-muted-foreground text-[11px]"
              >
                {points[index] ? compactDate(points[index].date) : ""}
              </text>
            );
          })}

          {activePoint && activeX !== null && (
            <g aria-hidden="true" pointerEvents="none">
              <line
                x1={activeX}
                x2={activeX}
                y1={TOP}
                y2={HEIGHT - BOTTOM}
                stroke="currentColor"
                className="text-muted-foreground"
                strokeWidth="1"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              />

              {series.map((definition) => (
                <circle
                  key={definition.key}
                  cx={activeX}
                  cy={yCoordinate(activePoint[definition.key], maximum)}
                  r="5"
                  fill={definition.color}
                  stroke="white"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              <g transform={`translate(${tooltipX} ${TOP + 4})`}>
                <rect
                  width={TOOLTIP_WIDTH}
                  height={tooltipHeight}
                  rx="10"
                  fill="#111111"
                  opacity="0.96"
                />
                <text x="12" y="19" fill="white" className="text-[11px] font-semibold">
                  {fullDate(activePoint.date)}
                </text>
                {series.map((definition, index) => (
                  <g key={definition.key} transform={`translate(12 ${35 + index * 18})`}>
                    <circle cx="3" cy="0" r="3" fill={definition.color} />
                    <text x="11" y="3.5" fill="white" className="text-[10px]">
                      {definition.label}: {activePoint[definition.key].toLocaleString("en")}
                    </text>
                  </g>
                ))}
              </g>
            </g>
          )}
        </svg>
        <p className="sr-only" aria-live="polite">
          {activePoint
            ? `${fullDate(activePoint.date)}. ${series.map((definition) => `${definition.label}: ${activePoint[definition.key]}`).join(". ")}.`
            : ""}
        </p>
      </div>
    </article>
  );
}
