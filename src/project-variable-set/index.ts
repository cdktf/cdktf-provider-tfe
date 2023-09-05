// https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set#id ProjectVariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set#project_id ProjectVariableSet#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set#variable_set_id ProjectVariableSet#variable_set_id}
  */
  readonly variableSetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set tfe_project_variable_set}
*/
export class ProjectVariableSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_project_variable_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/resources/project_variable_set tfe_project_variable_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectVariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectVariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_project_variable_set',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.48.0',
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
    this._projectId = config.projectId;
    this._variableSetId = config.variableSetId;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // variable_set_id - computed: false, optional: false, required: true
  private _variableSetId?: string; 
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }
  public set variableSetId(value: string) {
    this._variableSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetIdInput() {
    return this._variableSetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      variable_set_id: cdktf.stringToTerraform(this._variableSetId),
    };
  }
}
