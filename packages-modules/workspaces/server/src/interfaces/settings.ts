import { ICommonSettings } from '@common-stack/core';

export interface IAdminSettings extends ICommonSettings {
    brigadeSupTopic: string;
    apiSubTopic: string;
}
