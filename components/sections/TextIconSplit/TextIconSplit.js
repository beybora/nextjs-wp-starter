import React from 'react';
import IconBlock from './IconBlock/IconBlock';

const TextIconSplit = ({ attributes }) => {
    const { cards, title, subtitle } = attributes;

    return (
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 pb-5 sm:pb-8 lg:pb-12">

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">

                <div className="lg:w-3/4  text-center md:text-left">
                    <h2 className="text-3xl text-gray-800 font-bold sm:text-4xl lg:text-5xl" >
                        {title}
                    </h2>
                    <p className="mt-3 sm:mt-5 text-gray-800 text-base sm:text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-5 lg:space-y-7">
                    {cards.map((card, index) => (
                        <IconBlock
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextIconSplit;