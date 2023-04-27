import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Ubicacion(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          id={data.id}
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="overflow-hidden ">
            <iframe className="rounded-sm border-red-500 border border-opacity-50 w-full md:w-521" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1811.6703296334051!2d2.8407043786980726!3d41.89662967377015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUzJzQ3LjkiTiAywrA1MCczMC40IkU!5e1!3m2!1ses!2ses!4v1682593023455!5m2!1ses!2ses" height="521" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">
                {data.desc}
              </p>
              
              {(data.descExtra!=null) && <span className="max-w-2xl pb-2 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">{data.descExtra}</span>}
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
            className: "w-7 h-7 text-white",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-200">
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
