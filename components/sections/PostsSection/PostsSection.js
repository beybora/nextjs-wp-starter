import React from 'react';
import PostCardBlack from '@/components/ui/PostCardBlack/PostCardBlack';

const PostsSection = ({ attributes }) => {
    const prepareCards = () => {
        if (!attributes?.pinnedPosts?.length) return [];

        return attributes.pinnedPosts.map(post => ({
            id: post.id || Math.random().toString(36),
            icon: null,
            title: post.title || "",
            subtitle: post.category || "",
            description: post.description || "",
            label: "Read more",
            href: `/blog/${post.slug}`
        }));
    };

    const cards = prepareCards();

    const getGrid = () => {
        const c = cards.length;
        if (c === 1) return "grid-cols-1";
        if (c === 2) return "grid-cols-1 lg:grid-cols-2";
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    };

    return (
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 lg:py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    {attributes?.title || "Featured Posts"}
                </h2>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                    {attributes?.subtitle || "Discover our most popular articles"}
                </p>
            </div>

            {cards.length > 0 ? (
                <div className={`grid ${getGrid()} items-center gap-6 border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl`}>
                    {cards.map(card => (
                        <PostCardBlack key={card.id} {...card} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No featured posts available.</p>
                </div>
            )}
        </div>
    );
};

export default PostsSection;
