import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Ubicacion from "../components/ubicacion";

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
      <SectionTitle
        id="sobrenosotros"
        pretitle="Conócenos"
        title="Todo lo que necesitas saber">
        ¡Bienvenido al mundo del Airsoft al estilo Counter Strike! Si eres un fanático de los videojuegos de disparos, y siempre has soñado con sumergirte en el mundo real de la acción táctica, entonces has llegado al lugar correcto.

Aquí en nuestro negocio, llevamos el concepto de los videojuegos de disparos a la realidad. Ofrecemos partidas de Airsoft que te harán sentir como si estuvieras dentro de tu juego de Counter Strike favorito. ¿Te imaginas ser parte de una misión de rescate de rehenes, proteger una bomba, o incluso ser el último superviviente en una partida Battle Royale?

Nuestro campo de Airsoft ha sido diseñado para crear una experiencia de juego lo más parecida posible a los mapas de Counter Strike, con obstáculos y zonas de combate tácticas que te desafiarán a usar tus habilidades estratégicas para salir victorioso. Además, contamos con réplicas de armas y equipamiento militar de alta calidad, que te harán sentir como un verdadero soldado de élite.

En nuestro negocio, nos enorgullecemos de combinar la emoción de los videojuegos con la realidad del Airsoft. Aquí es donde la realidad y los videojuegos se unen para ofrecerte una experiencia única y emocionante que no encontrarás en ningún otro lugar. ¡Ven a jugar con nosotros y siente la adrenalina de la acción táctica al estilo Counter Strike!
      </SectionTitle>
      <Ubicacion data={benefitOne} />
      <Benefits data={benefitTwo} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
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
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </main>
  );
}
