/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationModuleSharingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing#id OrganizationModuleSharing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing#module_consumers OrganizationModuleSharing#module_consumers}
  */
  readonly moduleConsumers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing#organization OrganizationModuleSharing#organization}
  */
  readonly organization?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing tfe_organization_module_sharing}
*/
export class OrganizationModuleSharing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_module_sharing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationModuleSharing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationModuleSharing to import
  * @param importFromId The id of the existing OrganizationModuleSharing that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationModuleSharing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization_module_sharing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization_module_sharing tfe_organization_module_sharing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationModuleSharingConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationModuleSharingConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_module_sharing',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.68.2',
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
    this._moduleConsumers = config.moduleConsumers;
    this._organization = config.organization;
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

  // module_consumers - computed: false, optional: false, required: true
  private _moduleConsumers?: string[]; 
  public get moduleConsumers() {
    return this.getListAttribute('module_consumers');
  }
  public set moduleConsumers(value: string[]) {
    this._moduleConsumers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleConsumersInput() {
    return this._moduleConsumers;
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
      id: cdktf.stringToTerraform(this._id),
      module_consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleConsumers),
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
      module_consumers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleConsumers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
