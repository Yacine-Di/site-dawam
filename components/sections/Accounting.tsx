"use client";

import Image from "next/image";
import { motion } from "motion/react";

const features = [
    "Dashboard dirigeant",
    "Clients & missions",
    "Production & tâches",
    "Plan de charge",
    "Onboarding",
    "Échéances",
    "Relances & pièces",
    "Facturation",
    "Procédures",
];

export default function Accounting() {
    return (
        <section
            className="w-full overflow-x-hidden bg-[#021F29] py-12 scroll-mt-20 lg:py-16"
            id="accounting"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                        >
                            DAWAM POUR LES CABINETS COMPTABLES
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            Un cockpit construit autour de votre métier.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            DAWAM OS a d'abord été développé en profondeur
                            autour du fonctionnement d'un cabinet comptable.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
                        >
                            Production, clients, charge collaborateurs,
                            onboarding, échéances, relances, facturation et
                            procédures : le système s'adapte aux processus du
                            cabinet.
                        </motion.p>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: 0.55 + index * 0.07,
                                    }}
                                    className="flex items-center gap-2 rounded-lg border border-[#08485C]/60 bg-[#03031F] px-3 py-2.5 text-left text-sm text-white/80"
                                >
                                    <span className="font-semibold text-[#1FE48D]">
                                        ✓
                                    </span>
                                    {feature}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full overflow-hidden rounded-3xl border border-[#08485C]/70 bg-[#03031F]"
                    >
                        <Image
                            src="/dawam-accounting.png"
                            alt="Cockpit DAWAM pour cabinet comptable"
                            width={600}
                            height={380}
                            className="h-auto w-full rounded-3xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}