import { Carousel } from "@/components/landing";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Paleteria Michoacana',
}


export default function Home() {
  return (
    <main>
      <section>
        <Carousel />
      </section>

      <div className="py-2 px-2">
        <section>
          <div>
            Imagen ilustrativa
          </div>

          <div>
            Info Empresa
          </div>
        </section>

        <section>
          <div>

            <div>
              Imagenes productos
            </div>

            <div>
              Información general
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
