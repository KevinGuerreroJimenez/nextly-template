import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    { id: 'sobrenosotros', texto: "Sobre nosotros"},
    { id: 'ubicacion', texto: "Ubicación"},
    { id: 'servicios', texto: "Servicios"},
    { id: 'normas', texto: "Normas"},
    { id: 'galeria', texto: "Galeria"}
  ];
  const legal = ["Términos", "Política de privacidad", "Aviso legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-trueGray-700 lg:grid-cols-5 font-blackops">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
                  <span>
                    <img
                      src="/img/logo.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  </span>
                  <span>Sentinel Airsoft</span>
                </Link>
            </div>

            <div className="max-w-md mt-4 tracking-wide text-gray-400">
              Sumérgete en el emocionante mundo del Airsoft al estilo Counter Strike, donde realidad y videojuegos se unen para crear una experiencia única y emocionante. ¡Ven a jugar y siente la adrenalina!
            </div>

          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={"#" + item.id} className="w-full px-4 py-2 rounded-md text-gray-300 hover:text-red-700 focus:text-red-700 focus:outline-none focus:bg-trueGray-700">
                    {item.texto}
                </Link>
              ))}
            </div>
          </div>
          <div>
           {/* <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 rounded-md text-gray-300 hover:text-red-700 focus:text-red-700 focus:outline-none focus:bg-trueGray-700">
                    {item}
                </Link>
              ))}
            </div> */}
          </div>
          <div className="">
            <div className="w-full rounded-md text-white hover:text-red-700 focus:text-red-700 focus:outline-none focus:bg-trueGray-700 hover:cursor-pointer pb-4">
            <a href='mailto:sentinel.events.sl@gmail.com?subject=Me&body=Contacto a Sentinel Airsoft!'>Contacto</a></div>
            <div>Síguenos</div>
            <div className="flex mt-5 space-x-5 text-gray-500">
              <a
                href="https://www.facebook.com/people/Sentinel-Airsoft/100092167020835/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Facebook</span>
                <div className="hover:text-red-700"><Facebook /></div>
              </a>
              <a
                href="https://www.instagram.com/sentinel_airsoft.es/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <div className="hover:text-red-700"><Instagram /></div>
              </a>
              <a
                href="https://www.tiktok.com/@sentinel_airsoft.es"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Tik Tok</span>
                <div className="hover:text-red-700"><TikTok /></div>
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-400">
          Sentinel Airsoft © {new Date().getFullYear()}.
        </div>
      </Container>
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const TikTok = ({ size = 24 }) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width={size}
  height={size}
  viewBox="0 0 2859 3333" 
  fill="currentColor"
  clipRule="evenodd">
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
  </svg>
);
