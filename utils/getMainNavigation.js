
export const getMainNavigation = async () => {
    const queryParams = {
        query: `
        query MainMenuQuery {
         menuItems(where: {location: MENU_1}) {
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