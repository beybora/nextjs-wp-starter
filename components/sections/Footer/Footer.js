import MainNavigation from '@/components/ui/MainNavigation/MainNavigation';
import SocialIcons from '@/components/ui/SocialIcons/SocialIcons';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center md:text-left">
                <div>
                    <Link
                        href="/"
                        className="text-xl font-semibold text-black transition duration-200 hover:text-[#FFFC03]"
                    >
                        Bora Bey Sarikaya
                    </Link>
                </div>

                <MainNavigation />

                <div className="flex justify-center md:justify-end">
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
