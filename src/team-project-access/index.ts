/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamProjectAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access#access TeamProjectAccess#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access#id TeamProjectAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access tfe_team_project_access}
*/
export class TeamProjectAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team_project_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/team_project_access tfe_team_project_access} Resource
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
        providerVersion: '0.47.0',
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
