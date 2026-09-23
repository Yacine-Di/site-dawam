import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#system", label: "Solution" },
    { href: "#method", label: "Méthode" },
    { href: "#accounting", label: "Cas d’usage" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function DesktopNav() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
                {links.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        <Link
                            href={link.href}
                            className="rounded-md px-4 py-2 text-md text-white/70 transition-colors hover:bg-[#021F29] hover:text-[#1FE48D]"
                        >
                            {link.label}
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}