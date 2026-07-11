import {
  Timer,
  MessagesSquare,
  MessageCircle,
  History,
  Users,
  Globe,
  Lock,
  AudioLines,
  ListTodo,
  WifiOff,
  ChartLine,
  Bell,
  type LucideIcon,
} from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Timer,
    title: "Synced Pomodoro & stopwatch",
    body: "Countdowns and stopwatches tick in perfect sync for every participant.",
  },
  {
    icon: MessageCircle,
    title: "Live session chat",
    body: "See who's in the room and talk between rounds — not during them.",
  },
  {
    icon: MessagesSquare,
    title: "DMs & group chats",
    body: "Real-time messages with friends and groups that self-delete after 24 hours. Focus tools, not another inbox.",
  },
  {
    icon: AudioLines,
    title: "Ambient sound mixer",
    body: "Layer rain, café noise, and more under your session to build your own focus atmosphere.",
  },
  {
    icon: ListTodo,
    title: "Tasks & notes",
    body: "Jot down what each session is for, check tasks off as you go, and keep them in your session recap.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "No signal on the train or in the library basement? Sessions keep running and sync when you're back.",
  },
  {
    icon: ChartLine,
    title: "Stats on your profile",
    body: "Streaks, hours focused, and session history — tracked automatically and shown on your profile.",
  },
  {
    icon: History,
    title: "Automatic history",
    body: "Every session is saved with a recap — see what you did without lifting a finger.",
  },
  {
    icon: Users,
    title: "Friends & profiles",
    body: "Add friends, share your profile, and see what your people are focusing on.",
  },
  {
    icon: Bell,
    title: "Invites & notifications",
    body: "Invite a friend straight into your session and get pinged when yours starts.",
  },
  {
    icon: Globe,
    title: "Join from anywhere",
    body: "Works in any browser today. iOS and Android apps are on the way.",
  },
  {
    icon: Lock,
    title: "Private when you want",
    body: "Password-protect a session and keep it to just your group.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Everything a focus session needs
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          No bloat. Just the pieces that keep a group on the same clock.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border">
                <feature.icon className="size-4" />
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
