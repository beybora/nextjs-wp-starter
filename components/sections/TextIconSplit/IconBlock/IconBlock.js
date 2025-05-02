import Image from 'next/image';
import React from 'react';

const IconBlock = ({ imageUrl, title, description }) => {
    return (
        <div className="flex gap-x-5 sm:gap-x-8">
            {/* Icon/Image – nur rendern, wenn vorhanden */}
            {imageUrl && (
                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
                    <Image
                        src={imageUrl}
                        width={20}
                        height={20}
                        alt={title || "Icon"}
                        className="shrink-0 size-5"
                    />
                </span>
            )}

            {/* Content */}
            <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {title}
                </h3>
                <p className="mt-1 text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default IconBlock;
