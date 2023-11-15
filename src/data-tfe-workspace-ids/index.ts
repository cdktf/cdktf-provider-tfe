// https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}
  */
  readonly names?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}
  */
  readonly tagNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids tfe_workspace_ids}
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
  * @param importFromId The id of the existing DataTfeWorkspaceIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeWorkspaceIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace_ids tfe_workspace_ids} Data Source
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
        providerVersion: '0.50.0',
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
    };
  }
}
