import Image from "next/image";
import Link from "next/link";
import CtaLink from "../ui/CtaLink";
import MobileNav from "../ui/MobileNav";
import DesktopNav from "../ui/DesktopNav";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#08485C]/40 bg-[#03031F]/50 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo-dawam.png"
                        alt="DAWAM"
                        width={70}
                        height={70}
                        priority
                        className="h-[70px] w-[70px]"
                    />
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden md:block">
                    <DesktopNav />
                </nav>

                {/* CTA */}
                <div className="hidden md:flex">
                    <CtaLink />
                </div>

                {/* Mobile */}
                <nav className="md:hidden">
                    <MobileNav />
                </nav>
            </div>
        </header>
    )
}