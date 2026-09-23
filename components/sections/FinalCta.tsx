"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function FinalCta() {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#03031F] py-20 lg:py-28"
            id="contact"
        >
            {/* Background glow */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00846A]/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center lg:px-8">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                >
                    VOTRE ACTIVITÉ MÉRITE MIEUX QU'UN EMPILEMENT D'OUTILS.
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl"
                >
                    Construisons le système qui va avec.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
                >
                    Présentez-nous votre fonctionnement, vos difficultés et vos
                    objectifs.
                    <br />
                    Nous identifierons ce qu'il est pertinent de centraliser,
                    structurer et automatiser.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-9"
                >
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            whileHover={{ backgroundColor: "#008C58" }}
                            transition={{ duration: 0.2 }}
                            className="rounded-lg bg-[#00846A] shadow-lg shadow-[#00846A]/20"
                        >
                            <Link
                                href="/contact"
                                className="block rounded-lg px-7 py-3.5 text-lg font-semibold text-white"
                            >
                                Parler de mon projet
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}