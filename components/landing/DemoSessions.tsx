"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, ListChecks, Target, Users } from "lucide-react";
import { APP_URL } from "@/lib/api";

type Period = "week" | "month" | "year";
type CalendarView = "month" | "year";

interface SessionStat {
  name: string;
  total: string;
  active?: string;
}

const PERIODS: { key: Period; label: string; total: string; stats: SessionStat[] }[] = [
  {
    key: "week",
    label: "Week",
    total: "7h 25m",
    stats: [
      { name: "deep work w/ friends", total: "3h 20m", active: "2h 55m" },
      { name: "thesis grind", total: "2h 15m", active: "1h 50m" },
      { name: "morning focus", total: "1h 50m" },
    ],
  },
  {
    key: "month",
    label: "Month",
    total: "18h 40m",
    stats: [
      { name: "deep work w/ friends", total: "6h 45m", active: "5h 35m" },
      { name: "thesis grind", total: "4h 30m", active: "3h 50m" },
      { name: "morning focus", total: "3h 15m" },
      { name: "inbox zero", total: "1h 50m", active: "1h 25m" },
      { name: "reading", total: "1h 30m" },
      { name: "weekly planning", total: "50m" },
    ],
  },
  {
    key: "year",
    label: "Year",
    total: "96h 15m",
    stats: [
      { name: "deep work w/ friends", total: "31h 20m", active: "27h 10m" },
      { name: "thesis grind", total: "24h 45m", active: "21h 30m" },
      { name: "morning focus", total: "18h 10m" },
      { name: "reading", total: "12h 30m" },
      { name: "inbox zero", total: "9h 30m", active: "7h 45m" },
    ],
  },
];

const MONTHS = [
  {
    label: "July 2026",
    days: 31,
    firstDay: 3,
    currentDay: 15,
    counts: [0, 1, 0, 2, 1, 0, 0, 3, 1, 2, 0, 1, 4, 0, 2],
  },
  {
    label: "June 2026",
    days: 30,
    firstDay: 1,
    currentDay: 30,
    counts: [1, 0, 2, 0, 3, 1, 0, 2, 4, 1, 0, 0, 2, 1, 3, 0, 1, 2, 0, 4, 1, 0, 2, 3, 0, 1, 0, 2, 1, 3],
  },
] as const;

const WEEKDAY_HEADERS = ["S", "M", "T", "W", "T", "F", "S"];
const HEAT_VALUES = [0, 1, 0, 2, 3, 1, 0, 4, 2, 0, 1, 3, 4, 2, 1, 0];

function intensityClass(count: number) {
  if (count < 0) return "border border-dashed border-border/60 bg-transparent text-muted-foreground/40";
  if (count === 0) return "bg-zinc-200 text-muted-foreground";
  if (count === 1) return "bg-zinc-400 text-white";
  if (count === 2) return "bg-zinc-500 text-white";
  if (count === 3) return "bg-zinc-600 text-white";
  return "bg-zinc-800 text-white";
}

function StatCircle({ name, total, active }: SessionStat) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-1 rounded-full border-2 border-border/60 bg-muted/20 p-3 transition-colors hover:border-border hover:bg-muted/40 sm:p-5">
      <span className="max-w-full truncate text-center text-[10px] font-medium text-muted-foreground sm:text-[11px]">
        {name}
      </span>
      <span className="text-base font-bold leading-none tabular-nums sm:text-xl">{total}</span>
      {active && active !== total && (
        <span className="text-[9px] leading-none tabular-nums text-muted-foreground sm:text-[10px]">
          {active} active
        </span>
      )}
    </div>
  );
}

