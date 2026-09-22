"use client";

import { motion } from "framer-motion";

export default function Management() {
  return (
    <section className="w-full bg-[#03031F] py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
          >
            UNE VISION CLAIRE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Arrêtez de chercher l’information.
            <br />
            <span className="text-[#1FE48D]">
              Commencez à la piloter.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
          >
            Ce qui avance. Ce qui bloque. Ce qui devient urgent. Ce qui
            nécessite votre attention.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
          >
            DAWAM fait remonter l’essentiel pour vous aider à décider plus
            vite.
          </motion.p>

        </div>
      </div>
    </section>
  );
}