/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationDefaultSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings#default_agent_pool_id OrganizationDefaultSettings#default_agent_pool_id}
  */
  readonly defaultAgentPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings#default_execution_mode OrganizationDefaultSettings#default_execution_mode}
  */
  readonly defaultExecutionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings#id OrganizationDefaultSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings#organization OrganizationDefaultSettings#organization}
  */
  readonly organization?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings tfe_organization_default_settings}
*/
export class OrganizationDefaultSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_default_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationDefaultSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationDefaultSettings to import
  * @param importFromId The id of the existing OrganizationDefaultSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationDefaultSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization_default_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/organization_default_settings tfe_organization_default_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationDefaultSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationDefaultSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_default_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.56.0',
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
    this._defaultAgentPoolId = config.defaultAgentPoolId;
    this._defaultExecutionMode = config.defaultExecutionMode;
    this._id = config.id;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_agent_pool_id - computed: false, optional: true, required: false
  private _defaultAgentPoolId?: string; 
  public get defaultAgentPoolId() {
    return this.getStringAttribute('default_agent_pool_id');
  }
  public set defaultAgentPoolId(value: string) {
    this._defaultAgentPoolId = value;
  }
  public resetDefaultAgentPoolId() {
    this._defaultAgentPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAgentPoolIdInput() {
    return this._defaultAgentPoolId;
  }

  // default_execution_mode - computed: false, optional: false, required: true
  private _defaultExecutionMode?: string; 
  public get defaultExecutionMode() {
    return this.getStringAttribute('default_execution_mode');
  }
  public set defaultExecutionMode(value: string) {
    this._defaultExecutionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecutionModeInput() {
    return this._defaultExecutionMode;
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

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_agent_pool_id: cdktf.stringToTerraform(this._defaultAgentPoolId),
      default_execution_mode: cdktf.stringToTerraform(this._defaultExecutionMode),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_agent_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultAgentPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_execution_mode: {
        value: cdktf.stringToHclTerraform(this._defaultExecutionMode),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
