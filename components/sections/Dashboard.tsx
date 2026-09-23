"use client";

import { motion } from "motion/react";

const features = [
    {
        title: "Équipe & charge",
        description:
            "Visualisez la capacité de votre équipe, identifiez les tensions et répartissez le travail avec une vision claire des priorités.",
        visual: (
            <div className="flex items-end justify-center gap-2">
                {[45, 70, 55, 85, 60].map((height, index) => (
                    <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}px` }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4 + index * 0.08,
                        }}
                        className="w-7 rounded-t-md bg-[#00846A]/70"
                    />
                ))}
            </div>
        ),
    },
    {
        title: "Processus",
        description:
            "Structurez votre fonctionnement : qui fait quoi, à quel moment et selon quel processus.",
        visual: (
            <div className="flex items-center justify-center gap-2">
                {["01", "02", "03"].map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4 + index * 0.15,
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#08485C] bg-[#021F29] text-xs font-semibold text-[#1FE48D]"
                        >
                            {step}
                        </motion.div>

                        {index < 2 && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: 24, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.55 + index * 0.15,
                                }}
                                className="h-px bg-[#00846A]"
                            />
                        )}
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: "Automatisation",
        description:
            "Automatisez les actions répétitives qui vous ralentissent : relances, notifications, création de tâches, mise à jour d'informations ou transmission de données.",
        visual: (
            <div className="flex items-center justify-center gap-3">
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-lg border border-[#08485C] bg-[#021F29] px-3 py-2 text-xs text-white/70"
                >
                    Événement
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.65 }}
                    className="text-[#1FE48D]"
                >
                    →
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="rounded-lg bg-[#00846A] px-3 py-2 text-xs font-semibold text-white"
                >
                    DAWAM
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="text-[#1FE48D]"
                >
                    →
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.15 }}
                    className="rounded-lg border border-[#08485C] bg-[#021F29] px-3 py-2 text-xs text-white/70"
                >
                    Action
                </motion.div>
            </div>
        ),
    },
];

export default function Dashboard() {
    return (
        <section
            className="w-full bg-[#03031F] py-12 lg:py-16"
            id="dashboard"
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
                        VOTRE SYSTÈME DE PILOTAGE
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Une vision claire de votre activité.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
                    >
                        DAWAM centralise les informations essentielles de votre
                        entreprise dans un environnement construit autour de votre
                        fonctionnement.
                    </motion.p>
                </div>

                {/* Features */}
                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="group rounded-2xl border border-[#08485C]/60 bg-[#021F29]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#008C58]"
                        >
                            <div className="flex h-36 items-center justify-center rounded-xl border border-[#08485C]/40 bg-[#03031F]/60">
                                {feature.visual}
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/60">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="mt-12 text-center text-lg font-semibold text-[#1FE48D] sm:text-xl"
                >
                    Vous ouvrez DAWAM. Vous savez où vous en êtes.
                </motion.p>
            </div>
        </section>
    );
}