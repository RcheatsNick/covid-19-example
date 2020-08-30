import React from "react";

export default function SectionTitle(props) {
  const {text} = props;
  return (
    <h2 className="uppercase font-semibold tracking-wider mb-2" style={{color: "#f94c61"}}>
      {text}
    </h2>
  );
}
