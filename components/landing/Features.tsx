"use client";

import { useState } from "react";
import {
  Check,
  Clock,
  Clock3,
  Headphones,
  MessageCircle,
  Pause,
  Play,
  Plus,
  Send,
  Timer,
  Users,
} from "lucide-react";
import { APP_URL } from "@/lib/api";

type SessionMode = "pomodoro" | "stopwatch";

const WORK_TIMERS = [
  { name: "Focus", minutes: 25 },
  { name: "Deep work", minutes: 50 },
];

const BREAK_TIMERS = [
  { name: "Break", minutes: 5 },
  { name: "Long break", minutes: 15 },
];

const FRIENDS = [
  { emoji: "🦉", name: "ana", detail: "Focusing now" },
  { emoji: "🐻", name: "leo", detail: "2 mutual friends" },
  { emoji: "🐸", name: "mia", detail: "In your session" },
];

const FEATURE_SOUNDS = ["Rain", "Coffee shop", "Brown noise"];

export function Features() {
  const [showBreaks, setShowBreaks] = useState(false);
  const [sessionMode, setSessionMode] = useState<SessionMode>("pomodoro");
  const [todos, setTodos] = useState([
    { id: "outline", text: "Finish article outline", done: true },
    { id: "sources", text: "Review final sources", done: false },
  ]);
  const [playingSounds, setPlayingSounds] = useState<string[]>(["Rain"]);
  const [message, setMessage] = useState("");

  const timers = showBreaks ? BREAK_TIMERS : WORK_TIMERS;

  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-ink">
            The actual product
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Everything your focus needs.
            <br />
            Nothing that pulls you away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            These panels mirror the controls and layouts used in the BetterPomo
            web and mobile apps—from timer selection to private notes and messages.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <article className="rounded-3xl bg-tint-purple p-6 md:col-span-4 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex size-10 items-center justify-center rounded-2xl bg-white/75 text-tint-purple-ink">
                  <Users aria-hidden className="size-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-tint-purple-ink">
                  Shared sessions
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/70">
                  The host chooses a work or break timer. Everyone in the room sees
                  the same state, time, participants, notes, and chat.
                </p>
              </div>
              <span className="rounded-md border border-tint-purple-ink/20 bg-white/60 px-2 py-1 font-mono text-[10px] text-tint-purple-ink">
                TMT4LX
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-white/75 p-4 sm:p-5">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {showBreaks ? "Break time" : "deep work w/ friends"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {showBreaks ? "Select a break timer" : "Select a timer to start"}
                </p>
              </div>
              <div className="mx-auto mt-4 grid max-w-sm grid-cols-3 gap-2.5">
                {timers.map((timer) => (
                  <button
                    key={timer.name}
                    type="button"
                    className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-border/60 bg-white p-2 transition-transform hover:scale-[1.04] active:scale-95"
                  >
                    <span className="text-2xl font-bold leading-none tabular-nums sm:text-3xl">
                      {timer.minutes}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">min</span>
                    <span className="mt-0.5 max-w-full truncate text-[9px] text-muted-foreground">
                      {timer.name}
                    </span>
                  </button>
                ))}
                <button
                  type="button"
                  className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-white p-2 text-muted-foreground"
                >
                  <Plus aria-hidden className="size-5" />
                  <span className="mt-1 text-[10px]">Create new</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowBreaks((current) => !current)}
                className="mx-auto mt-4 block w-full max-w-sm rounded-xl border border-dashed border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {showBreaks ? "End break" : "Have a break"}
              </button>
              <div className="mt-4 flex items-center justify-center -space-x-2">
                {FRIENDS.map((friend) => (
                  <span
                    key={friend.name}
                    title={friend.name}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-tint-purple"
                  >
                    {friend.emoji}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-tint-blue p-6 md:col-span-2 sm:p-8">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white/75 text-tint-blue-ink">
              <Clock aria-hidden className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-tint-blue-ink">
              Session configuration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Switch the room between Pomodoro and Running Timer, then manage work and break timers.
            </p>
            <div className="mt-6 rounded-2xl bg-white/75 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Session mode</p>
              <div className="mt-3 grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-1 rounded-xl bg-muted p-1">
                {(["pomodoro", "stopwatch"] as SessionMode[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setSessionMode(mode)}
                    aria-pressed={sessionMode === mode}
                    className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-1.5 py-2 text-[11px] font-medium transition-all ${
                      sessionMode === mode
                        ? "bg-white text-foreground shadow-sm"
                        : "text-muted-foreground"
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
              {sessionMode === "pomodoro" && (
                <div className="mt-5 space-y-4 border-t border-border pt-4">
                  {[
                    { label: "Work", value: "Focus", time: "25:00" },
                    { label: "Break", value: "Break", time: "05:00" },
                  ].map((timer) => (
                    <div key={timer.label}>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        {timer.label}
                      </p>
                      <div className="mt-1.5 flex items-center justify-between rounded-lg border border-border px-3 py-2">
                        <span className="text-xs font-medium">{timer.value}</span>
                        <span className="font-mono text-[10px] text-muted-foreground">{timer.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {sessionMode === "stopwatch" && (
                <div className="py-8 text-center">
                  <p className="font-mono text-3xl font-semibold tabular-nums">00:00.0</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Start</p>
                </div>
              )}
            </div>
          </article>

          <article className="rounded-3xl bg-tint-green p-6 md:col-span-3 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-tint-green-ink">
              Private notes and todos
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Notes stay personal to the participant. Todos are saved into the session history when you leave.
            </p>
            <div className="mt-6 rounded-2xl bg-white/75 p-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" htmlFor="feature-note">
                Notes
              </label>
              <textarea
                id="feature-note"
                defaultValue="Keep the introduction short. Review the final sources."
                className="mt-2 min-h-24 w-full resize-none rounded-xl border border-input bg-white px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-ring/30"
              />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Todo</p>
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
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm hover:bg-muted/60"
                  >
                    <span
                      className={`flex size-5 items-center justify-center rounded border ${
                        todo.done ? "border-foreground bg-foreground text-background" : "border-input"
                      }`}
                    >
                      {todo.done && <Check aria-hidden className="size-3.5" />}
                    </span>
                    <span className={todo.done ? "text-muted-foreground line-through" : ""}>{todo.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-tint-lime p-6 md:col-span-3 sm:p-8">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white/75 text-tint-lime-ink">
              <Headphones aria-hidden className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-tint-lime-ink">
              The real sound mixer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Play multiple built-in or personal sounds, change every level, and save mixes as presets.
            </p>
            <div className="mt-6 rounded-2xl bg-white/75 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sounds</p>
                <span className="text-[10px] text-muted-foreground">{playingSounds.length} playing</span>
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">
                Play as many as you like—mix them and set each one&apos;s level.
              </p>
              <div className="mt-3 space-y-1">
                {FEATURE_SOUNDS.map((sound, index) => {
                  const playing = playingSounds.includes(sound);
                  return (
                    <div key={sound} className="rounded-lg px-2 py-2 hover:bg-muted/60">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setPlayingSounds((current) =>
                              current.includes(sound)
                                ? current.filter((entry) => entry !== sound)
                                : [...current, sound],
                            )
                          }
                          aria-label={`${playing ? "Pause" : "Play"} ${sound}`}
                          className={`flex size-5 items-center justify-center rounded-full border ${
                            playing ? "border-foreground bg-foreground text-background" : "border-input"
                          }`}
                        >
                          {playing ? <Pause aria-hidden className="size-3" /> : <Play aria-hidden className="size-3" />}
                        </button>
                        <span className="flex-1 text-sm">{sound}</span>
                      </div>
                      {playing && (
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue={[72, 44, 58][index]}
                          aria-label={`${sound} volume`}
                          className="ml-7 mt-2 h-1 w-[calc(100%-1.75rem)] cursor-pointer accent-foreground"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              {playingSounds.length > 0 && (
                <button type="button" className="mt-3 w-full rounded-xl border border-dashed border-input py-2 text-xs text-muted-foreground">
                  Save current mix
                </button>
              )}
            </div>
          </article>

          <article className="rounded-3xl bg-tint-orange p-6 md:col-span-4 sm:p-8">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white/75 text-tint-orange-ink">
              <MessageCircle aria-hidden className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-tint-orange-ink">
              Friends and messages
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-foreground/70">
              Add friends, start direct or group chats, invite the group into a
              session, and keep the inbox temporary—messages disappear after 24 hours.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-1 rounded-2xl bg-white/75 p-3">
                {FRIENDS.map((friend) => (
                  <div key={friend.name} className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-muted/60">
                    <span aria-hidden className="text-xl">{friend.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{friend.name}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{friend.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-end gap-2 rounded-2xl bg-white/75 p-4">
                <span className="self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm">focus room at 4?</span>
                <span className="self-end rounded-2xl rounded-br-sm bg-foreground px-3 py-2 text-sm text-background">yes—I&apos;ll start it</span>
                <form
                  className="mt-2 flex items-center gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setMessage("");
                  }}
                >
                  <label className="sr-only" htmlFor="feature-message">Message</label>
                  <input
                    id="feature-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Message…"
                    className="h-9 min-w-0 flex-1 rounded-full border border-input bg-white px-3 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    aria-label="Send feature message"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background disabled:opacity-40"
                  >
                    <Send aria-hidden className="size-4" />
                  </button>
                </form>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-tint-purple p-6 md:col-span-2 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-tint-purple-ink">
              Profiles and history
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Completed sessions keep the real duration, active time, tasks, and people together.
            </p>
            <div className="mt-6 rounded-2xl bg-white/75 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Wednesday, July 15</p>
              <div className="mt-3 rounded-lg border border-border bg-white px-3 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] tabular-nums text-muted-foreground">10:42 AM</span>
                  <span className="truncate text-xs font-medium">deep work w/ friends</span>
                </div>
                <div className="mt-2 space-y-1 text-[10px] text-muted-foreground">
                  <p>1h 50m in session · 1h 35m active</p>
                  <p>2/2 tasks · with ana, leo</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-card px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold">The preview uses the same controls. The app keeps the real data.</p>
            <p className="mt-1 text-sm text-muted-foreground">Create a room in seconds—no download needed.</p>
          </div>
          <a
            href={APP_URL}
            className="inline-flex h-11 shrink-0 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start focusing free
          </a>
        </div>
      </div>
    </section>
  );
}
