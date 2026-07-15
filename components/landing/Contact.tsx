import { ContactForm } from "@/components/landing/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-xl px-6 py-20 text-center sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          We&apos;d like to hear from you.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Share feedback, report a problem, ask a question, or just say hello.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
