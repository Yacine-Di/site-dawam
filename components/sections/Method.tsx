"use client";

import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "AUDIT",
        description:
            "Nous comprenons votre fonctionnement, vos outils et vos points de friction.",
    },
    {
        number: "02",
        title: "CARTOGRAPHIE",
        description:
            "Nous identifions ce qui doit être centralisé, structuré ou automatisé.",
    },
    {
        number: "03",
        title: "CONSTRUCTION",
        description:
            "Nous construisons votre cockpit autour de vos processus.",
    },
    {
        number: "04",
        title: "CONNEXION",
        description:
            "Nous connectons les outils et automatisons les actions pertinentes.",
    },
    {
        number: "05",
        title: "FORMATION",
        description:
            "Vous et votre équipe prenez le système en main.",
    },
    {
        number: "06",
        title: "ÉVOLUTION",
        description:
            "Votre activité évolue. Votre système aussi.",
    },
];

export default function Method() {
    return (
        <section
            className="w-full bg-[#021F29] py-12 lg:py-16"
            id="method"
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
                        NOTRE MÉTHODE
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        On ne commence pas par l'outil.
                        <br />
                        <span className="text-[#1FE48D]">
                            On commence par vous.
                        </span>
                    </motion.h2>
                </div>

                {/* Timeline */}
                <div className="relative mt-16">
                    {/* Desktop line */}
                    <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#08485C] lg:block" />

                    {/* Mobile line */}
                    <div className="absolute bottom-0 left-[23px] top-0 w-px bg-[#08485C] lg:hidden" />

                    <div className="grid gap-10 lg:grid-cols-6 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                className="relative flex gap-5 lg:block lg:text-center"
                            >
                                {/* Number */}
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.15 + index * 0.12,
                                    }}
                                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#008C58] bg-[#03031F] text-sm font-bold text-[#1FE48D]"
                                >
                                    {step.number}
                                </motion.div>

                                {/* Content */}
                                <div className="pt-1 lg:mt-7 lg:pt-0">
                                    <h3 className="text-base font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}