// https://www.terraform.io/docs/providers/tfe/d/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#name DataTfeOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organization tfe_organization}
*/
export class DataTfeOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/organization tfe_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collaborator_auth_policy - computed: true, optional: false, required: false
  public get collaboratorAuthPolicy() {
    return this.getStringAttribute('collaborator_auth_policy');
  }

  // cost_estimation_enabled - computed: true, optional: false, required: false
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owners_team_saml_role_id - computed: true, optional: false, required: false
  public get ownersTeamSamlRoleId() {
    return this.getStringAttribute('owners_team_saml_role_id');
  }

  // two_factor_conformant - computed: true, optional: false, required: false
  public get twoFactorConformant() {
    return this.getBooleanAttribute('two_factor_conformant');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
