import Link from 'next/link';

export default function PostCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block w-full mb-6">
            <div className="post-card-container group post-card-hover-yellow">
                <div className="p-4 sm:p-6">
                    <div className="post-card-date">{post.date}</div>
                    <h3 className="post-card-heading">{post.title}</h3>
                    <div
                        className="post-card-excerpt"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <div className="post-card-readmore">
                        Read more
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </Link>
    );
}
