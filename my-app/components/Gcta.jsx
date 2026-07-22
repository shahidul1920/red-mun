import Link from "next/link";
import React from "react";

const Gcta = (props) => {
  const heading = props.heading || "Ready to take your business to the next level?";
  const text = props.text || "Contact us today to learn more about how our solutions can help you achieve your goals.";
  const linkText = props.linkText;
  const linkHref = props.linkHref;
  const buttonLabel = props.buttonLabel || props.btnText || "Get A Quote";
  const buttonHref = props.buttonHref || props.link || "/contact";

  return (
    <section className="scroll-reveal relative w-full overflow-hidden bg-[#16181F] py-16 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#F6F4EF_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-semibold text-white md:text-3xl"
            >
              {heading}
            </h3>
            <p className="mt-3 max-w-lg text-sm text-white/60 md:text-base">
              {text}
            </p>
            {linkText && linkHref && (
              <Link
                href={linkHref}
                className="mt-3 inline-block text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
              >
                {linkText}
              </Link>
            )}
          </div>
          <Link
            href={buttonHref}
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#C81A2B] md:w-auto"
          >
            {buttonLabel}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gcta;
