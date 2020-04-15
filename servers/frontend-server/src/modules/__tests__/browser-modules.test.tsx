import Module from '../modules';


import 'jest';

describe('connector modules', () => {

    it('module configuredRoutes', () => {
        const configuredRoutes = Module.getConfiguredRoutes();

        expect(configuredRoutes).toMatchSnapshot();
    });

    it('module routes', () => {
        const routes = Module.getRoutes();

        expect(routes).toMatchSnapshot();
    });

    it('module configuredMenus', () => {
        const configuredMenus = Module.getConfiguredMenus();

        expect(configuredMenus).toMatchSnapshot();
    });

    it('module menus', () => {
        const menus = Module.getMenus();

        expect(menus).toMatchSnapshot();
    });

});
