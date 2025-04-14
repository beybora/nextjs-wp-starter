import React from 'react';
import PostCard from './PostCard/PostCard';

export default function PostsGrid({ posts }) {
    return (
        <div className="flex flex-col space-y-6">
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            ) : (
                <div className="text-center py-10">
                    <p className="text-lg text-neutral-600">No posts found.</p>
                </div>
            )}
        </div>
    );
}