export function DemoSessions() {
  const [period, setPeriod] = useState<Period>("month");
  const [expanded, setExpanded] = useState(false);
  const [calendarView, setCalendarView] = useState<CalendarView>("month");
  const [monthIndex, setMonthIndex] = useState(0);

  const periodData = PERIODS.find((entry) => entry.key === period) ?? PERIODS[1];
  const visibleStats = expanded ? periodData.stats : periodData.stats.slice(0, 3);
  const month = MONTHS[monthIndex];
  const monthCells = useMemo(() => {
    const cells: ({ day: number; count: number } | null)[] = Array.from(
      { length: month.firstDay },
      () => null,
    );
    for (let day = 1; day <= month.days; day += 1) {
      cells.push({
        day,
        count: day > month.currentDay ? -1 : (month.counts[day - 1] ?? 0),
      });
    }
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [month]);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-ink">
            Your dashboard
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Know where your attention went.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            The same timer totals, activity calendar, and session history you get
            inside BetterPomo—shown here with demo data.
          </p>
        </div>

        <div id="dashboard-preview" className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-black/5">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-8">
            <div>
              <p className="text-sm font-semibold">Dashboard</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Your focus record</p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              <span aria-hidden>🍅</span>
              you
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Time by session
                </h3>
                <div className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
                  {PERIODS.map((entry) => (
                    <button
                      key={entry.key}
                      type="button"
                      onClick={() => {
                        setPeriod(entry.key);
                        setExpanded(false);
                      }}
                      aria-pressed={period === entry.key}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                        period === entry.key
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {entry.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {visibleStats.map((stat) => (
                  <StatCircle key={stat.name} {...stat} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {periodData.total} total this {period}
                </p>
                {periodData.stats.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setExpanded((current) => !current)}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {expanded ? "Show less" : `See all (${periodData.stats.length})`}
                  </button>
                )}
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Activity
                </h3>
                <div className="flex items-center gap-2">
                  {calendarView === "month" && (
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setMonthIndex(1)}
                        disabled={monthIndex === 1}
                        aria-label="Previous month"
                        className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30"
                      >
                        <ChevronLeft aria-hidden className="size-3.5" />
                      </button>
                      <span className="min-w-24 text-center text-xs font-medium tabular-nums sm:min-w-28 sm:text-sm">
                        {month.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => setMonthIndex(0)}
                        disabled={monthIndex === 0}
                        aria-label="Next month"
                        className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30"
                      >
                        <ChevronRight aria-hidden className="size-3.5" />
                      </button>
                    </div>
                  )}
                  {calendarView === "year" && <span className="text-sm font-medium">2026</span>}
                  <div className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
                    {(["month", "year"] as CalendarView[]).map((view) => (
                      <button
                        key={view}
                        type="button"
                        onClick={() => setCalendarView(view)}
                        aria-pressed={calendarView === view}
                        className={`rounded-md px-2 py-0.5 text-[11px] font-medium capitalize transition-colors ${
                          calendarView === view
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {view}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {calendarView === "month" ? (
                <div>
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    {WEEKDAY_HEADERS.map((day, index) => (
                      <span
                        key={`${day}-${index}`}
                        className="pb-1 text-center text-[10px] font-medium text-muted-foreground"
                      >
                        {day}
                      </span>
                    ))}
                    {monthCells.map((cell, index) =>
                      cell ? (
                        <span
                          key={`${month.label}-${cell.day}`}
                          title={`${cell.count < 0 ? "Future" : cell.count} session${cell.count === 1 ? "" : "s"}`}
                          className={`flex aspect-square items-center justify-center rounded-lg text-[10px] tabular-nums transition-colors sm:text-xs ${intensityClass(cell.count)}`}
                        >
                          {cell.day}
                        </span>
                      ) : (
                        <span key={`empty-${index}`} />
                      ),
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {month.counts.reduce<number>((sum, count) => sum + count, 0)} sessions this month
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto pb-2">
                  <div className="min-w-[31rem]">
                    <div className="ml-8 grid grid-cols-8 text-[9px] text-muted-foreground">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                      <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                    </div>
                    <div className="mt-2 flex gap-[3px]">
                      <div className="grid w-7 grid-rows-7 gap-[3px] text-right text-[8px] leading-[13px] text-muted-foreground">
                        <span /><span>Mon</span><span /><span>Wed</span><span /><span>Fri</span><span />
                      </div>
                      {Array.from({ length: 32 }, (_, column) => (
                        <div key={column} className="grid grid-rows-7 gap-[3px]">
                          {Array.from({ length: 7 }, (_, row) => {
                            const level = HEAT_VALUES[(row * 3 + column * 5) % HEAT_VALUES.length];
                            return (
                              <span
                                key={`${column}-${row}`}
                                className={`size-[13px] rounded-[3px] ${intensityClass(level).split(" ")[0]}`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    <div className="ml-8 mt-2 flex items-center gap-1 text-[9px] text-muted-foreground">
                      Less
                      {[0, 1, 2, 3, 4].map((level) => (
                        <span key={level} className={`size-[13px] rounded-[3px] ${intensityClass(level).split(" ")[0]}`} />
                      ))}
                      More
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-border px-5 py-6 sm:px-8">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              History
            </h3>
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Wednesday, July 15, 2026
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="relative mt-4 space-y-3 pl-7">
              <span className="absolute bottom-4 left-[13px] top-4 w-px bg-border" />
              {[
                { time: "10:42 AM", name: "deep work w/ friends", total: "1h 50m", active: "1h 35m", tasks: "2/2", people: "ana, leo" },
                { time: "8:15 AM", name: "morning focus", total: "50m", active: "45m", tasks: "1/2", people: "ana" },
              ].map((entry) => (
                <div key={entry.time} className="relative rounded-lg border border-border bg-card px-4 py-3">
                  <span className="absolute -left-[19px] top-4 size-[9px] rounded-full border-2 border-muted-foreground/30 bg-card" />
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{entry.time}</span>
                    <span className="truncate text-xs font-medium sm:text-sm">{entry.name}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock aria-hidden className="size-3" />{entry.total} in session</span>
                    <span className="flex items-center gap-1"><Target aria-hidden className="size-3" />{entry.active} active</span>
                    <span className="flex items-center gap-1"><ListChecks aria-hidden className="size-3" />{entry.tasks} tasks</span>
                    <span className="flex items-center gap-1"><Users aria-hidden className="size-3" />{entry.people}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 text-center">
          <a
            href={APP_URL}
            className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start building your history
          </a>
        </div>
      </div>
    </section>
  );
}
