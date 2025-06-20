/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeRegistryGpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key#id DataTfeRegistryGpgKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the organization. If omitted, organization must be defined in the provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key#organization DataTfeRegistryGpgKey#organization}
  */
  readonly organization?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key tfe_registry_gpg_key}
*/
export class DataTfeRegistryGpgKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_registry_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeRegistryGpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeRegistryGpgKey to import
  * @param importFromId The id of the existing DataTfeRegistryGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeRegistryGpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_registry_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/data-sources/registry_gpg_key tfe_registry_gpg_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeRegistryGpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeRegistryGpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.67.0',
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
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascii_armor - computed: true, optional: false, required: false
  public get asciiArmor() {
    return this.getStringAttribute('ascii_armor');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
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
