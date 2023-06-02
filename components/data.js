import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  StopIcon,
  UserIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  id: "ubicacion",
  title: "Ubicación",
  desc: "Nuestro campo de juego está situado en Campllong, provincia de Girona, justo al lado del restaurante Club Deportivo Gavarres y el campo de tiro del Sports Center Gavarres.",
  descExtra: "Las instalaciones cuentan con:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Parking gratuito",
      desc: "Un parking grande y accesible para todo el mundo en la entrada, al lado del restaurante.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/></svg>,
    },
    {
      title: "Lavabos",
      desc: "Servicios disponibles al lado del bar para los clientes del Airsoft.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="pt-0.5" viewBox="0 0 640 650"><path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V325.2c-8.1 9.2-21.1 13.2-33.5 9.4c-16.9-5.3-26.3-23.2-21-40.1l30.9-99.1C44.9 155.3 82 128 124 128h8c42 0 79.1 27.3 91.6 67.4l30.9 99.1c5.3 16.9-4.1 34.8-21 40.1c-12.4 3.9-25.4-.2-33.5-9.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H120zM320 0c13.3 0 24 10.7 24 24V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24zM464 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM440 480V384H422.2c-10.9 0-18.6-10.7-15.2-21.1l9-26.9c-3.2 0-6.4-.5-9.5-1.5c-16.9-5.3-26.3-23.2-21-40.1l29.7-95.2C428.4 156.9 467.6 128 512 128s83.6 28.9 96.8 71.2l29.7 95.2c5.3 16.9-4.1 34.8-21 40.1c-3.2 1-6.4 1.5-9.5 1.5l9 26.9c3.5 10.4-4.3 21.1-15.2 21.1H584v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H504v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>,
    },
    {
      title: "Bar y Restaurante",
      desc: "Previa entrada al airsoft hay un bar y el restaurante Club Deportivo Gavarres.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>,
    },
  ],
};

const benefitTwo = {
  id: 'servicios',
  title: "Servicios",
  desc: "En nuestro negocio ofrecemos diferentes servicios a nuestros clientes:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Alquiler de material",
      desc: "Ofrecemos alquiler de réplicas y cascos con cristal.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>,
    },
    {
      title: "Munición ilimitada",
      desc: "Dispara todo lo que quieras, te cubrimos.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"/></svg>,
    },
    {
      title: "Partidas muuuy largas",
      desc: "Juega sin parar en partidas con diferentes modalidades durante 4 horas seguidas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>,
    },
  ],
};

const benefitThree = {
  id: 'normas',
  title: "Normativa",
  desc: "Para garantizar la seguridad y el disfrute de todos los jugadores en Sentinel Airsoft, hemos establecido una serie de normas y reglas que deben ser respetadas en todo momento:",
  bullets: [
    {
      title: "Requisitos mínimos",
      contenido: [
        { text: "Sólo se permite la participación en Sentinel Airsoft a mayores de 18 años."},
        { text: "Es obligatorio presentar una identificación oficial con fotografía, como el DNI, NIE, pasaporte o cualquier otro documento de identificación legal" }
      ]  
    },
    {
      title: "Conducta y compañerismo",
      contenido: [
        { text: "Prohibido el fuego amigo, en caso accidental, la persona que dispara queda eliminada."},
        { text: "Hay que respetar a compañeros y enemigos por igual." },
        { text: "Ante cualquier diferencia de criterio, el jugador deberá comunicar a los miembros de la organización la situación conflictiva, sin parar el juego ni molestar al resto de los jugadores."}
      ]    
    },
    {
      title: "Horario",
      contenido: [
        { text: "09:00 apertura de campo y realización del alquiler de material."},
        { text: "09:30 se realiza el briefing y se explica la normativa."},
        { text: "10:00 empieza la partida." },
        { text: "14:00 acaba la partida." }
      ]  
    },
    {
      title: "Seguridad",
      contenido: [
        { text: "Uso de gafas de protección obligatorias en todo momento desde que se entra al campo."},
        { text: "Cargadores quitados y seguros puestos en zonas seguras o fuera del campo."},
        { text: "Prohibido lanzar o alterar material o estructuras que se encuentren en el campo." },
        { text: "Prohibido alterar o manipular las delimitaciones del terreno." }
      ]  
    },
    {
      title: "Del Juego",
      contenido: [
        { text: "No disparar con armas de calibre a menor distancia de la recomendada, utilizar pistola en substitución."},
        { text: "Es obligatorio mostrar cuerpo al disparar, queda prohibido sacar arma por encima o lado de estructuras sin sacar cabeza o cuerpo acorde para acompañar el arma."},
      ]  
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
