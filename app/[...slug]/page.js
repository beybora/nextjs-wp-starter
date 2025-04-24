import { BlockRenderer } from "@/components/BlockRenderer";
import { getPage } from "@/utils/getPage";
import { getSeo } from "@/utils/getSeo";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { slug } = await params;
    const path = slug?.length ? slug.join("/") : "/";
    const data = await getPage(path);

    if (!data) {
        notFound();
    }

    return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const path = slug?.length ? slug.join("/") : "/";
    const seo = await getSeo(path);

    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    };
}
