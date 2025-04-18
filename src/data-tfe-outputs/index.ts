/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOutputsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs#organization DataTfeOutputs#organization}
  */
  readonly organization?: string;
  /**
  * Name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs#workspace DataTfeOutputs#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs tfe_outputs}
*/
export class DataTfeOutputs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_outputs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeOutputs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeOutputs to import
  * @param importFromId The id of the existing DataTfeOutputs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeOutputs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_outputs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/outputs tfe_outputs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOutputsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeOutputsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_outputs',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.65.0',
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
    this._organization = config.organization;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nonsensitive_values - computed: true, optional: false, required: false
  private _nonsensitiveValues = new cdktf.AnyMap(this, "nonsensitive_values");
  public get nonsensitiveValues() {
    return this._nonsensitiveValues;
  }

  // organization - computed: false, optional: true, required: false
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

  // values - computed: true, optional: false, required: false
  private _values = new cdktf.AnyMap(this, "values");
  public get values() {
    return this._values;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
