
export const getSocialIcons = async () => {
    const queryParams = {
        query: `
            query MenuQuery {
                menuItems(where: {location: SOCIAL_NAVIGATION}) {
                   nodes {
                   id
                   label
                   url
                   parentId
               }
              }
            }
    `,
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(queryParams),
    });

    const { data } = await response.json();

    if (!data.menuItems?.nodes) {
        return null;
    }

    return data.menuItems.nodes;

};