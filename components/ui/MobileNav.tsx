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
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (

        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent side="top" className="rounded-b-lg">
                <SheetHeader>
                    <VisuallyHidden>
                        <SheetTitle>Menu</SheetTitle>
                    </VisuallyHidden>
                    <VisuallyHidden>
                        <SheetDescription>
                            Menu de navigation mobile
                        </SheetDescription>
                    </VisuallyHidden>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-2 px-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition hover:bg-primary/5 hover:text-primary"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <SheetFooter>
                    <CtaLink />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}