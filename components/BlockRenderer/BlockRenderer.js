import Hero from "../sections/Hero/Hero";
import PostsSection from "../sections/PostsSection/PostsSection";
import TextIconSplit from "../sections/TextIconSplit/TextIconSplit";

export const BlockRenderer = ({ blocks }) => {
    console.log(blocks?.map((block) => block));
    return blocks.map((block) => {
        switch (block.name) {
            case "custom-block/hero":
                return <Hero key={block.id} attributes={block.attributes} />;
            case "custom-block/text-icon-split":
                return <TextIconSplit key={block.id} attributes={block.attributes} />;
            case "custom-block/pinned-posts":
                return <PostsSection key={block.id} attributes={block.attributes} />;
            default:
                return null;
        }
    })
}