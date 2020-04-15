import { Feature } from '@common-stack/client-react';

export { PageLayout, Sidebar, PageView } from './components';
import { reducers } from './redux/reducers';
export * from './redux/actions';
export const LayoutModule = new Feature({

    // rootComponentFactory: () => <PageLayout/>,
    reducer: reducers,

});

