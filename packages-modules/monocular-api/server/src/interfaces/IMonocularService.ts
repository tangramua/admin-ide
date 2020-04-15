export interface IChartsRequest {
    search: string;
    filtered: boolean;
}

export interface IChartRequest {
    repo: string;
    chart: string;
}

export interface IMonocularService {
    values(chart: any): Promise<string>;
}
