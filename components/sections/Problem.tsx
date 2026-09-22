"use client";

import { motion } from "motion/react";

export default function Problem() {
    const problems = [
        {
            title: "Où en sont réellement mes dossiers et mes projets ?",
            description:
                "Retrouvez rapidement les sujets en cours, les actions en attente et les prochaines échéances.",
        },
        {
            title: "Qui est disponible ? Et qui est déjà surchargé ?",
            description:
                "Visualisez la charge de travail de votre équipe et améliorez sa répartition.",
        },
        {
            title: "Qu’est-ce qui nécessite mon attention aujourd’hui ?",
            description:
                "Faites remonter les informations prioritaires dans un tableau de bord dirigeant.",
        },
        {
            title: "Quels processus me font encore perdre du temps ?",
            description:
                "Identifiez les tâches répétitives, les doubles saisies et les actions qui peuvent être structurées ou automatisées.",
        },
        {
            title: "Où se trouve la bonne information ?",
            description:
                "Centralisez les données utiles à votre pilotage sans avoir à reconstruire votre activité de mémoire.",
        },
    ];

    return (
        <section className="w-full bg-[#021F29] py-12 lg:py-16" id="problem">
            <div className="mx-auto flex w-full max-w-7xl flex-col px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                    >
                        LE PROBLÈME N’EST PAS LE MANQUE D’OUTILS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white"
                    >
                        Vos informations existent.{" "}
                        <span className="text-[#1FE48D]">
                            Mais sont-elles réellement connectées ?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-base leading-7 text-white/65 sm:text-lg"
                    >
                        Emails, tableurs, agendas, logiciels métier, documents, outils de
                        gestion, messageries…
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="mt-4 text-base leading-7 text-white/65 sm:text-lg"
                    >
                        Au fil du temps, les outils s’accumulent. L’information se disperse
                        entre plusieurs espaces et plusieurs personnes. Le dirigeant finit
                        par passer une partie de son temps à rechercher, vérifier, relancer
                        et reconstituer ce qui se passe réellement dans son activité.
                    </motion.p>
                </div>

                {/* Problems */}
                <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className={`rounded-2xl border border-[#08485C]/60 bg-[#03031F]/60 p-6 transition-colors hover:border-[#008C58] ${index === 3 ? "lg:col-start-1" : ""
                                }`}
                        >
                            <span className="text-sm font-semibold text-[#00846A]">
                                0{index + 1}
                            </span>

                            <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
                                {problem.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/60">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}