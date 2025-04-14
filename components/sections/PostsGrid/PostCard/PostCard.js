import Link from 'next/link';
import Image from 'next/image';
//import { formatDate } from '@/utils/dateUtils';

export default function PostCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block w-full mb-6">
            <div className="overflow-hidden rounded-lg bg-white border border-neutral-900 shadow hover:shadow-md transition-shadow duration-200">
                <div className="p-4 sm:p-6">
                    <div className="text-sm text-neutral-600">
                        {post.date}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                        {post.title}
                    </h3>
                    <div
                        className="mt-2 text-neutral-700 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <div className="mt-4 flex items-center">
                        <span className="text-sm font-medium text-[#ff0] dark:text-[#ff0]">Read more</span>
                        <svg className="ml-1 h-4 w-4 text-[#ff0]" viewBox="0 0 20 20" fill="currentColor">
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
};