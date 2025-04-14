import Image from 'next/image';

export default function PostContent({ post }) {
    console.log('PostContent', post);
    return (
        <article>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {post.title}
            </h1>

            <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
            </div>

            {post.featuredImage && (
                <div className="mt-8 relative h-64 sm:h-96 rounded-lg overflow-hidden">
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div
                className="mt-8 prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}