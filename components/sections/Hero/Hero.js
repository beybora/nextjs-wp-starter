import React from 'react';

const Hero = ({ attributes }) => {
    const { title, description } = attributes;

    // Definiere die gelbe Farbe
    const highlightColor = "#ff0";

    return (
        <>
            {/* Hero Section */}
            <div className="bg-neutral-900">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="text-center">
                        <h1 className="font-semibold text-[#ff0] text-4xl sm:text-6xl md:text-7xl">
                            {title}
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="mt-4 sm:mt-6 text-neutral-400 text-base sm:text-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
        </>
    );
};

export default Hero;