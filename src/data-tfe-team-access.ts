// https://www.terraform.io/docs/providers/tfe/d/team_access.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeTeamAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access.html#team_id DataTfeTeamAccess#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access.html#workspace_id DataTfeTeamAccess#workspace_id}
  */
  readonly workspaceId: string;
}
export class DataTfeTeamAccessPermissions extends cdktf.ComplexComputedList {

  // runs - computed: true, optional: false, required: false
  public get runs() {
    return this.getStringAttribute('runs');
  }

  // sentinel_mocks - computed: true, optional: false, required: false
  public get sentinelMocks() {
    return this.getStringAttribute('sentinel_mocks');
  }

  // state_versions - computed: true, optional: false, required: false
  public get stateVersions() {
    return this.getStringAttribute('state_versions');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.getStringAttribute('variables');
  }

  // workspace_locking - computed: true, optional: false, required: false
  public get workspaceLocking() {
    return this.getBooleanAttribute('workspace_locking') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/team_access.html tfe_team_access}
*/
export class DataTfeTeamAccess extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_team_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/team_access.html tfe_team_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeTeamAccessConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeTeamAccessConfig) {
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
    this._teamId = config.teamId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public permissions(index: string) {
    return new DataTfeTeamAccessPermissions(this, 'permissions', index);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_id: cdktf.stringToTerraform(this._teamId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
