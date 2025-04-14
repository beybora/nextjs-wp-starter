export const getPostBySlug = async (slug) => {
    const queryParams = {
        query: `
        query PostBySlug($slug: String!) {
          nodeByUri(uri: $slug) {
            ... on Post {
            id
            title
            date
            uri
            content
            }
          }
        }
      `,
        variables: { slug },
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(queryParams),
    });

    const data = await response.json();

    console.log("Data in getPostBySlug:", data);

    if (!data) {
        return null;
    }

    return data;

} 
