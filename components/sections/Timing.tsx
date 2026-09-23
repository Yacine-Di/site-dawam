"use client";

import { motion } from "motion/react";

const criteria = [
    "Vous gérez plusieurs clients, dossiers ou projets.",
    "Votre équipe grandit.",
    "L'information commence à se disperser.",
    "Vous passez trop de temps à vérifier et relancer.",
    "Certains processus reposent encore sur des actions manuelles.",
    "Vous voulez automatiser sans perdre le contrôle.",
];

export default function Timing() {
    return (
        <section
            className="w-full bg-[#021F29] py-12 lg:py-16"
            id="timing"
        >
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
                        DAWAM EST PERTINENT SI…
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Votre activité est devenue trop complexe pour être
                        pilotée de tête.
                    </motion.h2>
                </div>

                {/* Criteria */}
                <div className="mx-auto mt-14 grid w-full max-w-5xl gap-3 sm:grid-cols-2">
                    {criteria.map((criterion, index) => (
                        <motion.div
                            key={criterion}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="group flex items-center gap-4 rounded-2xl border border-[#08485C]/60 bg-[#03031F]/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#008C58]"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00846A]/15 text-[#1FE48D] transition-colors group-hover:bg-[#00846A]/30">
                                ✓
                            </span>

                            <p className="text-sm leading-6 text-white/75 sm:text-base">
                                {criterion}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#008C58]/40 bg-[#00846A]/5 px-6 py-5 text-center"
                >
                    <p className="text-base font-semibold leading-7 text-[#1FE48D] sm:text-lg">
                        C'est généralement à ce moment-là qu'un véritable
                        système devient nécessaire.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}