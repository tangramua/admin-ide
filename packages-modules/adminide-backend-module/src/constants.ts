export const DEFAULT_INTERVAL = 86400000;

export const WORKSPACE_RESOURCE_QUERY = (namespace) => encodeURIComponent(`
sum(
    max(kube_pod_labels{label_release="idestack"}) by (label_release, pod)
    *
    on (pod)
    group_right(label_release)
    label_replace(
        sum by(pod_name) (
            rate(container_cpu_usage_seconds_total{namespace="${namespace}"}[2w])
        ), "pod" , "$1" , "pod_name" , "(.+)"
    )
) by (label_release)
`);

export enum Types {
    BillingWatcher = 'BillingWatcher',
    WorkspaceWatcher = 'WorkspaceWatcher',
    ResourcesService = 'ResourcesService',
    PrometheusService = 'PrometheusService',
}

export enum HemeraTopics {
    Prometheus = 'prometheus',
    Utilization = 'resource-utilization',
}

export enum HemeraCmd {
    Scan = 'scan',
    Query = 'query',
    Collect = 'collect',
}
