import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Normativa(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div id={data.id} className={`flex flex-wrap items-center w-full justify-center`}>
          <div className="items-center w-full lg:w-2/3 justify-center">
            <div className="flex flex-col w-full items-center justify-center mt-4">
              <h3 className="mt-3 text-3xl font-bold leading-snug lg:leading-tight lg:text-4xl text-white font-blackops tracking-wide text-center">
                {data.title}
              </h3>

              <p className="py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">
                {data.desc}
              </p>

            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} content={item.contenido}>
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
      <div className="flex items-start mt-6 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 bg-red-700 rounded-md w-5 h-5"></div>
        <div>
          <h4 className="text-xl font-normal text-gray-200 font-blackops">
            {props.title}
          </h4>
          {props.content.map((item, index) => (
            <div className="flex items-start md:items-center mt-2 md:mt-1  space-x-3" key={index}>
               <div className="flex items-center mt-1 md:mt-0 justify-center flex-shrink-0 bg-yellow-400 rounded w-2 h-4"></div>
                <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
