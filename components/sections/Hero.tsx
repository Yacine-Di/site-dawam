import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:px-8">
                {/* Content */}
                <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#1FE48D]">
                        PILOTAGE • IA • AUTOMATISATION
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        CENTRALISEZ. PILOTEZ.{" "}
                        <span className="text-[#1FE48D]">AUTOMATISEZ.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                        DAWAM conçoit des systèmes sur mesure pour structurer votre
                        activité, centraliser vos informations et donner à vos équipes une
                        vision claire de ce qui doit être fait.
                    </p>

                    <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                        Nous partons de vos outils, de vos processus et de votre
                        organisation pour construire un cockpit adapté à votre façon de
                        travailler, puis automatiser ce qui peut l’être.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-[#00846A] text-white hover:bg-[#008C58]"
                        >
                            Échanger sur votre besoin
                            <ArrowRight />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#08485C] bg-transparent text-white hover:bg-[#021F29]"
                        >
                            Découvrir la méthode DAWAM
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
                <div className="flex min-h-[400px] w-full flex-1 items-center justify-center lg:min-h-[550px]">
                    <div className="flex aspect-square w-full max-w-[550px] items-center justify-center rounded-3xl border border-[#08485C]/50 bg-[#021F29]/50">
                        {/* Illustration DAWAM ici */}
                    </div>
                </div>
            </div>
        </section>
    );
}