/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/data-sources/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/data-sources/ip_ranges#id DataTfeIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/data-sources/ip_ranges tfe_ip_ranges}
*/
export class DataTfeIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_ip_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeIpRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeIpRanges to import
  * @param importFromId The id of the existing DataTfeIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeIpRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_ip_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/data-sources/ip_ranges tfe_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_ip_ranges',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getListAttribute('api');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // sentinel - computed: true, optional: false, required: false
  public get sentinel() {
    return this.getListAttribute('sentinel');
  }

  // vcs - computed: true, optional: false, required: false
  public get vcs() {
    return this.getListAttribute('vcs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
