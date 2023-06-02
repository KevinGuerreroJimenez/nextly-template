import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Servicios(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          id={data.id}
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              className="rounded-sm"
              src={data.image}
              width="521"
              height="482"
              alt="Servicios"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug lg:leading-tight lg:text-4xl text-white font-blackops tracking-wide">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">
                {data.desc}
              </p>

            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-red-700 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-red-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-200 font-blackops">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
