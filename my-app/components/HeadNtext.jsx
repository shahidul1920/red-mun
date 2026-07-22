import React from "react";

const HeadNtext = (props) => {
  return (
    <article className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:px-6 lg:px-8">
      <h2
        className={`capitalize text-2xl font-bold text-brand sm:text-3xl md:text-4xl${props.styleText ? ` ${props.styleText}` : "text-brand"}`}
      >
        {props.heading}
      </h2>
      <p
        className={`text-[14px] ${props.styleText ? props.styleText : "text-brand"}`}
      >
        {props.text}
      </p>
    </article>
  );
};

export default HeadNtext;
