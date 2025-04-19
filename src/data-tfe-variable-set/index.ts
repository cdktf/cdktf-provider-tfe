/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#id DataTfeVariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#name DataTfeVariableSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#organization DataTfeVariableSet#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#parent_project_id DataTfeVariableSet#parent_project_id}
  */
  readonly parentProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#project_ids DataTfeVariableSet#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#variable_ids DataTfeVariableSet#variable_ids}
  */
  readonly variableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#workspace_ids DataTfeVariableSet#workspace_ids}
  */
  readonly workspaceIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set tfe_variable_set}
*/
export class DataTfeVariableSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_variable_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeVariableSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeVariableSet to import
  * @param importFromId The id of the existing DataTfeVariableSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeVariableSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_variable_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/data-sources/variable_set tfe_variable_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeVariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeVariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_variable_set',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.65.1',
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
    this._parentProjectId = config.parentProjectId;
    this._projectIds = config.projectIds;
    this._variableIds = config.variableIds;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
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

  // parent_project_id - computed: true, optional: true, required: false
  private _parentProjectId?: string; 
  public get parentProjectId() {
    return this.getStringAttribute('parent_project_id');
  }
  public set parentProjectId(value: string) {
    this._parentProjectId = value;
  }
  public resetParentProjectId() {
    this._parentProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProjectIdInput() {
    return this._parentProjectId;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getBooleanAttribute('priority');
  }

  // project_ids - computed: true, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // variable_ids - computed: true, optional: true, required: false
  private _variableIds?: string[]; 
  public get variableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('variable_ids'));
  }
  public set variableIds(value: string[]) {
    this._variableIds = value;
  }
  public resetVariableIds() {
    this._variableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableIdsInput() {
    return this._variableIds;
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
      parent_project_id: cdktf.stringToTerraform(this._parentProjectId),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      variable_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._variableIds),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_project_id: {
        value: cdktf.stringToHclTerraform(this._parentProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      variable_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._variableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
