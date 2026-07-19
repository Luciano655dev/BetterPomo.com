"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  Check,
  Clock3,
  Copy,
  Pause,
  Play,
  Plus,
  Send,
  Settings,
  Timer,
  Volume2,
} from "lucide-react";
import { Logo } from "@/components/Logo";

type SidebarTab = "chat" | "notes" | "config";
type TimerMode = "pomodoro" | "stopwatch";
type TimerState = "idle" | "running" | "paused";

interface DemoTimer {
  id: string;
  name: string;
  duration: number;
  kind: "work" | "break";
}

interface DemoLap {
  id: string;
  lapNumber: number;
  name: string;
  totalSeconds: number;
}

interface DemoMessage {
  id: string;
  emoji: string;
  name: string;
  text: string;
  own?: boolean;
}

interface DemoTodo {
  id: string;
  text: string;
  done: boolean;
}

const TIMERS: DemoTimer[] = [
  { id: "focus", name: "Focus", duration: 25 * 60, kind: "work" },
  { id: "deep", name: "Deep work", duration: 50 * 60, kind: "work" },
  { id: "break", name: "Break", duration: 5 * 60, kind: "break" },
  { id: "long-break", name: "Long break", duration: 15 * 60, kind: "break" },
];

const WORK_TIMERS = TIMERS.filter((timer) => timer.kind === "work");
const BREAK_TIMERS = TIMERS.filter((timer) => timer.kind === "break");

const INITIAL_CHAT: DemoMessage[] = [
  { id: "ana-1", emoji: "🦉", name: "ana", text: "ok, phones away 📵" },
  { id: "leo-1", emoji: "🐻", name: "leo", text: "same table, different cities" },
  {
    id: "you-1",
    emoji: "🍅",
    name: "you",
    text: "love that — see you at the break",
    own: true,
  },
];

const INITIAL_TODOS: DemoTodo[] = [
  { id: "outline", text: "Finish article outline", done: true },
  { id: "sources", text: "Review final sources", done: false },
];

const SOUNDS = [
  { id: "rain", name: "Rain", icon: "☂", initialVolume: 72 },
  { id: "cafe", name: "Coffee shop", icon: "☕", initialVolume: 44 },
  { id: "fire", name: "Fireplace", icon: "♨", initialVolume: 58 },
] as const;

