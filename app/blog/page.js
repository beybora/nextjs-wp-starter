import Hero from '@/components/sections/Hero/Hero';
import PostsGrid from '@/components/sections/PostsGrid/PostsGrid';
import getPosts from '@/utils/getPosts';

export default async function BlogPage() {
    // Posts mit Pagination laden
    const posts = await getPosts();

    return (
        <> <Hero attributes={{ title: "My Blog", description: "Read what I write" }} />
            <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <PostsGrid posts={posts.nodes} />
            </div>
        </>
    );
}