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
      icon: <StopIcon />,
    },
    {
      title: "Lavabos",
      desc: "Servicios disponibles al lado del bar para los clientes del Airsoft",
      icon: <UserIcon />,
    },
    {
      title: "Bar y Restaurante",
      desc: "Previa entrada al airsoft hay un bar y el restaurante Club Deportivo Gavarres.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
