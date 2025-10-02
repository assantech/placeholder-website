import Showcase from "./showcase";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col md:flex-row">
      {/* Colonna sinistra: Testo */}
      <section className="flex-1 flex flex-col justify-center items-center md:items-start px-6 sm:px-16 py-6 md:py-12 order-2 md:order-1">
        <h1 className="my-4 text-3xl sm:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          This site will soon be something
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          In the meantime you can visit some of our showcase websites
        </p>
        <Showcase />
      </section>

      {/* Colonna destra: Logo */}
      <section className="flex-1 flex flex-col justify-center items-center md:items-start order-1 md:order-1">
        <div className="relative w-5/6 max-w-xl md:aspect-square aspect-video mx-auto md:max-h-40 max-h-none">
          <Image
            src="/logo.svg"
            alt="Logo hivesoft"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </section>
    </main>
  );
}
