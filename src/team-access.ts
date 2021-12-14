// https://www.terraform.io/docs/providers/tfe/r/team_access.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#access TeamAccess#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#team_id TeamAccess#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#workspace_id TeamAccess#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#permissions TeamAccess#permissions}
  */
  readonly permissions?: TeamAccessPermissions[];
}
export interface TeamAccessPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#runs TeamAccess#runs}
  */
  readonly runs: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#sentinel_mocks TeamAccess#sentinel_mocks}
  */
  readonly sentinelMocks: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#state_versions TeamAccess#state_versions}
  */
  readonly stateVersions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#variables TeamAccess#variables}
  */
  readonly variables: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html#workspace_locking TeamAccess#workspace_locking}
  */
  readonly workspaceLocking: boolean | cdktf.IResolvable;
}

export function teamAccessPermissionsToTerraform(struct?: TeamAccessPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runs: cdktf.stringToTerraform(struct!.runs),
    sentinel_mocks: cdktf.stringToTerraform(struct!.sentinelMocks),
    state_versions: cdktf.stringToTerraform(struct!.stateVersions),
    variables: cdktf.stringToTerraform(struct!.variables),
    workspace_locking: cdktf.booleanToTerraform(struct!.workspaceLocking),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html tfe_team_access}
*/
export class TeamAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_team_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/team_access.html tfe_team_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamAccessConfig
  */
  public constructor(scope: Construct, id: string, config: TeamAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_access',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._access = config.access;
    this._teamId = config.teamId;
    this._workspaceId = config.workspaceId;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: TeamAccessPermissions[]; 
  public get permissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: TeamAccessPermissions[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      team_id: cdktf.stringToTerraform(this._teamId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      permissions: cdktf.listMapper(teamAccessPermissionsToTerraform)(this._permissions),
    };
  }
}
