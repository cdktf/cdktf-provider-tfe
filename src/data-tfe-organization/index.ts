/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization#id DataTfeOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization#name DataTfeOrganization#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization tfe_organization}
*/
export class DataTfeOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeOrganization to import
  * @param importFromId The id of the existing DataTfeOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/data-sources/organization tfe_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.62.0',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregated_commit_status_enabled - computed: true, optional: false, required: false
  public get aggregatedCommitStatusEnabled() {
    return this.getBooleanAttribute('aggregated_commit_status_enabled');
  }

  // assessments_enforced - computed: true, optional: false, required: false
  public get assessmentsEnforced() {
    return this.getBooleanAttribute('assessments_enforced');
  }

  // collaborator_auth_policy - computed: true, optional: false, required: false
  public get collaboratorAuthPolicy() {
    return this.getStringAttribute('collaborator_auth_policy');
  }

  // cost_estimation_enabled - computed: true, optional: false, required: false
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }

  // default_project_id - computed: true, optional: false, required: false
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owners_team_saml_role_id - computed: true, optional: false, required: false
  public get ownersTeamSamlRoleId() {
    return this.getStringAttribute('owners_team_saml_role_id');
  }

  // send_passing_statuses_for_untriggered_speculative_plans - computed: true, optional: false, required: false
  public get sendPassingStatusesForUntriggeredSpeculativePlans() {
    return this.getBooleanAttribute('send_passing_statuses_for_untriggered_speculative_plans');
  }

  // speculative_plan_management_enabled - computed: true, optional: false, required: false
  public get speculativePlanManagementEnabled() {
    return this.getBooleanAttribute('speculative_plan_management_enabled');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
