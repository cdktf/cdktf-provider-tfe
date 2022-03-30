// https://www.terraform.io/docs/providers/tfe/r/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#collaborator_auth_policy Organization#collaborator_auth_policy}
  */
  readonly collaboratorAuthPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#cost_estimation_enabled Organization#cost_estimation_enabled}
  */
  readonly costEstimationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#email Organization#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}
  */
  readonly ownersTeamSamlRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_remember_minutes Organization#session_remember_minutes}
  */
  readonly sessionRememberMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_timeout_minutes Organization#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization tfe_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/organization tfe_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.26.1',
        providerVersionConstraint: '~> 0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._collaboratorAuthPolicy = config.collaboratorAuthPolicy;
    this._costEstimationEnabled = config.costEstimationEnabled;
    this._email = config.email;
    this._name = config.name;
    this._ownersTeamSamlRoleId = config.ownersTeamSamlRoleId;
    this._sessionRememberMinutes = config.sessionRememberMinutes;
    this._sessionTimeoutMinutes = config.sessionTimeoutMinutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collaborator_auth_policy - computed: false, optional: true, required: false
  private _collaboratorAuthPolicy?: string; 
  public get collaboratorAuthPolicy() {
    return this.getStringAttribute('collaborator_auth_policy');
  }
  public set collaboratorAuthPolicy(value: string) {
    this._collaboratorAuthPolicy = value;
  }
  public resetCollaboratorAuthPolicy() {
    this._collaboratorAuthPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorAuthPolicyInput() {
    return this._collaboratorAuthPolicy;
  }

  // cost_estimation_enabled - computed: true, optional: true, required: false
  private _costEstimationEnabled?: boolean | cdktf.IResolvable; 
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }
  public set costEstimationEnabled(value: boolean | cdktf.IResolvable) {
    this._costEstimationEnabled = value;
  }
  public resetCostEstimationEnabled() {
    this._costEstimationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costEstimationEnabledInput() {
    return this._costEstimationEnabled;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // owners_team_saml_role_id - computed: false, optional: true, required: false
  private _ownersTeamSamlRoleId?: string; 
  public get ownersTeamSamlRoleId() {
    return this.getStringAttribute('owners_team_saml_role_id');
  }
  public set ownersTeamSamlRoleId(value: string) {
    this._ownersTeamSamlRoleId = value;
  }
  public resetOwnersTeamSamlRoleId() {
    this._ownersTeamSamlRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersTeamSamlRoleIdInput() {
    return this._ownersTeamSamlRoleId;
  }

  // session_remember_minutes - computed: false, optional: true, required: false
  private _sessionRememberMinutes?: number; 
  public get sessionRememberMinutes() {
    return this.getNumberAttribute('session_remember_minutes');
  }
  public set sessionRememberMinutes(value: number) {
    this._sessionRememberMinutes = value;
  }
  public resetSessionRememberMinutes() {
    this._sessionRememberMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberMinutesInput() {
    return this._sessionRememberMinutes;
  }

  // session_timeout_minutes - computed: false, optional: true, required: false
  private _sessionTimeoutMinutes?: number; 
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
  public set sessionTimeoutMinutes(value: number) {
    this._sessionTimeoutMinutes = value;
  }
  public resetSessionTimeoutMinutes() {
    this._sessionTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMinutesInput() {
    return this._sessionTimeoutMinutes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collaborator_auth_policy: cdktf.stringToTerraform(this._collaboratorAuthPolicy),
      cost_estimation_enabled: cdktf.booleanToTerraform(this._costEstimationEnabled),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      owners_team_saml_role_id: cdktf.stringToTerraform(this._ownersTeamSamlRoleId),
      session_remember_minutes: cdktf.numberToTerraform(this._sessionRememberMinutes),
      session_timeout_minutes: cdktf.numberToTerraform(this._sessionTimeoutMinutes),
    };
  }
}
