export const TYPES = {
    IMonocularService: Symbol('IMonocularService'),
    MonocularRegistryManagement: 'MonocularRegistryManagement',
    UniversalMonocularRegistryService: 'UniversalMonocularRegistryService',
};

export const BASE_PATH = 'https://hub.kubeapps.com';

export enum MONOCULAR_ROUTES {
    CHART = 'chart',
    CHARTS = 'charts',
    README = 'readme',
    SEARCH = 'search',
    VERSIONS = 'versions',
}

export const SELECTED_CHARTS = [
    'cassandra', 'cockroachdb', 'couchdb', 'drupal', 'hadoop',
    'mailhog', 'mariadb', 'mongodb', 'mssql-linux', 'mysql', 'mysqlha',
    'nats', 'nfs-server-provisioner', 'auth2-proxy', 'percona',
    'percona-xtra-cluster', 'phpbb', 'phpmyadmin', 'pstgresql', 'rabbitmq',
    'rabbitmq-ha', 'redis', 'redis-cache', 'redis-ha', 'rethinkdb',
    'spring-cloud-data-flow', 'tomcat', 'wordpress',
];
