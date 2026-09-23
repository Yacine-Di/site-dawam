"use client";

import { motion } from "motion/react";

const results = [
    "Vision claire",
    "Processus structurés",
    "Actions automatisées",
];

export default function Organization() {
    return (
        <section
            className="w-full bg-[#021F29] py-12 lg:py-16 overflow-x-hidden"
            id="organization"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                        >
                            VOTRE ORGANISATION VOUS RALENTIT ?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            Votre entreprise avance.
                            <br />
                            <span className="text-[#1FE48D]">
                                Votre organisation doit suivre.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            Informations dans les mails, tâches dans les têtes,
                            fichiers dispersés, outils qui ne communiquent pas.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            DAWAM rassemble les informations essentielles de
                            votre activité dans un système unique pour vous
                            permettre de voir ce qui avance, ce qui bloque et ce
                            qui nécessite votre attention.
                        </motion.p>

                        {/* Results */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-wrap">
                            {results.map((result, index) => (
                                <motion.div
                                    key={result}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + index * 0.12,
                                    }}
                                    className="rounded-xl border border-[#08485C]/60 bg-[#03031F]/50 px-4 py-3 text-sm font-semibold text-white"
                                >
                                    <span className="mr-2 text-[#1FE48D]">✓</span>
                                    {result}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-[#08485C]/60 bg-[#03031F]/60 p-8"
                    >
                        {/* Decorative glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                opacity: [0.2, 0.35, 0.2],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute h-48 w-48 rounded-full bg-[#00846A]/30 blur-3xl"
                        />

                        {/* Scattered information */}
                        <div className="absolute inset-0">
                            {[
                                { text: "Mails", x: "12%", y: "18%", delay: 0 },
                                { text: "Tâches", x: "15%", y: "65%", delay: 0.15 },
                                { text: "Fichiers", x: "65%", y: "15%", delay: 0.3 },
                                { text: "Outils", x: "70%", y: "68%", delay: 0.45 },
                            ].map((item) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: item.delay,
                                    }}
                                    className="absolute rounded-lg border border-[#08485C] bg-[#021F29] px-3 py-2 text-xs font-medium text-white/70"
                                    style={{
                                        left: item.x,
                                        top: item.y,
                                    }}
                                >
                                    {item.text}
                                </motion.div>
                            ))}
                        </div>

                        {/* DAWAM */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.7,
                            }}
                            className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl border border-[#1FE48D]/50 bg-[#00846A] shadow-[0_0_40px_rgba(31,228,141,0.2)]"
                        >
                            <span className="text-xl font-bold text-white">
                                DAWAM
                            </span>
                        </motion.div>

                        {/* Result labels */}
                        <div className="absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 justify-center gap-2 px-4">
                            {results.map((result, index) => (
                                <motion.span
                                    key={result}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1 + index * 0.15,
                                    }}
                                    className="rounded-full bg-[#021F29] px-3 py-1.5 text-[10px] font-semibold text-[#1FE48D] sm:text-xs"
                                >
                                    {result}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}