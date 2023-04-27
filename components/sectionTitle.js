import React from "react";
import Container from "./container";

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div id={props.id} className="text-sm font-bold tracking-wider text-red-600 uppercase font-blackops">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-wide lg:leading-tight lg:text-2xl text-white font-blackops uppercase">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
