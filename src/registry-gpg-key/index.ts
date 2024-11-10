/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryGpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ASCII-armored representation of the GPG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key#ascii_armor RegistryGpgKey#ascii_armor}
  */
  readonly asciiArmor: string;
  /**
  * Name of the organization. If omitted, organization must be defined in the provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key#organization RegistryGpgKey#organization}
  */
  readonly organization?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key tfe_registry_gpg_key}
*/
export class RegistryGpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_registry_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistryGpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistryGpgKey to import
  * @param importFromId The id of the existing RegistryGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistryGpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_registry_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.0/docs/resources/registry_gpg_key tfe_registry_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryGpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryGpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.60.0',
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
    this._asciiArmor = config.asciiArmor;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascii_armor - computed: false, optional: false, required: true
  private _asciiArmor?: string; 
  public get asciiArmor() {
    return this.getStringAttribute('ascii_armor');
  }
  public set asciiArmor(value: string) {
    this._asciiArmor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiArmorInput() {
    return this._asciiArmor;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      ascii_armor: cdktf.stringToTerraform(this._asciiArmor),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ascii_armor: {
        value: cdktf.stringToHclTerraform(this._asciiArmor),
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
