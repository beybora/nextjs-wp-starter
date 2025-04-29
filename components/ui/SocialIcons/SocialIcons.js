import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import xIcon from './icons/xIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { getSocialIcons } from '@/utils/getSocialLinks';
import GitHubIcon from './icons/GitHubIcon';


// This is a simple mapping of icon names to their respective components.
const ICONS = {
    facebook: FacebookIcon,
    x: xIcon,
    github: GitHubIcon,
    linkedin: LinkedInIcon,
};

const SocialIcons = async () => {
    // Fetch the social links data
    const socialLinksData = await getSocialIcons();

    // Check if the social links data is empty or undefined 
    if (!socialLinksData || socialLinksData.length === 0) {
        return null;
    }

    return (
        <div className="flex gap-4 items-center justify-end">
            {/* Map through the social links data and render the icons */}
            {socialLinksData?.map((item, index) => {
                const IconComponent = ICONS[item.label.toLowerCase()];
                return (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FFFC03] transition duration-200 ease-in-out"
                    >
                        {IconComponent ? <IconComponent /> : null}
                        <span className="sr-only">{item.title}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default SocialIcons;