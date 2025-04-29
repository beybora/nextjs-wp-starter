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
            day: 'numeric',
        })
        : null;

    return (
        <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-3xl font-bold mb-2">{data.nodeByUri.title}</h1>

                {formattedDate && (
                    <div className="text-gray-600 text-sm mb-6">
                        <time dateTime={data.nodeByUri.date}>{formattedDate}</time>
                    </div>
                )}

                {data.nodeByUri.content && (
                    <div
                        className="prose prose-lg mx-auto text-left"
                        dangerouslySetInnerHTML={{ __html: data.nodeByUri.content }}
                    />
                )}

                <div className="mt-8 pt-4 border-t text-left">
                    <Link href="/blog" className="text-[#ff0] hover:underline">
                        ← Zurück
                    </Link>
                </div>
            </div>
        </main>
    );
}
