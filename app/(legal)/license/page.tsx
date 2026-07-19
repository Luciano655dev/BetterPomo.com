import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License",
  description: "The BetterPomo Non-Commercial License.",
  alternates: { canonical: "/license" },
};

export default function LicensePage() {
  return (
    <>
      <h1>License</h1>
      <p>BetterPomo Non-Commercial License · Copyright © 2026 Luciano Menezes (github.com/luciano655dev)</p>

      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this
        software and associated documentation files (the &ldquo;Software&rdquo;), to use, copy,
        modify, merge, and distribute the Software, subject to the following conditions:
      </p>

      <h2>1. Non-commercial use only</h2>
      <p>
        The Software may only be used for personal, educational, research, or other
        non-commercial purposes. You may not use the Software, in whole or in part, for any
        commercial purpose. &ldquo;Commercial purpose&rdquo; means any activity intended for or
        directed toward commercial advantage or monetary compensation, including but not limited
        to: selling the Software or a product built on it, offering it as a paid service (SaaS),
        incorporating it into a commercial product, or using it to generate advertising revenue.
      </p>

      <h2>2. Attribution</h2>
      <p>
        Any copies or substantial portions of the Software must retain the copyright notice,
        this list of conditions, and a visible credit to the original author.
      </p>

      <h2>3. Share-alike</h2>
      <p>
        If you modify the Software and distribute your modified version, you must release it
        under this same license and clearly mark what you changed.
      </p>

      <h2>4. No sublicensing</h2>
      <p>
        You may not sublicense the Software or grant others rights beyond those granted to you
        in this license.
      </p>

      <h2>5. No warranty</h2>
      <p>
        THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE
        OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>

      <h2>Commercial use</h2>
      <p>
        If you would like to use BetterPomo commercially, please contact the author to discuss a
        commercial license.
      </p>
    </>
  );
}
