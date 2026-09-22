"use client";

import { motion } from "motion/react";
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
    <section className="w-full bg-[#03031F] py-12 lg:py-16" id="method">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
          >
            LA MÉTHODE DAWAM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Centralisez. Pilotez.{" "}
            <span className="text-[#1FE48D]">Automatisez.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <CtaLink />
        </motion.div>
      </div>
    </section>
  );
}