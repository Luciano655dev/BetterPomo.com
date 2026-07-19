export const SITE_URL = "https://betterpomo.com";
export const APP_URL = "https://app.betterpomo.com";
export const SITE_NAME = "BetterPomo";
export const CREATOR_NAME = "Luciano Menezes";

export const SITE_TITLE = "BetterPomo: Shared Pomodoro Timer for Friends";
export const SITE_DESCRIPTION =
  "BetterPomo is a shared Pomodoro timer for studying and working with friends. Create a room, share a code, and focus on one synced clock. Free in open beta.";

export const OFFICIAL_LINKS = {
  website: SITE_URL,
  app: APP_URL,
  github: "https://github.com/Luciano655dev/BetterPomo.com",
  creatorGithub: "https://github.com/luciano655dev",
  instagram: "https://instagram.com/betterpomo",
};

export const PRODUCT_FEATURES = [
  "Synchronized Pomodoro timers",
  "Shared focus rooms with invite codes",
  "Live room chat",
  "Private notes and to-do lists",
  "Ambient focus sounds",
  "Session history and focus analytics",
] as const;

export const FAQS = [
  {
    question: "What is BetterPomo?",
    answer:
      "BetterPomo is a shared Pomodoro timer for people who want to study or work together online. One person creates a focus room, shares its code, and everyone follows the same synchronized timer.",
  },
  {
    question: "How does a shared Pomodoro timer work?",
    answer:
      "The room host selects a work or break timer. Starting, pausing, and changing the timer updates the same clock for everyone in the room, so the group begins and finishes each focus block together.",
  },
  {
    question: "Is BetterPomo free?",
    answer:
      "Yes. BetterPomo is free to use during its open beta. You can create a room in the web app and invite friends without downloading anything.",
  },
  {
    question: "Can I use BetterPomo by myself?",
    answer:
      "Yes. You can use BetterPomo as a personal Pomodoro or running timer, then keep your completed sessions, notes, to-dos, and focus history in one place.",
  },
  {
    question: "What can people do inside a focus room?",
    answer:
      "Participants can follow the shared timer, see who is present, chat, play ambient focus sounds, and keep private notes and to-do lists. BetterPomo also saves completed sessions to focus history.",
  },
  {
    question: "Does BetterPomo have mobile apps?",
    answer:
      "BetterPomo currently works in a web browser. Native iOS and Android apps are coming soon.",
  },
] as const;
