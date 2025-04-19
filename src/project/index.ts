// https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Duration after which the project will be auto-destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#auto_destroy_activity_duration Project#auto_destroy_activity_duration}
  */
  readonly autoDestroyActivityDuration?: string;
  /**
  * Description of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Explicitly ignores tags created outside of Terraform so they will not be overwritten by tags defined in configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#ignore_additional_tags Project#ignore_additional_tags}
  */
  readonly ignoreAdditionalTags?: boolean | cdktf.IResolvable;
  /**
  * Name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Name of the organization to which the project belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#organization Project#organization}
  */
  readonly organization?: string;
  /**
  * A map of key-value tags to add to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#tags Project#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project tfe_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/project tfe_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_project',
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
    this._autoDestroyActivityDuration = config.autoDestroyActivityDuration;
    this._description = config.description;
    this._ignoreAdditionalTags = config.ignoreAdditionalTags;
    this._name = config.name;
    this._organization = config.organization;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_destroy_activity_duration - computed: false, optional: true, required: false
  private _autoDestroyActivityDuration?: string; 
  public get autoDestroyActivityDuration() {
    return this.getStringAttribute('auto_destroy_activity_duration');
  }
  public set autoDestroyActivityDuration(value: string) {
    this._autoDestroyActivityDuration = value;
  }
  public resetAutoDestroyActivityDuration() {
    this._autoDestroyActivityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDestroyActivityDurationInput() {
    return this._autoDestroyActivityDuration;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_additional_tags - computed: false, optional: true, required: false
  private _ignoreAdditionalTags?: boolean | cdktf.IResolvable; 
  public get ignoreAdditionalTags() {
    return this.getBooleanAttribute('ignore_additional_tags');
  }
  public set ignoreAdditionalTags(value: boolean | cdktf.IResolvable) {
    this._ignoreAdditionalTags = value;
  }
  public resetIgnoreAdditionalTags() {
    this._ignoreAdditionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAdditionalTagsInput() {
    return this._ignoreAdditionalTags;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_destroy_activity_duration: cdktf.stringToTerraform(this._autoDestroyActivityDuration),
      description: cdktf.stringToTerraform(this._description),
      ignore_additional_tags: cdktf.booleanToTerraform(this._ignoreAdditionalTags),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_destroy_activity_duration: {
        value: cdktf.stringToHclTerraform(this._autoDestroyActivityDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_additional_tags: {
        value: cdktf.booleanToHclTerraform(this._ignoreAdditionalTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
