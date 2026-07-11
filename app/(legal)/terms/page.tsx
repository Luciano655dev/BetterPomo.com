import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of BetterPomo.",
};

const CONTACT_EMAIL = "lucianomenezes655@gmail.com";

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p>Last updated: July 3, 2026</p>

      <p>
        These terms govern your use of BetterPomo, a shared Pomodoro and focus-timer app. By
        creating an account or using the app, you agree to them.
      </p>

      <h2>The service</h2>
      <p>
        BetterPomo lets you run focus sessions alone or with others, track your history, connect
        with friends, and exchange messages. The service is provided free of charge for personal,
        non-commercial use. We may change, suspend, or discontinue features at any time.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You are responsible for the activity that happens under your account.</li>
        <li>Provide accurate information and keep your login credentials secure.</li>
        <li>One person per account; don&rsquo;t share or transfer accounts.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>When using BetterPomo, you agree not to:</p>
      <ul>
        <li>Harass, abuse, or harm other users, including in session chat and direct messages.</li>
        <li>Post unlawful, hateful, or sexually explicit content.</li>
        <li>Impersonate others or misrepresent your affiliation.</li>
        <li>Attempt to access other users&rsquo; data, probe, or disrupt the service.</li>
        <li>Use automated tools to scrape the service or create accounts in bulk.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of the content you create (session names, tasks, messages, profile
        text). You grant us the limited license needed to store and display that content to you
        and to the people you share sessions or conversations with — that&rsquo;s what makes the
        app work.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using BetterPomo and request account deletion at any time. We may suspend or
        terminate accounts that violate these terms or put the service or its users at risk.
      </p>

      <h2>Disclaimer and liability</h2>
      <p>
        BetterPomo is provided &ldquo;as is&rdquo;, without warranty of any kind. To the maximum
        extent permitted by law, we are not liable for any indirect, incidental, or consequential
        damages arising from your use of the service, including loss of data.
      </p>

      <h2>Software license</h2>
      <p>
        The BetterPomo software itself is distributed under a non-commercial license — see the{" "}
        <a href="/license">License</a> page.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Material changes will be reflected on this
        page with an updated date. Continuing to use the service after changes take effect means
        you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </>
  );
}
