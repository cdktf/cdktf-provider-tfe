/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamOrganizationMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members#id TeamOrganizationMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members#organization_membership_ids TeamOrganizationMembers#organization_membership_ids}
  */
  readonly organizationMembershipIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members#team_id TeamOrganizationMembers#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members tfe_team_organization_members}
*/
export class TeamOrganizationMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team_organization_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamOrganizationMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamOrganizationMembers to import
  * @param importFromId The id of the existing TeamOrganizationMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamOrganizationMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_team_organization_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_organization_members tfe_team_organization_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamOrganizationMembersConfig
  */
  public constructor(scope: Construct, id: string, config: TeamOrganizationMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_organization_members',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.55.0',
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
    this._id = config.id;
    this._organizationMembershipIds = config.organizationMembershipIds;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization_membership_ids - computed: false, optional: false, required: true
  private _organizationMembershipIds?: string[]; 
  public get organizationMembershipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_membership_ids'));
  }
  public set organizationMembershipIds(value: string[]) {
    this._organizationMembershipIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationMembershipIdsInput() {
    return this._organizationMembershipIds;
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
      id: cdktf.stringToTerraform(this._id),
      organization_membership_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationMembershipIds),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_membership_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationMembershipIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
