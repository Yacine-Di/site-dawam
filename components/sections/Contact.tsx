"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <section
            className="w-full bg-[#021F29] py-20 lg:py-28 scroll-mt-20"
            id="contact">
            <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                    >
                        CONTACT
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Parlons de votre projet.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60"
                    >
                        DAWAM intervient en France, en Suisse et en Belgique pour
                        construire des systèmes de pilotage adaptés à votre activité.
                    </motion.p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {/* Zone d'intervention */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-[#08485C]/60 bg-[#03031F]/50 p-6 text-center"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1FE48D]">
                            Zone d'intervention
                        </p>

                        <p className="mt-4 text-white">
                            France · Suisse · Belgique
                        </p>
                    </motion.div>

                    {/* Téléphone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-[#08485C]/60 bg-[#03031F]/50 p-6 text-center"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1FE48D]">
                            Téléphone
                        </p>

                        <a
                            href="tel:+33771676758"
                            className="mt-4 block text-white transition-colors hover:text-[#1FE48D]"
                        >
                            +33 7 71 67 67 58
                        </a>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-2xl border border-[#08485C]/60 bg-[#03031F]/50 p-6 text-center"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1FE48D]">
                            Email
                        </p>

                        <a
                            href="mailto:mehdi.daifi@dawam-os.com"
                            className="mt-4 block break-all text-sm text-white transition-colors hover:text-[#1FE48D]"
                        >
                            mehdi.daifi@dawam-os.com
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}