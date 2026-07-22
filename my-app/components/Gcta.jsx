import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

const Gcta = (props) => {
  return (
    <div className="bg-brandnd relative py-20 md:py-28 px-4 md:px-0">
      <section className="container mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="textSec grid gap-3">
          <h3 className="text-2xl font-bold text-brand sm:text-3xl md:text-4xl capitalize">
            {props.heading
              ? props.heading
              : "Ready to take your business to the next level?"}
          </h3>

          <p className="text-[16px] text-brand max-w-[400px]">
            {props.text
              ? props.text
              : "Contact us today to learn more about how our solutions can help you achieve your goals."}
          </p>
        </div>

        <Link href={props.link ? props.link : "/contact"} className="btn">
          <Button>{props.btnText ? props.btnText : "Get A Quote"}</Button>
        </Link>
      </section>
    </div>
  );
};

export default Gcta;
