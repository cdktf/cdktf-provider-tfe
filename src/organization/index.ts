/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}
  */
  readonly aggregatedCommitStatusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}
  */
  readonly allowForceDeleteWorkspaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}
  */
  readonly assessmentsEnforced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}
  */
  readonly collaboratorAuthPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}
  */
  readonly costEstimationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#email Organization#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}
  */
  readonly ownersTeamSamlRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}
  */
  readonly sendPassingStatusesForUntriggeredSpeculativePlans?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}
  */
  readonly sessionRememberMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#speculative_plan_management_enabled Organization#speculative_plan_management_enabled}
  */
  readonly speculativePlanManagementEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization tfe_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/organization tfe_organization} Resource
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
        providerVersion: '0.70.0',
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
    this._aggregatedCommitStatusEnabled = config.aggregatedCommitStatusEnabled;
    this._allowForceDeleteWorkspaces = config.allowForceDeleteWorkspaces;
    this._assessmentsEnforced = config.assessmentsEnforced;
    this._collaboratorAuthPolicy = config.collaboratorAuthPolicy;
    this._costEstimationEnabled = config.costEstimationEnabled;
    this._email = config.email;
    this._id = config.id;
    this._name = config.name;
    this._ownersTeamSamlRoleId = config.ownersTeamSamlRoleId;
    this._sendPassingStatusesForUntriggeredSpeculativePlans = config.sendPassingStatusesForUntriggeredSpeculativePlans;
    this._sessionRememberMinutes = config.sessionRememberMinutes;
    this._sessionTimeoutMinutes = config.sessionTimeoutMinutes;
    this._speculativePlanManagementEnabled = config.speculativePlanManagementEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregated_commit_status_enabled - computed: true, optional: true, required: false
  private _aggregatedCommitStatusEnabled?: boolean | cdktf.IResolvable; 
  public get aggregatedCommitStatusEnabled() {
    return this.getBooleanAttribute('aggregated_commit_status_enabled');
  }
  public set aggregatedCommitStatusEnabled(value: boolean | cdktf.IResolvable) {
    this._aggregatedCommitStatusEnabled = value;
  }
  public resetAggregatedCommitStatusEnabled() {
    this._aggregatedCommitStatusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedCommitStatusEnabledInput() {
    return this._aggregatedCommitStatusEnabled;
  }

  // allow_force_delete_workspaces - computed: false, optional: true, required: false
  private _allowForceDeleteWorkspaces?: boolean | cdktf.IResolvable; 
  public get allowForceDeleteWorkspaces() {
    return this.getBooleanAttribute('allow_force_delete_workspaces');
  }
  public set allowForceDeleteWorkspaces(value: boolean | cdktf.IResolvable) {
    this._allowForceDeleteWorkspaces = value;
  }
  public resetAllowForceDeleteWorkspaces() {
    this._allowForceDeleteWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForceDeleteWorkspacesInput() {
    return this._allowForceDeleteWorkspaces;
  }

  // assessments_enforced - computed: false, optional: true, required: false
  private _assessmentsEnforced?: boolean | cdktf.IResolvable; 
  public get assessmentsEnforced() {
    return this.getBooleanAttribute('assessments_enforced');
  }
  public set assessmentsEnforced(value: boolean | cdktf.IResolvable) {
    this._assessmentsEnforced = value;
  }
  public resetAssessmentsEnforced() {
    this._assessmentsEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentsEnforcedInput() {
    return this._assessmentsEnforced;
  }

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

  // default_project_id - computed: true, optional: false, required: false
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
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

  // send_passing_statuses_for_untriggered_speculative_plans - computed: true, optional: true, required: false
  private _sendPassingStatusesForUntriggeredSpeculativePlans?: boolean | cdktf.IResolvable; 
  public get sendPassingStatusesForUntriggeredSpeculativePlans() {
    return this.getBooleanAttribute('send_passing_statuses_for_untriggered_speculative_plans');
  }
  public set sendPassingStatusesForUntriggeredSpeculativePlans(value: boolean | cdktf.IResolvable) {
    this._sendPassingStatusesForUntriggeredSpeculativePlans = value;
  }
  public resetSendPassingStatusesForUntriggeredSpeculativePlans() {
    this._sendPassingStatusesForUntriggeredSpeculativePlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPassingStatusesForUntriggeredSpeculativePlansInput() {
    return this._sendPassingStatusesForUntriggeredSpeculativePlans;
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

  // speculative_plan_management_enabled - computed: false, optional: true, required: false
  private _speculativePlanManagementEnabled?: boolean | cdktf.IResolvable; 
  public get speculativePlanManagementEnabled() {
    return this.getBooleanAttribute('speculative_plan_management_enabled');
  }
  public set speculativePlanManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._speculativePlanManagementEnabled = value;
  }
  public resetSpeculativePlanManagementEnabled() {
    this._speculativePlanManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speculativePlanManagementEnabledInput() {
    return this._speculativePlanManagementEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregated_commit_status_enabled: cdktf.booleanToTerraform(this._aggregatedCommitStatusEnabled),
      allow_force_delete_workspaces: cdktf.booleanToTerraform(this._allowForceDeleteWorkspaces),
      assessments_enforced: cdktf.booleanToTerraform(this._assessmentsEnforced),
      collaborator_auth_policy: cdktf.stringToTerraform(this._collaboratorAuthPolicy),
      cost_estimation_enabled: cdktf.booleanToTerraform(this._costEstimationEnabled),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owners_team_saml_role_id: cdktf.stringToTerraform(this._ownersTeamSamlRoleId),
      send_passing_statuses_for_untriggered_speculative_plans: cdktf.booleanToTerraform(this._sendPassingStatusesForUntriggeredSpeculativePlans),
      session_remember_minutes: cdktf.numberToTerraform(this._sessionRememberMinutes),
      session_timeout_minutes: cdktf.numberToTerraform(this._sessionTimeoutMinutes),
      speculative_plan_management_enabled: cdktf.booleanToTerraform(this._speculativePlanManagementEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregated_commit_status_enabled: {
        value: cdktf.booleanToHclTerraform(this._aggregatedCommitStatusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_force_delete_workspaces: {
        value: cdktf.booleanToHclTerraform(this._allowForceDeleteWorkspaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assessments_enforced: {
        value: cdktf.booleanToHclTerraform(this._assessmentsEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collaborator_auth_policy: {
        value: cdktf.stringToHclTerraform(this._collaboratorAuthPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_estimation_enabled: {
        value: cdktf.booleanToHclTerraform(this._costEstimationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners_team_saml_role_id: {
        value: cdktf.stringToHclTerraform(this._ownersTeamSamlRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_passing_statuses_for_untriggered_speculative_plans: {
        value: cdktf.booleanToHclTerraform(this._sendPassingStatusesForUntriggeredSpeculativePlans),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_remember_minutes: {
        value: cdktf.numberToHclTerraform(this._sessionRememberMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._sessionTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speculative_plan_management_enabled: {
        value: cdktf.booleanToHclTerraform(this._speculativePlanManagementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
