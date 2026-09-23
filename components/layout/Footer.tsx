"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const navigation = [
    { label: "Accueil", href: "#hero" },
    { label: "Solution", href: "#system" },
    { label: "Méthode", href: "#method" },
    { label: "Cas d’usage", href: "#accounting" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#08485C]/50 bg-[#03031F]">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
                    {/* Brand + Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="text-2xl font-bold text-white">
                            DAWAM
                        </Link>

                        <p className="mt-3 text-base font-semibold text-[#1FE48D]">
                            Centralisez. Pilotez. Automatisez.
                        </p>

                        <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                            Systèmes de pilotage sur mesure pour structurer et
                            automatiser votre activité.
                        </p>

                        {/* Emplacement logo */}
                        <div className="mt-8 flex h-20 w-40 items-center justify-center rounded-xl border border-dashed border-[#08485C] bg-[#021F29]/40">
                            <div className="flex items-center">
                                <Image
                                    src="/logo-dawam.png"
                                    alt="DAWAM"
                                    width={70}
                                    height={70}
                                    priority
                                    className="h-[70px] w-[70px]"
                                />
                            </div>
                        </div>
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

                        <nav className="mt-5 flex flex-col gap-3">
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

                        <div className="mt-5 flex flex-col gap-3 text-sm">
                            <a
                                href="tel:+33771676758"
                                className="text-white/60 transition-colors hover:text-[#1FE48D]"
                            >
                                +33 7 71 67 67 58
                            </a>

                            <a
                                href="mailto:mehdi.daifi@dawam-os.com"
                                className="break-all text-white/60 transition-colors hover:text-[#1FE48D]"
                            >
                                mehdi.daifi@dawam-os.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-[#08485C]/40 pt-6">
                    <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <Link
                                href="/mentions-legales"
                                className="transition-colors hover:text-white"
                            >
                                Mentions légales
                            </Link>

                            <Link
                                href="/confidentialite"
                                className="transition-colors hover:text-white"
                            >
                                Politique de confidentialité
                            </Link>
                        </div>

                        <p>
                            © {new Date().getFullYear()} DAWAM. Tous droits réservés.
                        </p>
                    </div>

                    <p className="mt-5 text-center text-xs text-white/30">
                        Site créé par{" "}
                        <a
                            href="https://ydweb.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 transition-colors hover:text-[#1FE48D]"
                        >
                            YDWEB
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}