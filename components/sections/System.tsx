"use client";

import { motion } from "motion/react";
import CtaLink from "../ui/CtaLink";

const professions = [
    {
        title: "Cabinets comptables",
        description:
            "Production, charge, clients, échéances et procédures.",
    },
    {
        title: "Cabinets d’audit",
        description:
            "Missions, équipes, livrables, échéances et suivi opérationnel.",
    },
    {
        title: "Cabinets d’avocats",
        description:
            "Dossiers, clients, échéances, responsabilités et processus internes.",
    },
    {
        title: "Cabinets de conseil",
        description:
            "Missions, consultants, charge, livrables et rentabilité.",
    },
    {
        title: "Entreprises de services",
        description:
            "Clients, projets, opérations, équipes et automatisations.",
    },
];

export default function System() {
    return (
        <section
            className="w-full bg-[#021F29] py-12 lg:py-16 scroll-mt-20"
            id="system"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                        >
                            PAS UN TEMPLATE. VOTRE SYSTÈME.
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            Votre entreprise ne fonctionne pas comme les autres.
                            <br />
                            <span className="text-[#1FE48D]">
                                Votre système ne devrait pas non plus.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            Nous partons de vos processus, de vos contraintes et
                            de vos outils pour construire un cockpit adapté à
                            votre réalité.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            DAWAM ne cherche pas systématiquement à remplacer
                            vos logiciels existants. Il les connecte lorsque
                            cela est pertinent et crée une vision d'ensemble de
                            votre activité.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-6 space-y-2"
                        >
                            <p className="text-base font-semibold text-white">
                                Votre environnement reste en place.
                            </p>

                            <p className="text-base font-semibold text-[#1FE48D]">
                                Votre pilotage devient plus clair.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            className="mt-8 flex justify-center lg:justify-start"
                        >
                            <CtaLink />
                        </motion.div>
                    </div>

                    {/* Professions */}
                    <div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {professions.map((profession, index) => (
                                <motion.div
                                    key={profession.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.15 + index * 0.1,
                                    }}
                                    whileHover={{ y: -4 }}
                                    className={`group rounded-2xl border border-[#08485C]/60 bg-[#03031F]/60 p-5 transition-colors duration-300 hover:border-[#008C58] ${index === 4
                                        ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.375rem)]"
                                        : ""
                                        }`}
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00846A]/15 text-sm font-bold text-[#1FE48D]">
                                            0{index + 1}
                                        </div>

                                        <h3 className="text-base font-bold text-white">
                                            {profession.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm leading-6 text-white/60 transition-colors group-hover:text-white/75">
                                        {profession.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}