import { JsonLd } from "@/components/JsonLd";
import { FAQS } from "@/lib/site";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 sm:py-28">
      <JsonLd data={faqStructuredData} />
      <div className="mx-auto w-full max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-ink">
            Questions, answered
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            BetterPomo, in plain English.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            The essentials about shared timers, focus rooms, pricing, and where
            BetterPomo works.
          </p>
        </div>

        <div className="mt-12 grid gap-3">
          {FAQS.map(({ question, answer }, index) => (
            <details
              key={question}
              className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm sm:p-6"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                {question}
                <span
                  aria-hidden="true"
                  className="text-xl font-light text-muted-foreground transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
