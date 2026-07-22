import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="mainBtn py-4 px-8 bg-brandnd text-white font-bold rounded-md hover:bg-brand transition duration-300 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-brand text-[var(--font-display)]">
        {" "}
        {props.children}{" "}
      </button>
    </div>
  );
};

export default Button;
