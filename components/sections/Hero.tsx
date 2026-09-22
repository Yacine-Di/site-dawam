"use client";

import CtaLink from "../ui/CtaLink";
import Image from "next/image";
import DiscoverLink from "../ui/DiscoverLink";

export default function Hero() {
    return (
        <section
            className="relative flex md:h-[100vh] w-full pt-32 pb-16 md:py-45 items-center overflow-hidden bg-[#03031F]"
            id="hero"
        >
            {/* Overlay pour garder le fond sombre */}
            <div className="absolute inset-0 z-[1] bg-[#03031F]/70" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 md:px-16 py-8 md:py-20 lg:flex-row lg:gap-6 lg:px-8">
                {/* Content */}
                <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#1FE48D]">
                        PILOTAGE • IA • AUTOMATISATION
                    </span>

                    <h1 className="font-bold tracking-tight text-4xl lg:text-5xl">
                        TOUTE VOTRE ACTIVITÉ{" "}
                        <span className="text-[#1FE48D]">AUTOMATISÉE</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/70 text-lg">
                        Enfin au même endroit.
                        Clients, missions, équipe, échéances, données : DAWAM
                        transforme votre fonctionnement en un système clair,
                        connecté et automatisé.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <CtaLink />
                        <DiscoverLink />
                    </div>
                </div>

                {/* Illustration */}
                <div className="w-full max-w-[600px] overflow-hidden rounded-3xl border border-[#08485C]/50 bg-[#021F29]/50">
                    <Image
                        src="/dawam-hero.png"
                        alt="Illustration DAWAM"
                        width={600}
                        height={380}
                        className="h-auto w-full rounded-3xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}