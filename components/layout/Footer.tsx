"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navigation = [
    { label: "Solution", href: "#solution" },
    { label: "Méthode", href: "#methode" },
    { label: "Cas d'usage", href: "#cas-usage" },
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#08485C]/50 bg-[#03031F]">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight text-white"
                        >
                            DAWAM
                        </Link>

                        <p className="mt-3 text-base font-semibold text-[#1FE48D]">
                            Centralisez. Pilotez. Automatisez.
                        </p>

                        <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                            Systèmes de pilotage sur mesure pour structurer et automatiser
                            votre activité.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                            Navigation
                        </p>

                        <nav className="mt-4 flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="w-fit text-sm text-white/60 transition-colors hover:text-[#1FE48D]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                            Contact
                        </p>

                        <a
                            href="mailto:mehdi.daifi@dawam-os.com"
                            className="mt-4 block text-sm text-white/60 transition-colors hover:text-[#1FE48D]"
                        >
                            mehdi.daifi@dawam-os.com
                        </a>
                    </motion.div>
                </div>

                <div className="mt-12 border-t border-[#08485C]/40 pt-6">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} DAWAM. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}