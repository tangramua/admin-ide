
export type PrometheusResponse = {
    status: string,
    data: PrometheusResult,
};

export type PrometheusResult = {
    resultType: string,
    result: PrometheusResultRow[],
};

export type PrometheusResultRow = {
    value: any,
    metric: any,
};

export interface IPrometheusService {
    query(q: string): Promise<PrometheusResponse>;
}
