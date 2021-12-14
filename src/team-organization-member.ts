// https://www.terraform.io/docs/providers/tfe/r/team_organization_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamOrganizationMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member.html#organization_membership_id TeamOrganizationMember#organization_membership_id}
  */
  readonly organizationMembershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member.html#team_id TeamOrganizationMember#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member.html tfe_team_organization_member}
*/
export class TeamOrganizationMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_team_organization_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member.html tfe_team_organization_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamOrganizationMemberConfig
  */
  public constructor(scope: Construct, id: string, config: TeamOrganizationMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_organization_member',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._organizationMembershipId = config.organizationMembershipId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_membership_id - computed: false, optional: false, required: true
  private _organizationMembershipId?: string; 
  public get organizationMembershipId() {
    return this.getStringAttribute('organization_membership_id');
  }
  public set organizationMembershipId(value: string) {
    this._organizationMembershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationMembershipIdInput() {
    return this._organizationMembershipId;
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
      organization_membership_id: cdktf.stringToTerraform(this._organizationMembershipId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
