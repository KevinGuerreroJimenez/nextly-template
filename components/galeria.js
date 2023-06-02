import Image from "next/image";
import poster from "../public/img/galeria/poster.png";
import parking from "../public/img/galeria/parking.jpeg";
import foto1 from "../public/img/galeria/foto1.jpeg";
import foto2 from "../public/img/galeria/foto2.jpeg";
import foto3 from "../public/img/galeria/foto3.jpeg";
import foto4 from "../public/img/galeria/foto4.jpeg";
import foto5 from "../public/img/galeria/foto5.jpeg";
import foto6 from "../public/img/galeria/foto6.jpeg";

export default function Galeria() {

    const imagenes = [
        foto2,
        foto5,
        foto4,
        foto3,
        foto6,
        foto1,
        parking,
    ]

    return (
        <section className="container p-8 mx-auto xl:px-0 flex flex-wrap">
            <div className="pt-8 px-4 lg:px-10">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-8">
                        <Image priority width={'100%'} className="rounded shadow-md" src={poster} alt="Poster de Sentinel Airsoft" />
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 p-8">
                    { imagenes.map((imagen, index) => (
                        <div key={index} className="w-full h-min">
                            <Image priority className="rounded shadow-md object-cover" src={imagen} alt="" />
                        </div>
                    ))}
                    </div>
                   
                </div>
            </div>
        </section>
    );
}
