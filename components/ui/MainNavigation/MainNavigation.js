import { getMainNavigation } from '@/utils/getMainNavigation';
import React from 'react';
import Link from 'next/link';

const MainNavigation = async () => {
    const navigationItems = await getMainNavigation();

    return (
        <ul className="text-center">
            {navigationItems?.length > 0 &&
                navigationItems.map((item, index) => (
                    <li
                        key={item.id || index}
                        className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300"
                    >
                        <Link
                            href={item.url || '#'}
                            className="inline-flex gap-x-2 text-sm text-gray-500 transition duration-200 ease-in-out hover:text-[#FFFC03]"
                        >
                            {item.label || 'Menu Item'}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default MainNavigation;
