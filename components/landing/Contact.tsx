import { ContactForm } from "@/components/landing/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 sm:px-6">
      <div className="mx-auto w-full max-w-5xl rounded-[2.5rem] bg-lime-tint p-8 ring-1 ring-black/5 sm:p-14">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell us what to build next.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Share feedback, report a problem, ask a question, or just say
            hello.
          </p>
          <div className="mt-8 w-full text-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
