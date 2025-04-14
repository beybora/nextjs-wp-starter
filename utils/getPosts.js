export default async function getPosts() {

    const queryParams = {
        query: ` 
        query getPosts {
            posts {
                nodes {
                    id
                    title
                    uri
                    date
                    excerpt
                    slug
                }
            } 
        }
        `
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(queryParams),
    });

    const { data } = await response.json();




    if (!data || !data.posts || !data.posts.nodes) {
        return null;
    }

    return data.posts;
}