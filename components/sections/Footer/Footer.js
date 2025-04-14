import MainNavigation from '@/components/ui/MainNavigation/MainNavigation';
import SocialIcons from '@/components/ui/SocialIcons/SocialIcons';
import React from 'react';

const Footer = () => {
    return (
        <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 mt-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                {/* Brand Column */}
                <div>
                    <a
                        className="flex-none text-xl font-semibold text-black focus:outline-hidden dark:text-white hover:text-[#FFFC03]"
                        href="#"
                        aria-label="Brand"
                    >
                        Bora Bey Sarikaya
                    </a>
                </div>
                {/* End Brand Column */}

                {/* Navigation Column */}
                <MainNavigation />

                {/* Social Icons Column */}
                <div className="md:text-end">
                    <SocialIcons />
                </div>
                {/* End Social Icons Column */}
            </div>
            {/* End Grid */}
        </footer>
    );
};

export default Footer;