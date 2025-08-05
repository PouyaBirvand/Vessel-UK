'use client'
import Image from "next/image";
import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex items-center justify-between p-5 container transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div>
                <Image src='/vessel-logo.avif' alt="vessel-icon" width={120} height={120} />
            </div>
            <div>
                <ul className="flex items-center gap-8 font-bold font-inter">
                    <li className="flex items-center gap-2">
                        Golf
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </li>
                    <li className="flex items-center gap-2">
                        Tennis
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </li>
                    <li className="flex items-center gap-2">
                        Lifestyle
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li><Search size={25} /></li>
                    <li><User size={25} /></li>
                    <li><ShoppingBag size={25} /></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
