/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}
  */
  readonly names?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#tag_filters DataTfeWorkspaceIds#tag_filters}
  */
  readonly tagFilters?: DataTfeWorkspaceIdsTagFilters;
}
export interface DataTfeWorkspaceIdsTagFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#exclude DataTfeWorkspaceIds#exclude}
  */
  readonly exclude?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#include DataTfeWorkspaceIds#include}
  */
  readonly include?: { [key: string]: string };
}

export function dataTfeWorkspaceIdsTagFiltersToTerraform(struct?: DataTfeWorkspaceIdsTagFiltersOutputReference | DataTfeWorkspaceIdsTagFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.exclude),
    include: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.include),
  }
}


export function dataTfeWorkspaceIdsTagFiltersToHclTerraform(struct?: DataTfeWorkspaceIdsTagFiltersOutputReference | DataTfeWorkspaceIdsTagFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.exclude),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.include),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTfeWorkspaceIdsTagFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTfeWorkspaceIdsTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeWorkspaceIdsTagFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: { [key: string]: string }; 
  public get exclude() {
    return this.getStringMapAttribute('exclude');
  }
  public set exclude(value: { [key: string]: string }) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: { [key: string]: string }; 
  public get include() {
    return this.getStringMapAttribute('include');
  }
  public set include(value: { [key: string]: string }) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids tfe_workspace_ids}
*/
export class DataTfeWorkspaceIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace_ids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeWorkspaceIds to import
  * @param importFromId The id of the existing DataTfeWorkspaceIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeWorkspaceIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/workspace_ids tfe_workspace_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeWorkspaceIdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeWorkspaceIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace_ids',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.66.0',
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
    this._excludeTags = config.excludeTags;
    this._id = config.id;
    this._names = config.names;
    this._organization = config.organization;
    this._tagNames = config.tagNames;
    this._tagFilters.internalValue = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_tags'));
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // full_names - computed: true, optional: false, required: false
  private _fullNames = new cdktf.StringMap(this, "full_names");
  public get fullNames() {
    return this._fullNames;
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

  // ids - computed: true, optional: false, required: false
  private _ids = new cdktf.StringMap(this, "ids");
  public get ids() {
    return this._ids;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
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

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new DataTfeWorkspaceIdsTagFiltersOutputReference(this, "tag_filters");
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataTfeWorkspaceIdsTagFilters) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeTags),
      id: cdktf.stringToTerraform(this._id),
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
      organization: cdktf.stringToTerraform(this._organization),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      tag_filters: dataTfeWorkspaceIdsTagFiltersToTerraform(this._tagFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._names),
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
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag_filters: {
        value: dataTfeWorkspaceIdsTagFiltersToHclTerraform(this._tagFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfeWorkspaceIdsTagFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
