"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CtaLink from "./CtaLink";
import { useState } from "react";

const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#system", label: "Solution" },
    { href: "#method", label: "Méthode" },
    { href: "#accounting", label: "Cas d’usage" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[#021F29] hover:text-[#1FE48D] md:hidden"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="top"
                className="border-[#08485C]/60 bg-[#03031F] text-white"
            >
                <SheetHeader>
                    <VisuallyHidden>
                        <SheetTitle>Menu</SheetTitle>
                    </VisuallyHidden>

                    <VisuallyHidden>
                        <SheetDescription>
                            Menu de navigation mobile DAWAM
                        </SheetDescription>
                    </VisuallyHidden>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-1 px-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-[#021F29] hover:text-[#1FE48D]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <SheetFooter className="mt-6 border-t border-[#08485C]/40 pt-6">
                    <CtaLink />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}