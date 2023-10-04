/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project#id DataTfeProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project#name DataTfeProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project#organization DataTfeProject#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project#workspace_ids DataTfeProject#workspace_ids}
  */
  readonly workspaceIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project tfe_project}
*/
export class DataTfeProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/project tfe_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_project',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.49.1',
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
    this._organization = config.organization;
    this._workspaceIds = config.workspaceIds;
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

  // workspace_ids - computed: true, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }
}