const PARTICIPANTS = [
  { emoji: "🍅", name: "you", role: "host" },
  { emoji: "🦉", name: "ana" },
  { emoji: "🐻", name: "leo" },
];

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function formatStopwatch(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor((totalSeconds % 1) * 10);
  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

function formatSplit(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor((totalSeconds % 1) * 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

export function SessionPreview() {
  const [timerMode, setTimerMode] = useState<TimerMode>("pomodoro");
  const [activeTimerId, setActiveTimerId] = useState<(typeof TIMERS)[number]["id"]>(
    "focus",
  );
  const [elapsed, setElapsed] = useState(7 * 60 + 18);
  const [timerState, setTimerState] = useState<TimerState>("running");
  const [breakMode, setBreakMode] = useState(false);
  const [laps, setLaps] = useState<DemoLap[]>([]);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>("chat");
  const [messages, setMessages] = useState(INITIAL_CHAT);
  const [messageDraft, setMessageDraft] = useState("");
  const [note, setNote] = useState(
    "Keep the introduction short. Turn the research section into three clear points.",
  );
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [todoDraft, setTodoDraft] = useState("");
  const [activeSounds, setActiveSounds] = useState<string[]>(["rain"]);
  const [soundVolumes, setSoundVolumes] = useState<Record<string, number>>(
    Object.fromEntries(SOUNDS.map((sound) => [sound.id, sound.initialVolume])),
  );
  const [isPrivate, setIsPrivate] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeTimer = TIMERS.find((timer) => timer.id === activeTimerId) ?? TIMERS[0];

  useEffect(() => {
    if (timerState !== "running") return;

    const interval = window.setInterval(() => {
      setElapsed((current) => {
        if (timerMode === "stopwatch") return current + 0.1;
        return current >= activeTimer.duration - 1 ? 0 : current + 1;
      });
    }, timerMode === "stopwatch" ? 100 : 1000);

    return () => window.clearInterval(interval);
  }, [activeTimer.duration, timerMode, timerState]);

  const displaySeconds =
    timerMode === "stopwatch" ? elapsed : Math.max(activeTimer.duration - elapsed, 0);
  const progress =
    timerMode === "stopwatch" ? 0 : elapsed / activeTimer.duration;

  function switchMode(mode: TimerMode) {
    setTimerMode(mode);
    setElapsed(0);
    setTimerState("idle");
    setBreakMode(false);
    setActiveTimerId("focus");
    setLaps([]);
  }

  function startTimer(id: (typeof TIMERS)[number]["id"]) {
    const timer = TIMERS.find((entry) => entry.id === id);
    if (!timer) return;
    setActiveTimerId(id);
    setBreakMode(timer.kind === "break");
    setElapsed(0);
    setTimerState("running");
  }

  function stopPomodoro() {
    setActiveTimerId("break");
    setElapsed(0);
    setBreakMode(true);
    setTimerState("idle");
  }

  function endBreak() {
    setActiveTimerId("focus");
    setElapsed(0);
    setBreakMode(false);
    setTimerState("idle");
  }

  function startStopwatch() {
    setElapsed(0);
    setTimerState("running");
  }

  function resetStopwatch() {
    setElapsed(0);
    setLaps([]);
    setTimerState("idle");
  }

  function addLap() {
    const lapNumber = laps.length + 1;
    setLaps((current) => [
      ...current,
      {
        id: `lap-${lapNumber}`,
        lapNumber,
        name: `Lap ${lapNumber}`,
        totalSeconds: elapsed,
      },
    ]);
  }

  async function copyRoomCode() {
    try {
      await navigator.clipboard.writeText("TMT4LX");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = messageDraft.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      {
        id: `you-${current.length + 1}`,
        emoji: "🍅",
        name: "you",
        text,
        own: true,
      },
    ]);
    setMessageDraft("");
  }

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = todoDraft.trim();
    if (!text) return;

    setTodos((current) => [
      ...current,
      { id: `todo-${current.length + 1}`, text, done: false },
    ]);
    setTodoDraft("");
  }

  function toggleSound(id: string) {
    setActiveSounds((current) =>
      current.includes(id) ? current.filter((soundId) => soundId !== id) : [...current, id],
    );
  }

  const chooserTimers = breakMode ? BREAK_TIMERS : WORK_TIMERS;
  const lastLapTotal = laps.at(-1)?.totalSeconds ?? 0;
  const currentSplit = Math.max(0, elapsed - lastLapTotal);
  const sortedLaps = [...laps].reverse();

  return (
    <div
      id="preview"
      className="mx-auto w-full max-w-6xl scroll-mt-24 overflow-hidden rounded-[2rem] bg-panel text-panel-foreground shadow-2xl shadow-black/20 ring-1 ring-black/10"
    >
      <div className="flex items-center justify-between gap-3 border-b border-panel-border px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-2">
            <Logo size={26} variant="dark" />
            <span className="text-sm font-semibold max-md:hidden">BetterPomo</span>
          </div>
          <span className="text-xs text-panel-muted max-md:hidden">Dashboard</span>
          <span aria-hidden className="text-panel-border max-md:hidden">
            |
          </span>
          <span className="truncate text-sm font-semibold">deep work w/ friends</span>
          <button
            type="button"
            onClick={copyRoomCode}
            className="flex shrink-0 items-center gap-1 rounded border border-panel-border px-2 py-0.5 font-mono text-[10px] text-panel-muted transition-colors hover:text-panel-foreground"
            aria-label="Copy demo room code"
          >
            {copied ? "COPIED" : "TMT4LX"}
            {copied ? <Check aria-hidden className="size-3" /> : <Copy aria-hidden className="size-3" />}
          </button>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-sm text-panel-muted max-sm:hidden">Leave</span>
          <span className="flex items-center gap-1.5 rounded-full border border-panel-border px-2.5 py-1">
            <span aria-hidden>🍅</span>
            <span className="text-xs text-panel-muted max-sm:hidden">you</span>
          </span>
          <Settings aria-hidden className="size-4 text-panel-muted" />
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div
          className={`relative flex min-h-[30rem] flex-col items-center justify-center overflow-hidden px-5 py-10 transition-colors duration-700 sm:min-h-[36rem] sm:px-10 ${
            timerMode === "pomodoro" && breakMode ? "bg-white/5" : ""
          }`}
        >
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 bg-panel-elevated transition-[height] duration-1000 ease-linear"
            style={{ height: `${progress * 100}%` }}
          />

          {timerMode === "pomodoro" && timerState === "idle" && (
            <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-panel-muted">
                  {breakMode ? "Break time" : "deep work w/ friends"}
                </p>
                <p className="mt-1 text-xs text-panel-muted">
                  {breakMode ? "Select a break timer" : "Select a timer to start"}
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-3">
                {chooserTimers.map((timer) => (
                  <button
                    key={timer.id}
                    type="button"
                    onClick={() => startTimer(timer.id)}
                    aria-label={`${Math.round(timer.duration / 60)} minutes — ${timer.name}`}
                    className="flex aspect-square select-none flex-col items-center justify-center gap-1 rounded-2xl border-2 border-panel-border p-4 transition-all duration-150 hover:scale-[1.04] hover:border-panel-foreground hover:bg-white/5 active:scale-95"
                  >
                    <span className="text-4xl font-bold leading-none tabular-nums">
                      {Math.round(timer.duration / 60)}
                    </span>
                    <span className="text-xs font-medium text-panel-muted">min</span>
                    <span className="max-w-full truncate text-center text-xs text-panel-muted/70">
                      {timer.name}
                    </span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSidebarTab("config")}
                  className="flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-panel-border p-4 text-panel-muted transition-all duration-150 hover:scale-[1.04] hover:border-panel-foreground hover:text-panel-foreground active:scale-95"
                >
                  <Plus aria-hidden className="size-6" />
                  <span className="text-xs">Create new</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (breakMode) endBreak();
                  else {
                    setActiveTimerId("break");
                    setBreakMode(true);
                  }
                }}
                className="w-full rounded-xl border border-dashed border-panel-border px-6 py-3 text-sm text-panel-muted transition-all hover:scale-[1.02] hover:border-panel-muted hover:text-panel-foreground active:scale-[0.98]"
              >
                {breakMode ? "End break" : "Have a break"}
              </button>
            </div>
          )}

          {timerMode === "pomodoro" && timerState !== "idle" && (
            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-panel-muted">
                {activeTimer.name}
                {timerState === "paused" ? " — Paused" : ""}
              </p>
              <p
                className={`whitespace-nowrap font-mono text-[clamp(3.6rem,11vw,7.5rem)] font-semibold leading-none tracking-[-0.08em] tabular-nums transition-opacity ${
                  timerState === "paused" ? "opacity-50" : ""
                }`}
                aria-label={`Time remaining: ${formatTime(displaySeconds)}`}
              >
                {formatTime(displaySeconds)}
              </p>

              {timerState === "running" ? (
                <button
                  type="button"
                  onClick={() => setTimerState("paused")}
                  className="text-sm uppercase tracking-[0.2em] text-panel-muted transition-colors hover:text-panel-foreground active:scale-95"
                >
                  Pause
                </button>
              ) : (
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setTimerState("running")}
                    className="text-sm uppercase tracking-[0.2em] text-panel-foreground transition-colors hover:text-white active:scale-95"
                  >
                    Resume
                  </button>
                  <span aria-hidden className="text-lg text-panel-muted/30">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setElapsed(0);
                      setTimerState("running");
                    }}
                    className="text-sm uppercase tracking-[0.2em] text-panel-muted transition-colors hover:text-panel-foreground active:scale-95"
                  >
                    Reset
                  </button>
                  <span aria-hidden className="text-lg text-panel-muted/30">·</span>
                  <button
                    type="button"
                    onClick={stopPomodoro}
                    className="text-sm uppercase tracking-[0.2em] text-panel-muted transition-colors hover:text-panel-foreground active:scale-95"
                  >
                    Stop
                  </button>
                </div>
              )}
            </div>
          )}

          {timerMode === "stopwatch" && (
            <div className="relative z-10 flex max-h-[32rem] w-full max-w-2xl flex-col items-center gap-7 overflow-y-auto px-1 text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-panel-muted">
                deep work w/ friends{timerState === "paused" ? " — Paused" : ""}
              </p>
              <p
                className={`whitespace-nowrap font-mono text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-none tracking-[-0.06em] tabular-nums ${
                  timerState === "idle" ? "opacity-20" : timerState === "paused" ? "opacity-50" : ""
                }`}
                aria-label={`Elapsed time: ${formatStopwatch(elapsed)}`}
              >
                {formatStopwatch(elapsed)}
              </p>

              {timerState === "idle" && (
                <button
                  type="button"
                  onClick={startStopwatch}
                  className="text-sm uppercase tracking-[0.2em] text-panel-muted transition-colors hover:text-panel-foreground active:scale-95"
                >
                  Start
                </button>
              )}
              {timerState === "running" && (
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setTimerState("paused")}
                    className="text-sm uppercase tracking-[0.2em] text-panel-muted hover:text-panel-foreground"
                  >
                    Pause
                  </button>
                  <span aria-hidden className="text-panel-muted/30">·</span>
                  <button
                    type="button"
                    onClick={addLap}
                    className="text-sm uppercase tracking-[0.2em] text-panel-muted hover:text-panel-foreground"
                  >
                    Lap
                  </button>
                </div>
              )}
              {timerState === "paused" && (
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setTimerState("running")}
                    className="text-sm uppercase tracking-[0.2em] text-panel-foreground hover:text-white"
                  >
                    Resume
                  </button>
                  <span aria-hidden className="text-panel-muted/30">·</span>
                  <button
                    type="button"
                    onClick={resetStopwatch}
                    className="text-sm uppercase tracking-[0.2em] text-panel-muted hover:text-panel-foreground"
                  >
                    Reset
                  </button>
                </div>
              )}

              {timerState === "running" && laps.length === 0 && (
                <p className="-mt-3 text-xs text-panel-muted">
                  Press <span className="font-medium">Lap</span> to record a split
                </p>
              )}

              {laps.length > 0 && (
                <div className="mt-1 w-full max-w-md text-left">
                  <div className="mb-2 flex items-center justify-between px-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-panel-muted">Laps</p>
                    <div className="flex gap-3 pr-1 text-[10px] text-panel-muted/60">
                      <span className="w-16 text-right">Split</span>
                      <span className="w-16 text-right">Total</span>
                    </div>
                  </div>

                  {timerState === "running" && (
                    <div className="flex items-center gap-3 rounded-t-lg border-b border-panel-border bg-panel-elevated/40 px-1 py-3">
                      <span className="w-8 shrink-0 text-xs tabular-nums text-panel-muted">
                        {laps.length + 1}
                      </span>
                      <span className="min-w-0 flex-1 text-sm italic text-panel-muted">Current</span>
                      <span className="w-16 text-right font-mono text-xs tabular-nums text-panel-muted">
                        {formatSplit(currentSplit)}
                      </span>
                      <span className="w-16 text-right font-mono text-sm font-medium tabular-nums">
                        {formatStopwatch(elapsed)}
                      </span>
                    </div>
                  )}

                  {sortedLaps.map((lap, index) => {
                    const previousTotal = sortedLaps[index + 1]?.totalSeconds ?? 0;
                    return (
                      <div
                        key={lap.id}
                        className="flex items-center gap-3 border-b border-panel-border/40 px-1 py-3 last:border-0"
                      >
                        <span className="w-8 shrink-0 text-xs tabular-nums text-panel-muted">
                          {lap.lapNumber}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm">{lap.name}</span>
                        <span className="w-16 text-right font-mono text-xs tabular-nums text-panel-muted">
                          {formatSplit(lap.totalSeconds - previousTotal)}
                        </span>
                        <span className="w-16 text-right font-mono text-sm font-medium tabular-nums">
                          {formatSplit(lap.totalSeconds)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <aside className="flex min-h-[31rem] flex-col border-t border-panel-border lg:min-h-0 lg:border-l lg:border-t-0">
          <div className="flex shrink-0 border-b border-panel-border">
            {(["chat", "notes", "config"] as SidebarTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSidebarTab(tab)}
                aria-pressed={sidebarTab === tab}
                className={`flex-1 border-b-2 px-2 py-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  sidebarTab === tab
                    ? "border-panel-foreground text-panel-foreground"
                    : "border-transparent text-panel-muted hover:text-panel-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {sidebarTab === "chat" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-y-auto p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2 ${message.own ? "flex-row-reverse" : ""}`}
                  >
                    <span
                      aria-hidden
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-panel-elevated text-sm"
                    >
                      {message.emoji}
                    </span>
                    <div className={`flex max-w-[80%] flex-col ${message.own ? "items-end" : "items-start"}`}>
                      {!message.own && (
                        <span className="mb-0.5 text-[9px] text-panel-muted">{message.name}</span>
                      )}
                      <span
                        className={`rounded-2xl px-3 py-1.5 text-sm ${
                          message.own
                            ? "rounded-tr-sm bg-lime text-background"
                            : "rounded-tl-sm bg-panel-elevated"
                        }`}
                      >
                        {message.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={sendMessage} className="flex gap-2 border-t border-panel-border p-3">
                <label className="sr-only" htmlFor="preview-message">
                  Demo message
                </label>
                <input
                  id="preview-message"
                  value={messageDraft}
                  onChange={(event) => setMessageDraft(event.target.value)}
                  placeholder="Send a message…"
                  maxLength={120}
                  className="h-9 min-w-0 flex-1 rounded-full border border-panel-border bg-panel-elevated px-3 text-sm outline-none placeholder:text-panel-muted focus:border-panel-muted"
                />
                <button
                  type="submit"
                  disabled={!messageDraft.trim()}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-lime text-background transition-opacity disabled:opacity-35"
                  aria-label="Send demo message"
                >
                  <Send aria-hidden className="size-4" />
                </button>
              </form>

              <div className="border-t border-panel-border p-4">
                <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-panel-muted">
                  In this room · {PARTICIPANTS.length}
                </p>
                <div className="flex flex-wrap gap-2">
                  {PARTICIPANTS.map((person) => (
                    <span
                      key={person.name}
                      className="flex items-center gap-1.5 rounded-full border border-panel-border px-2.5 py-1 text-xs"
                    >
                      <span aria-hidden>{person.emoji}</span>
                      {person.name}
                      {person.role && <span className="text-[9px] uppercase text-panel-muted">host</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {sidebarTab === "notes" && (
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4">
              <section>
                <label
                  htmlFor="preview-note"
                  className="text-[10px] uppercase tracking-[0.16em] text-panel-muted"
                >
                  Private notes
                </label>
                <textarea
                  id="preview-note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  className="mt-2 min-h-24 w-full resize-none rounded-xl border border-panel-border bg-panel-elevated px-3 py-2 text-sm leading-relaxed outline-none focus:border-panel-muted"
                />
              </section>

              <section>
                <p className="text-[10px] uppercase tracking-[0.16em] text-panel-muted">Todo</p>
                <form onSubmit={addTodo} className="mt-2 flex gap-2">
                  <label className="sr-only" htmlFor="preview-todo">
                    Add a demo todo
                  </label>
                  <input
                    id="preview-todo"
                    value={todoDraft}
                    onChange={(event) => setTodoDraft(event.target.value)}
                    placeholder="Add an item"
                    className="h-9 min-w-0 flex-1 rounded-xl border border-panel-border bg-panel-elevated px-3 text-sm outline-none placeholder:text-panel-muted focus:border-panel-muted"
                  />
                  <button
                    type="submit"
                    disabled={!todoDraft.trim()}
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-panel-border text-panel-muted transition-colors hover:text-panel-foreground disabled:opacity-35"
                    aria-label="Add demo todo"
                  >
                    <Plus aria-hidden className="size-4" />
                  </button>
                </form>
                <div className="mt-2 space-y-1">
                  {todos.map((todo) => (
                    <button
                      key={todo.id}
                      type="button"
                      onClick={() =>
                        setTodos((current) =>
                          current.map((item) =>
                            item.id === todo.id ? { ...item, done: !item.done } : item,
                          ),
                        )
                      }
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-panel-elevated"
                    >
                      <span
                        className={`inline-flex size-4 shrink-0 items-center justify-center rounded border ${
                          todo.done
                            ? "border-lime bg-lime text-background"
                            : "border-panel-border"
                        }`}
                      >
                        {todo.done && <Check aria-hidden className="size-3" />}
                      </span>
                      <span className={todo.done ? "text-panel-muted line-through" : ""}>
                        {todo.text}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-panel-muted">
                    Sounds
                  </p>
                  <span className="text-[9px] text-panel-muted">
                    {activeSounds.length} playing
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  {SOUNDS.map((sound) => {
                    const isActive = activeSounds.includes(sound.id);
                    return (
                      <div key={sound.id} className="rounded-lg px-2 py-1.5 hover:bg-panel-elevated">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggleSound(sound.id)}
                            aria-pressed={isActive}
                            aria-label={`${isActive ? "Pause" : "Play"} ${sound.name}`}
                            className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border ${
                              isActive
                                ? "border-lime bg-lime text-background"
                                : "border-panel-border text-panel-muted"
                            }`}
                          >
                            {isActive ? (
                              <Pause aria-hidden className="size-2.5" />
                            ) : (
                              <Play aria-hidden className="size-2.5 translate-x-px" />
                            )}
                          </button>
                          <span aria-hidden className="text-xs text-panel-muted">
                            {sound.icon}
                          </span>
                          <span className="flex-1 text-sm">{sound.name}</span>
                          <Volume2 aria-hidden className="size-3 text-panel-muted" />
                        </div>
                        {isActive && (
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={soundVolumes[sound.id]}
                            onChange={(event) =>
                              setSoundVolumes((current) => ({
                                ...current,
                                [sound.id]: Number(event.target.value),
                              }))
                            }
                            className="ml-7 mt-2 h-1 w-[calc(100%-1.75rem)] cursor-pointer accent-lime"
                            aria-label={`${sound.name} demo volume`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {sidebarTab === "config" && (
            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-4">
              <section>
                <p className="text-[10px] uppercase tracking-[0.16em] text-panel-muted">
                  Session mode
                </p>
                <div className="mt-3 grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-1 rounded-xl bg-panel-elevated p-1">
                  {(["pomodoro", "stopwatch"] as TimerMode[]).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => switchMode(mode)}
                      aria-pressed={timerMode === mode}
                      className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-1.5 py-2 text-[11px] font-medium transition-all ${
                        timerMode === mode
                          ? "bg-panel-foreground text-panel shadow-sm"
                          : "text-panel-muted hover:text-panel-foreground"
                      }`}
                    >
                      {mode === "pomodoro" ? (
                        <Timer aria-hidden className="size-3.5 shrink-0" />
                      ) : (
                        <Clock3 aria-hidden className="size-3.5 shrink-0" />
                      )}
                      <span className="whitespace-nowrap">
                        {mode === "pomodoro" ? "Pomodoro" : "Running Timer"}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {timerMode === "pomodoro" && (
                <section className="space-y-5 border-t border-panel-border pt-5">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-panel-muted">Timers</p>
                  {[
                    { label: "Work", timers: WORK_TIMERS },
                    { label: "Break", timers: BREAK_TIMERS },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-panel-muted">
                        {group.label}
                      </p>
                      <div className="divide-y divide-panel-border overflow-hidden rounded-xl border border-panel-border">
                        {group.timers.map((timer) => (
                          <div key={timer.id} className="flex items-center justify-between px-3 py-2.5">
                            <span className="text-sm font-medium">{timer.name}</span>
                            <span className="font-mono text-xs text-panel-muted">
                              {formatTime(timer.duration)}
                            </span>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="w-full px-3 py-2 text-left text-xs text-panel-muted hover:bg-panel-elevated hover:text-panel-foreground"
                        >
                          + Add timer
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              )}

              <section className="flex items-center justify-between rounded-xl border border-panel-border p-3">
                <div>
                  <p className="text-sm font-medium">Private room</p>
                  <p className="mt-0.5 text-[10px] text-panel-muted">
                    Only people with your code can join
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPrivate((current) => !current)}
                  aria-pressed={isPrivate}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    isPrivate ? "bg-lime" : "bg-panel-elevated"
                  }`}
                  aria-label="Toggle demo room privacy"
                >
                  <span
                    aria-hidden
                    className={`absolute left-1 top-1 size-4 rounded-full bg-white transition-transform ${
                      isPrivate ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </section>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
