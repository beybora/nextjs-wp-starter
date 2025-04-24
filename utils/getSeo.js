export const getSeo = async (uri) => {
    const queryParams = {
        query: `
        query SeoQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on ContentNode {
              seo {
                title
                metaDesc
              }
            }
          }
        }
      `,
        variables: {
            uri,
        },
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(queryParams),
    });
    const { data } = await response.json();
    if (!data?.nodeByUri) {
        return null;
    }
    return data.nodeByUri.seo;
};