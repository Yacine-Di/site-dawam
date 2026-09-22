"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function DiscoverLink() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        whileHover={{ backgroundColor: "#021F29" }}
        transition={{ duration: 0.2 }}
        className="rounded-lg border border-[#08485C] bg-transparent"
      >
        <Link
          href="/"
          className="block rounded-lg px-6 py-3 text-lg font-semibold text-white"
        >
          Découvrir DAWAM
        </Link>
      </motion.div>
    </motion.div>
  );
}