import { getPostBySlug } from '@/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }) {
    const { slug } = params;

    const { data } = await getPostBySlug(slug);


    if (!data) {
        notFound();
    }

    const formattedDate = data.nodeByUri.date
        ? new Date(data.nodeByUri.date).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : null;


    return (
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-2">{data.nodeByUri.title}</h1>

            <div className="text-gray-600 mb-6">
                {formattedDate && (
                    <time dateTime={data.nodeByUri.date} className="text-sm">
                        {formattedDate}
                    </time>
                )}
            </div>

            {data.nodeByUri.content && (
                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: data.nodeByUri.content }}
                />
            )}

            <div className="mt-8 pt-4 border-t">
                <Link href="/blog" className="text-[#ff0] hover:underline">
                    ← Blog
                </Link>
            </div>
        </div>
    );
}