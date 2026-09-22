"use client";

import { motion } from "motion/react";

export default function Dashboard() {
  return (
    <section className="w-full text-center bg-[#021F29] py-12 lg:py-16" id="dashboard">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
          >
            VOTRE SYSTÈME DE PILOTAGE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Un seul cockpit pour voir{" "}
            <span className="text-[#1FE48D]">ce qui compte.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
          >
            DAWAM centralise les informations essentielles de votre activité
            dans un environnement construit autour de votre fonctionnement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 text-base font-medium leading-7 text-white"
          >
            Activité. Équipe. Clients. Missions. Priorités. Alertes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-lg font-semibold leading-7 text-[#1FE48D]"
          >
            Vous ouvrez DAWAM. Vous savez où vous en êtes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}