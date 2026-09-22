import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CtaLink from "../ui/CtaLink";

const steps = [
  {
    number: "01",
    title: "CENTRALISEZ",
    description:
      "Rassemblez les informations essentielles de votre activité dans un environnement structuré : clients, dossiers, projets, équipe, échéances, procédures et indicateurs.",
  },
  {
    number: "02",
    title: "PILOTEZ",
    description:
      "Transformez ces informations en tableaux de bord et vues opérationnelles pour savoir ce qui se passe, ce qui bloque et où agir.",
  },
  {
    number: "03",
    title: "AUTOMATISEZ",
    description:
      "Identifiez les tâches répétitives et les flux qui peuvent être automatisés grâce à l’IA et aux automatisations, selon les besoins réels de votre organisation.",
  },
];

export default function Method() {
  return (
    <section className="w-full bg-[#03031F] py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]">
            LA MÉTHODE DAWAM
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Centralisez. Pilotez.{" "}
            <span className="text-[#1FE48D]">Automatisez.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-[#08485C]/60 bg-[#021F29]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#008C58]"
            >
              <span className="text-4xl font-bold text-[#00846A]/40 transition-colors group-hover:text-[#1FE48D]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <CtaLink />
        </div>
      </div>
    </section>
  );
}