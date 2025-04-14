import PostCardBlack from '@/components/ui/PostCardBlack/PostCardBlack';
import React from 'react';

const PostsSection = ({ attributes }) => {

    // Bereite die Posts für die Anzeige vor
    const prepareCards = () => {
        // Falls keine Posts vorhanden sind, leeres Array zurückgeben
        if (!attributes?.pinnedPosts || attributes.pinnedPosts.length === 0) {
            return [];
        }

        // Posts in das für PostCardBlack benötigte Format konvertieren
        return attributes.pinnedPosts.map(post => ({
            id: post.id || Math.random().toString(36),
            icon: null,
            title: post.title || "",
            subtitle: post.category || "",
            description: post.description || "",
            label: "Read more",
            slug: post.slug
        }));
    };

    const cardsToDisplay = prepareCards();

    // Dynamisch die Grid-Column-Anzahl basierend auf der Anzahl der Karten bestimmen
    const getGridColumns = () => {
        const count = cardsToDisplay.length;
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-1 lg:grid-cols-2';
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    };

    return (
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 lg:py-12">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    {attributes?.title || "Featured Posts"}
                </h2>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                    {attributes?.subtitle || "Discover our most popular articles"}
                </p>
            </div>

            {cardsToDisplay.length > 0 ? (
                <div className={`grid ${getGridColumns()} items-center gap-6  border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl`}>
                    {cardsToDisplay.map((card) => (
                        <PostCardBlack
                            key={card.id}
                            icon={card.icon}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            label={card.label}
                            slug={card.slug}
                        />
                    ))}
                </div>
            ) : null}

            {cardsToDisplay.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No featured posts available.</p>
                </div>
            ) : null}
        </div>
    );
};

export default PostsSection;