# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: betterpomo-switch.spec.js >> landing config privacy switch stays within its track
- Location: ../../../../../private/tmp/betterpomo-switch.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /Focus together/i })
Expected: visible
Error: strict mode violation: getByRole('heading', { name: /Focus together/i }) resolved to 2 elements:
    1) <h1 class="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">…</h1> aka getByRole('heading', { name: 'Focus together. Feel the time' })
    2) <h3 class="mt-5 text-lg font-semibold tracking-tight">Focus together</h3> aka getByRole('heading', { name: 'Focus together', exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: /Focus together/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation "Main" [ref=e3]:
      - link "BetterPomo BetterPomo" [ref=e4] [cursor=pointer]:
        - /url: "#home"
        - img "BetterPomo" [ref=e5]
        - generic [ref=e6]: BetterPomo
      - generic [ref=e7]:
        - link "Home" [ref=e8] [cursor=pointer]:
          - /url: "#home"
        - link "Preview" [ref=e9] [cursor=pointer]:
          - /url: "#preview"
        - link "Features" [ref=e10] [cursor=pointer]:
          - /url: "#features"
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#contact"
      - link "Log in" [ref=e12] [cursor=pointer]:
        - /url: https://app.betterpomo.com
  - main [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - heading "Focus together. Feel the time add up." [level=1] [ref=e16]:
          - text: Focus together.
          - text: Feel the time add up.
        - paragraph [ref=e17]: BetterPomo is a shared Pomodoro room. One code, one clock — you and your people, on the same 25 minutes. Runs in your browser, no download needed.
        - generic [ref=e18]:
          - link "Try the open beta" [ref=e19] [cursor=pointer]:
            - /url: https://app.betterpomo.com
          - link "See it live ↓" [ref=e20] [cursor=pointer]:
            - /url: "#preview"
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - generic [ref=e26]:
              - img "BetterPomo" [ref=e27]
              - generic [ref=e28]: BetterPomo
            - generic [ref=e29]: Dashboard
            - generic [ref=e30]: "|"
            - generic [ref=e31]: deep work w/ friends
            - button "Copy demo room code" [ref=e32]:
              - text: TMT4LX
              - img [ref=e33]
          - generic [ref=e36]:
            - generic [ref=e37]: Leave
            - generic [ref=e38]:
              - generic [ref=e39]: 🍅
              - generic [ref=e40]: you
            - img [ref=e41]
        - generic [ref=e44]:
          - generic [ref=e47]:
            - paragraph [ref=e48]: Focus
            - paragraph [ref=e49]: 17:40
            - button "Pause" [ref=e50]
          - complementary [ref=e51]:
            - generic [ref=e52]:
              - button "chat" [pressed] [ref=e53]
              - button "notes" [ref=e54]
              - button "config" [ref=e55]
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]:
                  - generic [ref=e59]: 🦉
                  - generic [ref=e60]:
                    - generic [ref=e61]: ana
                    - generic [ref=e62]: ok, phones away 📵
                - generic [ref=e63]:
                  - generic [ref=e64]: 🐻
                  - generic [ref=e65]:
                    - generic [ref=e66]: leo
                    - generic [ref=e67]: same table, different cities
                - generic [ref=e68]:
                  - generic [ref=e69]: 🍅
                  - generic [ref=e71]: love that — see you at the break
              - generic [ref=e72]:
                - generic [ref=e73]: Demo message
                - textbox "Demo message" [ref=e74]:
                  - /placeholder: Send a message…
                - button "Send demo message" [disabled] [ref=e75]:
                  - img [ref=e76]
              - generic [ref=e79]:
                - paragraph [ref=e80]: In this room · 3
                - generic [ref=e81]:
                  - generic [ref=e82]:
                    - generic [ref=e83]: 🍅
                    - text: you
                    - generic [ref=e84]: host
                  - generic [ref=e85]:
                    - generic [ref=e86]: 🦉
                    - text: ana
                  - generic [ref=e87]:
                    - generic [ref=e88]: 🐻
                    - text: leo
      - generic [ref=e89]:
        - generic [ref=e90]:
          - paragraph [ref=e91]: This preview is yours to try.
          - paragraph [ref=e92]: Switch timers, pause, write a note, mix sounds, and send a message.
        - link "Create a real room →" [ref=e93] [cursor=pointer]:
          - /url: https://app.betterpomo.com
    - generic [ref=e95]:
      - generic [ref=e96]:
        - heading "Zero to focused in a minute" [level=2] [ref=e97]
        - paragraph [ref=e98]: No setup, no downloads — just a code you share.
      - generic [ref=e99]:
        - generic [ref=e100]:
          - text: "01"
          - heading "Create a session" [level=3] [ref=e101]
          - paragraph [ref=e102]: Pick your focus and break lengths, or use classic 25/5. Public or private, your call.
        - generic [ref=e103]:
          - text: "02"
          - heading "Share the code" [level=3] [ref=e104]
          - paragraph [ref=e105]: One six-character code. No installs, no calendar invites — anyone can join from the browser.
          - generic [ref=e106]: TMT4LX
        - generic [ref=e107]:
          - text: "03"
          - heading "Focus together" [level=3] [ref=e108]
          - paragraph [ref=e109]: Timers stay in sync for everyone. Chat between rounds, see who's in, and your history saves itself.
    - generic [ref=e111]:
      - generic [ref=e112]:
        - text: The actual product
        - heading "Everything your focus needs. Nothing that pulls you away." [level=2] [ref=e113]:
          - text: Everything your focus needs.
          - text: Nothing that pulls you away.
        - paragraph [ref=e114]: These panels mirror the controls and layouts used in the BetterPomo web and mobile apps—from timer selection to private notes and messages.
      - generic [ref=e115]:
        - article [ref=e116]:
          - generic [ref=e117]:
            - generic [ref=e118]:
              - img [ref=e120]
              - heading "Shared sessions" [level=3] [ref=e125]
              - paragraph [ref=e126]: The host chooses a work or break timer. Everyone in the room sees the same state, time, participants, notes, and chat.
            - generic [ref=e127]: TMT4LX
          - generic [ref=e128]:
            - generic [ref=e129]:
              - paragraph [ref=e130]: deep work w/ friends
              - paragraph [ref=e131]: Select a timer to start
            - generic [ref=e132]:
              - button "25 min Focus" [ref=e133]:
                - generic [ref=e134]: "25"
                - generic [ref=e135]: min
                - generic [ref=e136]: Focus
              - button "50 min Deep work" [ref=e137]:
                - generic [ref=e138]: "50"
                - generic [ref=e139]: min
                - generic [ref=e140]: Deep work
              - button "Create new" [ref=e141]:
                - img [ref=e142]
                - generic [ref=e143]: Create new
            - button "Have a break" [ref=e144]
            - generic [ref=e145]:
              - generic "ana" [ref=e146]: 🦉
              - generic "leo" [ref=e147]: 🐻
              - generic "mia" [ref=e148]: 🐸
        - article [ref=e149]:
          - img [ref=e151]
          - heading "Session configuration" [level=3] [ref=e154]
          - paragraph [ref=e155]: Switch the room between Pomodoro and Running Timer, then manage work and break timers.
          - generic [ref=e156]:
            - paragraph [ref=e157]: Session mode
            - generic [ref=e158]:
              - button "Pomodoro" [pressed] [ref=e159]:
                - img [ref=e160]
                - generic [ref=e163]: Pomodoro
              - button "Running Timer" [ref=e164]:
                - img [ref=e165]
                - generic [ref=e168]: Running Timer
            - generic [ref=e169]:
              - generic [ref=e170]:
                - paragraph [ref=e171]: Work
                - generic [ref=e172]:
                  - generic [ref=e173]: Focus
                  - generic [ref=e174]: 25:00
              - generic [ref=e175]:
                - paragraph [ref=e176]: Break
                - generic [ref=e177]:
                  - generic [ref=e178]: Break
                  - generic [ref=e179]: 05:00
        - article [ref=e180]:
          - heading "Private notes and todos" [level=3] [ref=e181]
          - paragraph [ref=e182]: Notes stay personal to the participant. Todos are saved into the session history when you leave.
          - generic [ref=e183]:
            - text: Notes
            - textbox "Notes" [ref=e184]: Keep the introduction short. Review the final sources.
            - paragraph [ref=e185]: Todo
            - generic [ref=e186]:
              - button "Finish article outline" [ref=e187]:
                - img [ref=e189]
                - generic [ref=e191]: Finish article outline
              - button "Review final sources" [ref=e192]:
                - generic [ref=e194]: Review final sources
        - article [ref=e195]:
          - img [ref=e197]
          - heading "The real sound mixer" [level=3] [ref=e199]
          - paragraph [ref=e200]: Play multiple built-in or personal sounds, change every level, and save mixes as presets.
          - generic [ref=e201]:
            - generic [ref=e202]:
              - paragraph [ref=e203]: Sounds
              - generic [ref=e204]: 1 playing
            - paragraph [ref=e205]: Play as many as you like—mix them and set each one's level.
            - generic [ref=e206]:
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - button "Pause Rain" [ref=e209]:
                    - img [ref=e210]
                  - generic [ref=e213]: Rain
                - slider "Rain volume" [ref=e214] [cursor=pointer]: "72"
              - generic [ref=e216]:
                - button "Play Coffee shop" [ref=e217]:
                  - img [ref=e218]
                - generic [ref=e220]: Coffee shop
              - generic [ref=e222]:
                - button "Play Brown noise" [ref=e223]:
                  - img [ref=e224]
                - generic [ref=e226]: Brown noise
            - button "Save current mix" [ref=e227]
        - article [ref=e228]:
          - img [ref=e230]
          - heading "Friends and messages" [level=3] [ref=e232]
          - paragraph [ref=e233]: Add friends, start direct or group chats, invite the group into a session, and keep the inbox temporary—messages disappear after 24 hours.
          - generic [ref=e234]:
            - generic [ref=e235]:
              - generic [ref=e236]:
                - generic [ref=e237]: 🦉
                - generic [ref=e238]:
                  - paragraph [ref=e239]: ana
                  - paragraph [ref=e240]: Focusing now
              - generic [ref=e241]:
                - generic [ref=e242]: 🐻
                - generic [ref=e243]:
                  - paragraph [ref=e244]: leo
                  - paragraph [ref=e245]: 2 mutual friends
              - generic [ref=e246]:
                - generic [ref=e247]: 🐸
                - generic [ref=e248]:
                  - paragraph [ref=e249]: mia
                  - paragraph [ref=e250]: In your session
            - generic [ref=e251]:
              - generic [ref=e252]: focus room at 4?
              - generic [ref=e253]: yes—I'll start it
              - generic [ref=e254]:
                - generic [ref=e255]: Message
                - textbox "Message" [ref=e256]:
                  - /placeholder: Message…
                - button "Send feature message" [disabled] [ref=e257]:
                  - img [ref=e258]
        - article [ref=e261]:
          - heading "Profiles and history" [level=3] [ref=e262]
          - paragraph [ref=e263]: Completed sessions keep the real duration, active time, tasks, and people together.
          - generic [ref=e264]:
            - paragraph [ref=e265]: Wednesday, July 15
            - generic [ref=e266]:
              - generic [ref=e267]:
                - generic [ref=e268]: 10:42 AM
                - generic [ref=e269]: deep work w/ friends
              - generic [ref=e270]:
                - paragraph [ref=e271]: 1h 50m in session · 1h 35m active
                - paragraph [ref=e272]: 2/2 tasks · with ana, leo
      - generic [ref=e273]:
        - generic [ref=e274]:
          - paragraph [ref=e275]: The preview uses the same controls. The app keeps the real data.
          - paragraph [ref=e276]: Create a room in seconds—no download needed.
        - link "Start focusing free" [ref=e277] [cursor=pointer]:
          - /url: https://app.betterpomo.com
    - generic [ref=e279]:
      - generic [ref=e280]:
        - text: Your dashboard
        - heading "Know where your attention went." [level=2] [ref=e281]
        - paragraph [ref=e282]: The same timer totals, activity calendar, and session history you get inside BetterPomo—shown here with demo data.
      - generic [ref=e283]:
        - generic [ref=e284]:
          - generic [ref=e285]:
            - paragraph [ref=e286]: Dashboard
            - paragraph [ref=e287]: Your focus record
          - generic [ref=e288]:
            - generic [ref=e289]: 🍅
            - text: you
        - generic [ref=e290]:
          - generic [ref=e291]:
            - generic [ref=e292]:
              - heading "Time by session" [level=3] [ref=e293]
              - generic [ref=e294]:
                - button "Week" [ref=e295]
                - button "Month" [pressed] [ref=e296]
                - button "Year" [ref=e297]
            - generic [ref=e298]:
              - generic [ref=e299]:
                - generic [ref=e300]: deep work w/ friends
                - generic [ref=e301]: 6h 45m
                - generic [ref=e302]: 5h 35m active
              - generic [ref=e303]:
                - generic [ref=e304]: thesis grind
                - generic [ref=e305]: 4h 30m
                - generic [ref=e306]: 3h 50m active
              - generic [ref=e307]:
                - generic [ref=e308]: morning focus
                - generic [ref=e309]: 3h 15m
            - generic [ref=e310]:
              - paragraph [ref=e311]: 18h 40m total this month
              - button "See all (6)" [ref=e312]
          - generic [ref=e313]:
            - generic [ref=e314]:
              - heading "Activity" [level=3] [ref=e315]
              - generic [ref=e316]:
                - generic [ref=e317]:
                  - button "Previous month" [ref=e318]:
                    - img [ref=e319]
                  - generic [ref=e321]: July 2026
                  - button "Next month" [disabled] [ref=e322]:
                    - img [ref=e323]
                - generic [ref=e325]:
                  - button "month" [pressed] [ref=e326]
                  - button "year" [ref=e327]
            - generic [ref=e328]:
              - generic [ref=e329]:
                - generic [ref=e330]: S
                - generic [ref=e331]: M
                - generic [ref=e332]: T
                - generic [ref=e333]: W
                - generic [ref=e334]: T
                - generic [ref=e335]: F
                - generic [ref=e336]: S
                - generic "0 sessions" [ref=e340]: "1"
                - generic "1 session" [ref=e341]: "2"
                - generic "0 sessions" [ref=e342]: "3"
                - generic "2 sessions" [ref=e343]: "4"
                - generic "1 session" [ref=e344]: "5"
                - generic "0 sessions" [ref=e345]: "6"
                - generic "0 sessions" [ref=e346]: "7"
                - generic "3 sessions" [ref=e347]: "8"
                - generic "1 session" [ref=e348]: "9"
                - generic "2 sessions" [ref=e349]: "10"
                - generic "0 sessions" [ref=e350]: "11"
                - generic "1 session" [ref=e351]: "12"
                - generic "4 sessions" [ref=e352]: "13"
                - generic "0 sessions" [ref=e353]: "14"
                - generic "2 sessions" [ref=e354]: "15"
                - generic "Future sessions" [ref=e355]: "16"
                - generic "Future sessions" [ref=e356]: "17"
                - generic "Future sessions" [ref=e357]: "18"
                - generic "Future sessions" [ref=e358]: "19"
                - generic "Future sessions" [ref=e359]: "20"
                - generic "Future sessions" [ref=e360]: "21"
                - generic "Future sessions" [ref=e361]: "22"
                - generic "Future sessions" [ref=e362]: "23"
                - generic "Future sessions" [ref=e363]: "24"
                - generic "Future sessions" [ref=e364]: "25"
                - generic "Future sessions" [ref=e365]: "26"
                - generic "Future sessions" [ref=e366]: "27"
                - generic "Future sessions" [ref=e367]: "28"
                - generic "Future sessions" [ref=e368]: "29"
                - generic "Future sessions" [ref=e369]: "30"
                - generic "Future sessions" [ref=e370]: "31"
              - paragraph [ref=e372]: 17 sessions this month
        - generic [ref=e373]:
          - heading "History" [level=3] [ref=e374]
          - generic [ref=e377]: Wednesday, July 15, 2026
          - generic [ref=e379]:
            - generic [ref=e381]:
              - generic [ref=e383]:
                - generic [ref=e384]: 10:42 AM
                - generic [ref=e385]: deep work w/ friends
              - generic [ref=e386]:
                - generic [ref=e387]:
                  - img [ref=e388]
                  - text: 1h 50m in session
                - generic [ref=e391]:
                  - img [ref=e392]
                  - text: 1h 35m active
                - generic [ref=e396]:
                  - img [ref=e397]
                  - text: 2/2 tasks
                - generic [ref=e400]:
                  - img [ref=e401]
                  - text: ana, leo
            - generic [ref=e406]:
              - generic [ref=e408]:
                - generic [ref=e409]: 8:15 AM
                - generic [ref=e410]: morning focus
              - generic [ref=e411]:
                - generic [ref=e412]:
                  - img [ref=e413]
                  - text: 50m in session
                - generic [ref=e416]:
                  - img [ref=e417]
                  - text: 45m active
                - generic [ref=e421]:
                  - img [ref=e422]
                  - text: 1/2 tasks
                - generic [ref=e425]:
                  - img [ref=e426]
                  - text: ana
      - link "Start building your history" [ref=e432] [cursor=pointer]:
        - /url: https://app.betterpomo.com
    - generic [ref=e434]:
      - paragraph [ref=e435]: built in the open — free while in beta
      - heading "Your next focus session doesn't have to be alone." [level=2] [ref=e436]
      - generic [ref=e437]:
        - generic [ref=e438]:
          - paragraph [ref=e439]: 25:00
          - paragraph [ref=e440]: the classic block
        - generic [ref=e441]:
          - paragraph [ref=e442]: 24h
          - paragraph [ref=e443]: chat, then gone
        - generic [ref=e444]:
          - paragraph [ref=e445]: "0"
          - paragraph [ref=e446]: installs needed
      - generic [ref=e447]:
        - link "Try the open beta" [ref=e448] [cursor=pointer]:
          - /url: https://app.betterpomo.com
        - link "Say hello" [ref=e449] [cursor=pointer]:
          - /url: "#contact"
      - generic [ref=e451]:
        - generic [ref=e452]:
          - img [ref=e453]
          - text: App Store — coming soon
        - generic [ref=e455]:
          - img [ref=e456]
          - text: Google Play — coming soon
    - generic [ref=e460]:
      - heading "Tell us what to build next." [level=2] [ref=e461]
      - paragraph [ref=e462]: Share feedback, report a problem, ask a question, or just say hello.
      - generic [ref=e464]:
        - generic [ref=e465]:
          - generic [ref=e466]:
            - text: Name
            - textbox "Name" [ref=e467]
          - generic [ref=e468]:
            - text: Email
            - textbox "Email" [ref=e469]
        - generic [ref=e470]:
          - text: What is this about?
          - combobox "What is this about?" [ref=e471]:
            - option "Feedback or suggestion" [selected]
            - option "Question"
            - option "Bug report"
            - option "Something else"
        - generic [ref=e472]:
          - text: Message
          - textbox "Message" [ref=e473]:
            - /placeholder: Tell us what you think, what went wrong, or how we can help.
        - generic [ref=e474]:
          - text: Website
          - textbox [ref=e475]
        - button "Send message" [ref=e476] [cursor=pointer]
  - contentinfo [ref=e477]:
    - generic [ref=e478]:
      - generic [ref=e479]:
        - generic [ref=e480]:
          - img "BetterPomo" [ref=e481]
          - generic [ref=e482]: BetterPomo
        - generic [ref=e483]:
          - link "Privacy" [ref=e484] [cursor=pointer]:
            - /url: /privacy
          - generic [ref=e485]: ·
          - link "Terms" [ref=e486] [cursor=pointer]:
            - /url: /terms
          - generic [ref=e487]: ·
          - link "License" [ref=e488] [cursor=pointer]:
            - /url: /license
        - generic [ref=e489]:
          - link "Instagram" [ref=e490] [cursor=pointer]:
            - /url: https://instagram.com/betterpomo
            - img [ref=e491]
          - link "TikTok" [ref=e493] [cursor=pointer]:
            - /url: https://tiktok.com/@betterpomo
            - img [ref=e494]
      - paragraph [ref=e496]: © 2026 BetterPomo. All rights reserved.
  - alert [ref=e497]
```

# Test source

```ts
  1  | const { test, expect } = require(
  2  |   "/Users/lucianomenezes/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/test",
  3  | );
  4  | 
  5  | test("landing config privacy switch stays within its track", async ({ page }) => {
  6  |   const consoleErrors = [];
  7  |   page.on("console", (message) => {
  8  |     if (message.type() === "error") consoleErrors.push(message.text());
  9  |   });
  10 | 
  11 |   await page.goto("http://127.0.0.1:3011", { waitUntil: "networkidle" });
  12 | 
> 13 |   await expect(page.getByRole("heading", { name: /Focus together/i })).toBeVisible();
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  14 |   await expect(page.locator("[data-nextjs-dialog]")).toHaveCount(0);
  15 | 
  16 |   const brandImages = page.locator('img[alt="BetterPomo"]');
  17 |   await expect(brandImages).not.toHaveCount(0);
  18 |   const sources = await brandImages.evaluateAll((images) =>
  19 |     images.map((image) => new URL(image.src).pathname),
  20 |   );
  21 |   expect(new Set(sources)).toEqual(new Set(["/Logo-transparent.png"]));
  22 | 
  23 |   await page.getByRole("button", { name: "config", exact: true }).click();
  24 | 
  25 |   const switchTrack = page.getByRole("button", { name: "Toggle demo room privacy" });
  26 |   const switchThumb = switchTrack.locator("span");
  27 |   await expect(switchTrack).toHaveAttribute("aria-pressed", "false");
  28 | 
  29 |   const off = await getBounds(switchTrack, switchThumb);
  30 |   expectContained(off);
  31 | 
  32 |   await switchTrack.click();
  33 |   await expect(switchTrack).toHaveAttribute("aria-pressed", "true");
  34 |   await page.waitForTimeout(250);
  35 | 
  36 |   const on = await getBounds(switchTrack, switchThumb);
  37 |   expectContained(on);
  38 |   expect(Math.round(on.thumbLeft - off.thumbLeft)).toBe(20);
  39 | 
  40 |   await page.locator("#preview").screenshot({ path: "/private/tmp/betterpomo-switch-fixed.png" });
  41 |   expect(consoleErrors).toEqual([]);
  42 | });
  43 | 
  44 | async function getBounds(track, thumb) {
  45 |   return track.evaluate((element) => {
  46 |     const trackBounds = element.getBoundingClientRect();
  47 |     const thumbBounds = element.querySelector("span").getBoundingClientRect();
  48 |     return {
  49 |       trackLeft: trackBounds.left,
  50 |       trackRight: trackBounds.right,
  51 |       thumbLeft: thumbBounds.left,
  52 |       thumbRight: thumbBounds.right,
  53 |     };
  54 |   });
  55 | }
  56 | 
  57 | function expectContained(bounds) {
  58 |   expect(bounds.thumbLeft).toBeGreaterThanOrEqual(bounds.trackLeft);
  59 |   expect(bounds.thumbRight).toBeLessThanOrEqual(bounds.trackRight);
  60 | }
  61 | 
```