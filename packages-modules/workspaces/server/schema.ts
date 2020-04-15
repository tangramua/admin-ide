

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addWorkspace
// ====================================================

export interface addWorkspace_addWorkspace_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface addWorkspace_addWorkspace {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  spec: addWorkspace_addWorkspace_spec | null;
}

export interface addWorkspace {
  addWorkspace: addWorkspace_addWorkspace | null;
}

export interface addWorkspaceVariables {
  request: IWorkspaceCreate_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeWorkpsace
// ====================================================

export interface removeWorkpsace {
  removeWorkspace: boolean | null;
}

export interface removeWorkpsaceVariables {
  request: IWorkspaceRemove_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setEnvVariables
// ====================================================

export interface setEnvVariables {
  setEnvVariables: boolean | null;
}

export interface setEnvVariablesVariables {
  request: IWorkspaceVariables_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startWorkspace
// ====================================================

export interface startWorkspace {
  startWorkspace: boolean | null;
}

export interface startWorkspaceVariables {
  request: WorkspaceStart_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: stopWorkspace
// ====================================================

export interface stopWorkspace {
  stopWorkspace: boolean | null;
}

export interface stopWorkspaceVariables {
  request: IWorkspaceStop_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateWorkspace
// ====================================================

export interface updateWorkspace_updateWorkspace_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface updateWorkspace_updateWorkspace {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  spec: updateWorkspace_updateWorkspace_spec | null;
}

export interface updateWorkspace {
  updateWorkspace: updateWorkspace_updateWorkspace | null;
}

export interface updateWorkspaceVariables {
  request: IWorkspaceUpdate_Input;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWorkspace
// ====================================================

export interface getWorkspace_workspace_config_ports {
  application: string | null;
}

export interface getWorkspace_workspace_config_globalVariables {
  field: string | null;
  value: string | null;
}

export interface getWorkspace_workspace_config_variables {
  field: string | null;
  value: string | null;
}

export interface getWorkspace_workspace_config {
  ports: getWorkspace_workspace_config_ports | null;
  globalVariables: (getWorkspace_workspace_config_globalVariables | null)[] | null;
  variables: (getWorkspace_workspace_config_variables | null)[] | null;
}

export interface getWorkspace_workspace_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface getWorkspace_workspace_launch {
  port: number | null;
}

export interface getWorkspace_workspace_env {
  field: string | null;
  value: string | null;
}

export interface getWorkspace_workspace_stacks {
  type: string | null;
  chartName: string;
  repository: string;
  releaseName: string;
  chartVersion: string;
  namespace: string;
  connectionId: string;
}

export interface getWorkspace_workspace_projects_source_parameters {
  branch: string | null;
}

export interface getWorkspace_workspace_projects_source {
  type: string | null;
  location: string | null;
  providers: string | null;
  parameters: getWorkspace_workspace_projects_source_parameters | null;
}

export interface getWorkspace_workspace_projects {
  _id: string;
  name: string;
  source: getWorkspace_workspace_projects_source | null;
}

export interface getWorkspace_workspace {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  namespace: string | null;
  orgId: string | null;
  icon_url: string | null;
  connectionId: string | null;
  teamId: string | null;
  config: getWorkspace_workspace_config | null;
  spec: getWorkspace_workspace_spec | null;
  launch: getWorkspace_workspace_launch | null;
  env: (getWorkspace_workspace_env | null)[] | null;
  stacks: (getWorkspace_workspace_stacks | null)[] | null;
  projects: (getWorkspace_workspace_projects | null)[] | null;
  updatedAt: string | null;
  createdAt: string | null;
}

export interface getWorkspace {
  workspace: getWorkspace_workspace | null;
}

export interface getWorkspaceVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWorkspaces
// ====================================================

export interface getWorkspaces_workspaces_config_ports {
  application: string | null;
}

export interface getWorkspaces_workspaces_config_globalVariables {
  field: string | null;
  value: string | null;
}

export interface getWorkspaces_workspaces_config_variables {
  field: string | null;
  value: string | null;
}

export interface getWorkspaces_workspaces_config {
  ports: getWorkspaces_workspaces_config_ports | null;
  globalVariables: (getWorkspaces_workspaces_config_globalVariables | null)[] | null;
  variables: (getWorkspaces_workspaces_config_variables | null)[] | null;
}

export interface getWorkspaces_workspaces_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface getWorkspaces_workspaces_launch {
  port: number | null;
}

export interface getWorkspaces_workspaces_env {
  field: string | null;
  value: string | null;
}

export interface getWorkspaces_workspaces {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  config: getWorkspaces_workspaces_config | null;
  spec: getWorkspaces_workspaces_spec | null;
  launch: getWorkspaces_workspaces_launch | null;
  env: (getWorkspaces_workspaces_env | null)[] | null;
  updatedAt: string | null;
  createdAt: string | null;
}

export interface getWorkspaces {
  workspaces: (getWorkspaces_workspaces | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: subscribeToWorkspace
// ====================================================

export interface subscribeToWorkspace_subscribeToWorkspace_value_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface subscribeToWorkspace_subscribeToWorkspace_value {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  spec: subscribeToWorkspace_subscribeToWorkspace_value_spec | null;
}

export interface subscribeToWorkspace_subscribeToWorkspace {
  value: subscribeToWorkspace_subscribeToWorkspace_value | null;
  mutation: WorkspaceServerEvents | null;
}

export interface subscribeToWorkspace {
  subscribeToWorkspace: subscribeToWorkspace_subscribeToWorkspace | null;
}

export interface subscribeToWorkspaceVariables {
  filter?: SubscribeWorkspaceFilter | null;
  mutations: (WorkspaceServerEvents | null)[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkspaceDetail
// ====================================================

export interface WorkspaceDetail_config_variables {
  field: string | null;
  value: string | null;
}

export interface WorkspaceDetail_config {
  variables: (WorkspaceDetail_config_variables | null)[] | null;
}

export interface WorkspaceDetail_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface WorkspaceDetail_launch {
  port: number | null;
}

export interface WorkspaceDetail_env {
  field: string | null;
  value: string | null;
}

export interface WorkspaceDetail_projects_source_parameters {
  branch: string | null;
  httpsUrl: string | null;
  isPrivate: boolean | null;
}

export interface WorkspaceDetail_projects_source {
  type: string | null;
  language: string | null;
  location: string | null;
  providers: string | null;
  parameters: WorkspaceDetail_projects_source_parameters | null;
}

export interface WorkspaceDetail_projects {
  name: string;
  description: string | null;
  source: WorkspaceDetail_projects_source | null;
}

export interface WorkspaceDetail {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  config: WorkspaceDetail_config | null;
  spec: WorkspaceDetail_spec | null;
  launch: WorkspaceDetail_launch | null;
  env: (WorkspaceDetail_env | null)[] | null;
  projects: (WorkspaceDetail_projects | null)[] | null;
  updatedAt: string | null;
  createdAt: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: workspaceInfo
// ====================================================

export interface workspaceInfo_spec {
  cpu: number | null;
  ram: number | null;
  hdd: number | null;
}

export interface workspaceInfo {
  id: string | null;
  name: string | null;
  language: string | null;
  status: string | null;
  description: string | null;
  icon_url: string | null;
  spec: workspaceInfo_spec | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum WorkspaceServerEvents {
  WORKSPACE_CREATED_EVENT = "WORKSPACE_CREATED_EVENT",
  WORKSPACE_REMOVED_EVENT = "WORKSPACE_REMOVED_EVENT",
  WORKSPACE_STARTED_EVENT = "WORKSPACE_STARTED_EVENT",
  WORKSPACE_STOPPED_EVENT = "WORKSPACE_STOPPED_EVENT",
  WORKSPACE_UPDATED_EVENT = "WORKSPACE_UPDATED_EVENT",
}

export interface WorkspaceRepository_Input {
  description: string
  name: string
  owner: string
  url: string
}

// 
export interface IWorkspaceCreate_Input {
  name: string;
  teamId?: string | null;
  repository?: WorkspaceRepository_Input;
  language?: string | null;
  spec?: IWsSpecInput | null;
  stacks?: (IStackInput | null)[] | null;
  description?: string | null;
  projects?: (IProject_Input | null)[] | null;
}

// 
export interface IWsSpecInput {
  inactivity?: number | null;
}

// 
export interface IStackInput {
  type?: string | null;
  valuesFile?: string | null;
  chartName: string;
  repository: string;
  releaseName: string;
  chartVersion: string;
  variables?: (IEnvVariableInput | null)[] | null;
}

// 
export interface IEnvVariableInput {
  field?: string | null;
  value?: string | null;
  secured?: boolean | null;
}

// 
export interface IProject_Input {
  path?: string | null;
  name: string;
  description?: string | null;
  source?: IProjectSource | null;
}

// 
export interface IProjectSource {
  type?: string | null;
  location?: string | null;
  providers?: string | null;
  parameters?: ISourceParams | null;
}

// 
export interface ISourceParams {
  branch?: string | null;
  httpsUrl?: string | null;
  isPrivate?: boolean | null;
}

// 
export interface IWorkspaceRemove_Input {
  id: string;
}

// 
export interface IWorkspaceVariables_Input {
  workspace: string;
  variables?: (IEnvVariableInput | null)[] | null;
  ports?: InputWorkspacePorts | null;
  globalVariables?: (IEnvVariableInput | null)[] | null;
}

// 
export interface InputWorkspacePorts {
  application?: string | null;
  management?: string | null;
  worker?: string | null;
}

// 
export interface WorkspaceStart_Input {
  id: string;
  requestedUserId?: string | null;
  stacks?: (IStackInput | null)[] | null;
}

// 
export interface IWorkspaceStop_Input {
  id: string;
  requestedUserId?: string | null;
  stacks?: (IStackInput | null)[] | null;
}

// 
export interface IWorkspaceUpdate_Input {
  id: string;
  name?: string | null;
  language?: string | null;
  description?: string | null;
  status?: string | null;
  icon_url?: string | null;
  os_version?: string | null;
}

// 
export interface SubscribeWorkspaceFilter {
  serverId?: string | null;
  creatorId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================