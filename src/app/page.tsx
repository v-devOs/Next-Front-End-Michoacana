import { Carousel } from "@/components/landing";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'Paleteria Michoacana',
}


export default function Home() {
  return (
    <main>
      <section>
        <Carousel images={['/img/carousel_1.png', '/img/carousel_2.png']} />
      </section>

      <div className="mt-4">

        <section className="bg-[url('/img/background_1.png')] p-10 bg-cover bg-center">
          <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-md p-6 shadow-lg">
            <h2 className="text-5xl font-bold font-mono text-pink-500">Los mejores sabores del Bajío</h2>
            <div className="flex justify-evenly gap-5 mt-4">
              <div>
                <Image
                  src={'/img/background_2.png'}
                  width={300}
                  height={300}
                  alt="Imagen Helado"
                  className="rounded-sm"
                />
              </div>

              <div className="flex flex-wrap gap-5 items-center">
                <div className="backdrop-blur-sm bg-dark/15 p-2 rounded-sm h-[300px] w-[400px]">
                  <h2 className="text-yellow-500 font-bold text-2xl">Sabores Únicos y Deliciosos</h2>
                  <p className="text-gray-500">
                    ¡Descubre el placer de probar una paleta diferente cada día! En nuestra paletería nos
                    enorgullecemos de ofrecer una amplia variedad de sabores, creados con ingredientes frescos y de
                    la más alta calidad. Cada sabor es una experiencia única, pensada para sorprender tu paladar.
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-dark/15 p-2 rounded-sm h-[300px] w-[400px]">
                  <h2 className="text-yellow-500 font-bold text-2xl">¡Encuentra tu Sabor Favorito!</h2>
                  <p>
                    Ya sea que prefieras lo frutal, lo cremoso o algo diferente, en nuestra
                    paletería siempre encontrarás algo nuevo que probar.
                    Ven y déjate sorprender por nuestras combinaciones únicas y sabores artesanales.
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-dark/15 p-2 rounded-sm h-[300px] w-[400px]">
                  <h2 className="text-yellow-500 font-bold text-2xl">Sabores Únicos y Deliciosos</h2>
                  <p>
                    ¡Descubre el placer de probar una paleta diferente cada día! En nuestra paletería nos
                    enorgullecemos de ofrecer una amplia variedad de sabores, creados con ingredientes frescos y de
                    la más alta calidad. Cada sabor es una experiencia única, pensada para sorprender tu paladar.
                  </p>
                </div>
              </div>

            </div>
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
