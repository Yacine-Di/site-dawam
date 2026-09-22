import { Button } from "@/components/ui/button";
import CtaLink from "../ui/CtaLink";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex md:h-[100vh] w-full pt-32 pb-16 md:py-45 items-center overflow-hidden">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-16 py-20 lg:flex-row lg:gap-6 lg:px-8">
                {/* Content */}
                <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#1FE48D]">
                        PILOTAGE • IA • AUTOMATISATION
                    </span>

                    <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        TOUTE VOTRE ACTIVITÉ {" "}
                        <span className="text-[#1FE48D]">AUTOMATISÉE</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                        Enfin au même endroit.
                        Clients, missions, équipe, échéances, données : DAWAM transforme votre fonctionnement en un système clair, connecté et automatisé.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <CtaLink />

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#08485C] bg-transparent text-white hover:bg-[#021F29]"
                        >
                            Découvrir DAWAM
                        </Button>
                    </div>

                    {/* Benefits */}
                    <div className="mt-8 flex flex-col gap-3 text-sm text-white/60">
                        <span>✓ Systèmes de pilotage sur mesure</span>
                        <span>✓ IA & automatisations adaptées à vos processus</span>
                        <span>✓ Déploiement et formation de vos équipes</span>
                    </div>
                </div>

                {/* Illustration */}
                <div className="flex w-full max-w-[600px] w-[600px] h-[380px] items-center justify-center rounded-3xl border border-[#08485C]/50 bg-[#021F29]/50">
                    <Image src="/dawam-hero.png" alt="Illustration DAWAM" className="rounded-3xl object-fill w-[600px] h-[380px]" width={600} height={380} />
                </div>
            </div>
        </section>
    );
}