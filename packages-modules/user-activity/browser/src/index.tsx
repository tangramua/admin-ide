import * as React from 'react';
import { Subject } from 'rxjs';
import { Feature, IRouteData, IMenuPosition } from '@common-stack/client-react';

const stream = new Subject();

import { activity } from './activity-link';
import { ActivityTracker } from './components/ActivityTracker';

export default new Feature({
    link: activity(stream),
    rootComponentFactory: req => <ActivityTracker stream={stream} />,
});


