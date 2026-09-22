"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CtaLink() {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                whileHover={{ backgroundColor: "#008C58" }}
                transition={{ duration: 0.2 }}
                className="rounded-lg bg-[#00846A] shadow-md"
            >
                <Link
                    href="/contact"
                    className="block rounded-lg px-6 py-3 text-lg font-semibold text-white"
                >
                    Échanger sur votre besoin
                </Link>
            </motion.div>
        </motion.div>
    );
}