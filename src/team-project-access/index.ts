// https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamProjectAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#access TeamProjectAccess#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#id TeamProjectAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}
  */
  readonly teamId: string;
  /**
  * project_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}
  */
  readonly projectAccess?: TeamProjectAccessProjectAccess[] | cdktf.IResolvable;
  /**
  * workspace_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}
  */
  readonly workspaceAccess?: TeamProjectAccessWorkspaceAccess[] | cdktf.IResolvable;
}
export interface TeamProjectAccessProjectAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}
  */
  readonly teams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variable_sets TeamProjectAccess#variable_sets}
  */
  readonly variableSets?: string;
}

export function teamProjectAccessProjectAccessToTerraform(struct?: TeamProjectAccessProjectAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: cdktf.stringToTerraform(struct!.settings),
    teams: cdktf.stringToTerraform(struct!.teams),
    variable_sets: cdktf.stringToTerraform(struct!.variableSets),
  }
}


export function teamProjectAccessProjectAccessToHclTerraform(struct?: TeamProjectAccessProjectAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams: {
      value: cdktf.stringToHclTerraform(struct!.teams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_sets: {
      value: cdktf.stringToHclTerraform(struct!.variableSets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamProjectAccessProjectAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamProjectAccessProjectAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._variableSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableSets = this._variableSets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamProjectAccessProjectAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings = undefined;
      this._teams = undefined;
      this._variableSets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings = value.settings;
      this._teams = value.teams;
      this._variableSets = value.variableSets;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // teams - computed: true, optional: true, required: false
  private _teams?: string; 
  public get teams() {
    return this.getStringAttribute('teams');
  }
  public set teams(value: string) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // variable_sets - computed: true, optional: true, required: false
  private _variableSets?: string; 
  public get variableSets() {
    return this.getStringAttribute('variable_sets');
  }
  public set variableSets(value: string) {
    this._variableSets = value;
  }
  public resetVariableSets() {
    this._variableSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetsInput() {
    return this._variableSets;
  }
}

export class TeamProjectAccessProjectAccessList extends cdktf.ComplexList {
  public internalValue? : TeamProjectAccessProjectAccess[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TeamProjectAccessProjectAccessOutputReference {
    return new TeamProjectAccessProjectAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamProjectAccessWorkspaceAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#create TeamProjectAccess#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}
  */
  readonly locking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#move TeamProjectAccess#move}
  */
  readonly move?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}
  */
  readonly runTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}
  */
  readonly runs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}
  */
  readonly sentinelMocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}
  */
  readonly stateVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}
  */
  readonly variables?: string;
}

export function teamProjectAccessWorkspaceAccessToTerraform(struct?: TeamProjectAccessWorkspaceAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    locking: cdktf.booleanToTerraform(struct!.locking),
    move: cdktf.booleanToTerraform(struct!.move),
    run_tasks: cdktf.booleanToTerraform(struct!.runTasks),
    runs: cdktf.stringToTerraform(struct!.runs),
    sentinel_mocks: cdktf.stringToTerraform(struct!.sentinelMocks),
    state_versions: cdktf.stringToTerraform(struct!.stateVersions),
    variables: cdktf.stringToTerraform(struct!.variables),
  }
}


export function teamProjectAccessWorkspaceAccessToHclTerraform(struct?: TeamProjectAccessWorkspaceAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locking: {
      value: cdktf.booleanToHclTerraform(struct!.locking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    move: {
      value: cdktf.booleanToHclTerraform(struct!.move),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.runTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runs: {
      value: cdktf.stringToHclTerraform(struct!.runs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_mocks: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_versions: {
      value: cdktf.stringToHclTerraform(struct!.stateVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.stringToHclTerraform(struct!.variables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamProjectAccessWorkspaceAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamProjectAccessWorkspaceAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._locking !== undefined) {
      hasAnyValues = true;
      internalValueResult.locking = this._locking;
    }
    if (this._move !== undefined) {
      hasAnyValues = true;
      internalValueResult.move = this._move;
    }
    if (this._runTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTasks = this._runTasks;
    }
    if (this._runs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runs = this._runs;
    }
    if (this._sentinelMocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMocks = this._sentinelMocks;
    }
    if (this._stateVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateVersions = this._stateVersions;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamProjectAccessWorkspaceAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._locking = undefined;
      this._move = undefined;
      this._runTasks = undefined;
      this._runs = undefined;
      this._sentinelMocks = undefined;
      this._stateVersions = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._locking = value.locking;
      this._move = value.move;
      this._runTasks = value.runTasks;
      this._runs = value.runs;
      this._sentinelMocks = value.sentinelMocks;
      this._stateVersions = value.stateVersions;
      this._variables = value.variables;
    }
  }

  // create - computed: true, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // locking - computed: true, optional: true, required: false
  private _locking?: boolean | cdktf.IResolvable; 
  public get locking() {
    return this.getBooleanAttribute('locking');
  }
  public set locking(value: boolean | cdktf.IResolvable) {
    this._locking = value;
  }
  public resetLocking() {
    this._locking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockingInput() {
    return this._locking;
  }

  // move - computed: true, optional: true, required: false
  private _move?: boolean | cdktf.IResolvable; 
  public get move() {
    return this.getBooleanAttribute('move');
  }
  public set move(value: boolean | cdktf.IResolvable) {
    this._move = value;
  }
  public resetMove() {
    this._move = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveInput() {
    return this._move;
  }

  // run_tasks - computed: true, optional: true, required: false
  private _runTasks?: boolean | cdktf.IResolvable; 
  public get runTasks() {
    return this.getBooleanAttribute('run_tasks');
  }
  public set runTasks(value: boolean | cdktf.IResolvable) {
    this._runTasks = value;
  }
  public resetRunTasks() {
    this._runTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTasksInput() {
    return this._runTasks;
  }

  // runs - computed: true, optional: true, required: false
  private _runs?: string; 
  public get runs() {
    return this.getStringAttribute('runs');
  }
  public set runs(value: string) {
    this._runs = value;
  }
  public resetRuns() {
    this._runs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runsInput() {
    return this._runs;
  }

  // sentinel_mocks - computed: true, optional: true, required: false
  private _sentinelMocks?: string; 
  public get sentinelMocks() {
    return this.getStringAttribute('sentinel_mocks');
  }
  public set sentinelMocks(value: string) {
    this._sentinelMocks = value;
  }
  public resetSentinelMocks() {
    this._sentinelMocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMocksInput() {
    return this._sentinelMocks;
  }

  // state_versions - computed: true, optional: true, required: false
  private _stateVersions?: string; 
  public get stateVersions() {
    return this.getStringAttribute('state_versions');
  }
  public set stateVersions(value: string) {
    this._stateVersions = value;
  }
  public resetStateVersions() {
    this._stateVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateVersionsInput() {
    return this._stateVersions;
  }

  // variables - computed: true, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}

export class TeamProjectAccessWorkspaceAccessList extends cdktf.ComplexList {
  public internalValue? : TeamProjectAccessWorkspaceAccess[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TeamProjectAccessWorkspaceAccessOutputReference {
    return new TeamProjectAccessWorkspaceAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access tfe_team_project_access}
*/
export class TeamProjectAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team_project_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamProjectAccess to import
  * @param importFromId The id of the existing TeamProjectAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamProjectAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_team_project_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access tfe_team_project_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamProjectAccessConfig
  */
  public constructor(scope: Construct, id: string, config: TeamProjectAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_project_access',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.66.0',
        providerVersionConstraint: '~> 0.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._id = config.id;
    this._projectId = config.projectId;
    this._teamId = config.teamId;
    this._projectAccess.internalValue = config.projectAccess;
    this._workspaceAccess.internalValue = config.workspaceAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // project_access - computed: false, optional: true, required: false
  private _projectAccess = new TeamProjectAccessProjectAccessList(this, "project_access", false);
  public get projectAccess() {
    return this._projectAccess;
  }
  public putProjectAccess(value: TeamProjectAccessProjectAccess[] | cdktf.IResolvable) {
    this._projectAccess.internalValue = value;
  }
  public resetProjectAccess() {
    this._projectAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessInput() {
    return this._projectAccess.internalValue;
  }

  // workspace_access - computed: false, optional: true, required: false
  private _workspaceAccess = new TeamProjectAccessWorkspaceAccessList(this, "workspace_access", false);
  public get workspaceAccess() {
    return this._workspaceAccess;
  }
  public putWorkspaceAccess(value: TeamProjectAccessWorkspaceAccess[] | cdktf.IResolvable) {
    this._workspaceAccess.internalValue = value;
  }
  public resetWorkspaceAccess() {
    this._workspaceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessInput() {
    return this._workspaceAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
      project_access: cdktf.listMapper(teamProjectAccessProjectAccessToTerraform, true)(this._projectAccess.internalValue),
      workspace_access: cdktf.listMapper(teamProjectAccessWorkspaceAccessToTerraform, true)(this._workspaceAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_access: {
        value: cdktf.listMapperHcl(teamProjectAccessProjectAccessToHclTerraform, true)(this._projectAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamProjectAccessProjectAccessList",
      },
      workspace_access: {
        value: cdktf.listMapperHcl(teamProjectAccessWorkspaceAccessToHclTerraform, true)(this._workspaceAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamProjectAccessWorkspaceAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
