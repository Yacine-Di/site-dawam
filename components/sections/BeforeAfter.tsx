"use client";

import { motion } from "motion/react";

const comparisons = [
    ["Informations dispersées", "Cockpit centralisé"],
    ["Vérifications manuelles", "Informations structurées"],
    ["Charge difficile à visualiser", "Capacité équipe visible"],
    ["Suivi fragmenté", "Vision globale de l'activité"],
    ["Onboarding variable", "Processus standardisé"],
    ["Procédures dispersées", "Référentiel commun"],
    ["Tâches répétitives", "Automatisations ciblées"],
    ["Pilotage dans la tête du dirigeant", "Dashboard partagé"],
];

export default function BeforeAfter() {
    return (
        <section
            className="w-full bg-[#03031F] py-12 lg:py-16"
            id="before-after"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                    >
                        CE QUI CHANGE AVEC DAWAM
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Passez d'une organisation dispersée à un véritable
                        <span className="text-[#1FE48D]">
                            {" "}
                            système de pilotage.
                        </span>
                    </motion.h2>
                </div>

                {/* Comparison */}
                <div className="mx-auto mt-14 w-full max-w-5xl overflow-hidden rounded-2xl border border-[#08485C]/60">
                    {/* Headers */}
                    <div className="grid grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="border-b border-r border-[#08485C]/60 bg-[#021F29] p-4 text-center text-sm font-bold text-white/60 sm:p-5 sm:text-base"
                        >
                            Aujourd'hui
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="border-b border-[#08485C]/60 bg-[#00846A]/10 p-4 text-center text-sm font-bold text-[#1FE48D] sm:p-5 sm:text-base"
                        >
                            Avec DAWAM
                        </motion.div>
                    </div>

                    {/* Rows */}
                    {comparisons.map(([before, after], index) => (
                        <motion.div
                            key={before}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.06,
                            }}
                            className="grid grid-cols-2"
                        >
                            <div className="border-b border-r border-[#08485C]/40 bg-[#03031F]/60 p-4 text-sm text-white/55 sm:p-5 sm:text-base">
                                {before}
                            </div>

                            <div className="flex items-center gap-2 border-b border-[#08485C]/40 bg-[#021F29]/40 p-4 text-sm font-medium text-white sm:p-5 sm:text-base">
                                <span className="text-[#1FE48D]">✓</span>
                                {after}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-white/70 sm:text-lg"
                >
                    DAWAM transforme votre organisation en un système que votre
                    équipe peut comprendre, utiliser et faire évoluer.
                </motion.p>
            </div>
        </section>
    );
}