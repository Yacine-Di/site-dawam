"use client";

import { motion } from "motion/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "DAWAM remplace-t-il mes logiciels actuels ?",
        answer:
            "Pas nécessairement. DAWAM peut s'appuyer sur vos outils existants et devenir la couche de pilotage qui relie les informations importantes.",
    },
    {
        question: "Est-ce un template Notion ?",
        answer:
            "Non. Nous partons de votre fonctionnement pour construire un système adapté à votre activité.",
    },
    {
        question: "DAWAM fonctionne-t-il uniquement avec Notion ?",
        answer:
            "Notion peut constituer une partie du système. DAWAM peut également intégrer d'autres outils et automatisations selon vos besoins.",
    },
    {
        question: "Est-ce réservé aux cabinets comptables ?",
        answer:
            "Non. Les cabinets comptables constituent le premier cas d'usage développé en profondeur, mais la méthode DAWAM peut être appliquée à d'autres activités de services.",
    },
    {
        question: "Peut-on automatiser nos processus existants ?",
        answer:
            "Oui, lorsque cela est pertinent. Nous identifions d'abord les actions répétitives et les flux qui gagnent réellement à être automatisés.",
    },
    {
        question: "Mon équipe sera-t-elle formée ?",
        answer:
            "Oui. La prise en main du système fait partie du déploiement afin que DAWAM soit réellement utilisé au quotidien.",
    },
];

export default function FAQ() {
    return (
        <section
            className="w-full bg-[#021F29] py-12 lg:py-16 scroll-mt-20"
            id="faq"
        >
            <div className="mx-auto flex w-full max-w-4xl flex-col px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold tracking-[0.2em] text-[#1FE48D]"
                    >
                        FAQ
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Les questions que vous vous posez.
                    </motion.h2>
                </div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-12"
                >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`item-${index}`}
                                className="border-[#08485C]/60"
                            >
                                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline hover:text-[#1FE48D] sm:text-lg">
                                    {faq.question}
                                </AccordionTrigger>

                                <AccordionContent className="pb-5 text-sm leading-7 text-white/60 sm:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}