import Image from "next/image";
import Link from "next/link";

import gs1 from "@/public/images/gs1.png";
import gs2 from "@/public/images/gs2.png";
import gs3 from "@/public/images/gs3.png";
import gs4 from "@/public/images/gs4.png";
import gs5 from "@/public/images/gs5.png";
import CylinderGallery from "@/components/cylinder-gallery";


export default function GymSchedulePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-indigo-300">
              GYM-SCHEDULE
            </span>

            <h1 className="mt-6 text-4xl font-semibold md:text-6xl">
              Gym Schedule
            </h1>

            <p className="mt-6 text-lg text-indigo-200/65">
              Plataforma web para gestionar horarios de gimnasio, clases,
              entrenadores y disponibilidad de espacios.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm">
                Next.js
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm">
                TypeScript
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm">
                Tailwind CSS
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm">
                Supabase
              </span>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="btn bg-indigo-600 text-white hover:bg-indigo-500"
              >
                Ver demo
              </a>

              <a
                href="#"
                className="btn bg-gray-800 text-white hover:bg-gray-700"
              >
                Ver código
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src={gs1}
              alt="Gym Schedule"
              width={1100}
              height={750}
              className="rounded-2xl border border-gray-800 shadow-2xl"
            />
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold">Sobre el proyecto</h2>

          <p className="mt-4 max-w-3xl text-indigo-200/65">
            Este proyecto permite organizar horarios de clases, administrar
            usuarios, visualizar cupos disponibles y mejorar la planificación
            interna de un gimnasio.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="text-xl font-semibold">Gestión de horarios</h3>
            <p className="mt-3 text-indigo-200/65">
              Permite crear, editar y visualizar horarios de clases.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="text-xl font-semibold">Control de cupos</h3>
            <p className="mt-3 text-indigo-200/65">
              Muestra disponibilidad para evitar sobrecupo.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="text-xl font-semibold">Diseño responsive</h3>
            <p className="mt-3 text-indigo-200/65">
              Adaptado para computadoras, tablets y celulares.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Galería del proyecto
          </h2>

          <CylinderGallery />
        </section>
      </section>
    </main>
  );
}