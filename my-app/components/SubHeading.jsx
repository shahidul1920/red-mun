import React from "react";

const SubHeading = (props) => {
  return (
    <div className={`text-[1.5rem] font-bold ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SubHeading;
