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

    console.log("[getMainNavigation] Fetching main navigation...");

    try {
        const response = await fetch(process.env.WP_GRAPHQL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(queryParams),
        });

        const { data } = await response.json();

        if (!data?.menuItems?.nodes) {
            console.warn("[getMainNavigation] No menu items found.");
            return [];
        }

        console.log("[getMainNavigation] Navigation fetched successfully.");
        return data.menuItems.nodes;
    } catch (error) {
        console.error("[getMainNavigation] Error fetching navigation:", error);
        return [];
    }
};
