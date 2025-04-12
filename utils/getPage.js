import { addUniqueIdsToBlocks } from "./addUniqueIdsToBlocks";

export const getPage = async (uri) => {
    const queryParams = {
        query: `
        query pageQuery($uri: String!) {
            nodeByUri(uri: $uri) {
                ... on Page {
                    blocks
                    }
                } 
            }
        `,
        variables: {
            uri
        },
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(queryParams),
    });

    const { data } = await response.json();

    if (!data.nodeByUri) {
        return null;
    }

    const blocks = addUniqueIdsToBlocks(data.nodeByUri.blocks);

    return blocks;
};