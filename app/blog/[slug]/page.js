import { getPostBySlug } from '@/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }) {
    const { slug } = params;
    const { data } = await getPostBySlug(slug);

    if (!data || !data.nodeByUri) {
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
        <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0">
            <article className="max-w-2xl w-full text-center">
                <header className="mb-10">
                    <h1 className="text-4xl font-bold mb-3">{data.nodeByUri.title}</h1>
                    {formattedDate && (
                        <time dateTime={data.nodeByUri.date} className="text-gray-500 text-sm">
                            {formattedDate}
                        </time>
                    )}
                </header>

                {data.nodeByUri.content && (
                    <section
                        className="prose prose-lg max-w-none mx-auto text-left text-gray-800"
                        dangerouslySetInnerHTML={{ __html: data.nodeByUri.content }}
                    />
                )}

                <footer className="mt-12 pt-4 border-t text-left">
                    <Link
                        href="/blog"
                        className="inline-block text-sm text-black hover:text-[#ff0] transition-colors"
                    >
                        ← Zurück
                    </Link>
                </footer>
            </article>
        </main>
    );
}
