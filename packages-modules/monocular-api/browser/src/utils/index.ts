import { get } from 'lodash';

export const getChartId = chart => get(chart, 'attributes.name', '');
