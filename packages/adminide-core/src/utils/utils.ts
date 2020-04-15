



export const getFilteredMenus = (pageStore, selectedMenu) =>
    pageStore.map(item => {
        if (selectedMenu.indexOf(item.key) !== -1) {
            const { path, component, ...rest } = item;
            return {
                [path]: { name: rest.tab, ...rest },
            };
        }
    }).filter(valid => valid);


export const getFilteredRoutes = (pageStore, selectedRoutes) =>
    pageStore.map(item => {
        if (selectedRoutes.indexOf(item.key) !== -1) {
            const { path } = item;
            return {
                [path]: item,
            };
        }
        return null;
    }).filter(valid => valid);

export const getFilteredTabs = (pageStore, selectedTabs) =>
    pageStore.map(item => {
        if (selectedTabs.indexOf(item.key) !== -1) {
            const { component, ...rest } = item;
            return rest;
        }
    }).filter(valid => valid);
