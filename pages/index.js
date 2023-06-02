import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Servicios from "../components/servicios";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Ubicacion from "../components/ubicacion";
import Normativa from "../components/normativa";
import Galeria from "../components/galeria";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <main className="custom-box custom-dashed">
      <Head>
        <title>Sentinel Airsoft - Let the war begin</title>
        <meta
          name="description"
          content="Sentinel Airsoft es el lugar donde los videojuegos y el airsoft van de la mano."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <div className="pb-4">
        <SectionTitle
          id="sobrenosotros"
          pretitle="Conócenos"
          title="Todo lo que necesitas saber">
            ¡Bienvenido al mundo del Airsoft al estilo Counter Strike! En nuestro negocio, llevamos el concepto de los videojuegos de disparos a la realidad. Ofrecemos partidas de Airsoft que te harán sentir como si estuvieras dentro de tu juego de Counter Strike favorito. Nuestro campo de Airsoft ha sido diseñado para crear una experiencia de juego lo más parecida posible a los mapas de Counter Strike, con obstáculos y zonas de combate tácticas que te desafiarán a usar tus habilidades estratégicas para salir victorioso. Contamos con réplicas de armas y equipamiento militar de alta calidad, que te harán sentir como un verdadero soldado de élite. En nuestro negocio, nos enorgullecemos de combinar la emoción de los videojuegos con la realidad del Airsoft. ¡Ven a jugar con nosotros y siente la adrenalina de la acción táctica al estilo Counter Strike!
        </SectionTitle>
      </div>
      <Ubicacion data={benefitOne} />
      <Servicios data={benefitTwo} />
      <Normativa data={benefitThree} />
      <SectionTitle
        id="galeria"
        pretitle="Galeria"
        title="Fotos y videos">
      </SectionTitle>
      {/*<Video />*/}
      <Galeria />
      {/*<SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />*/}
      <Footer />
      <PopupWidget />
    </main>
  );
}
