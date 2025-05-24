// https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set#id ProjectVariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set#project_id ProjectVariableSet#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set#variable_set_id ProjectVariableSet#variable_set_id}
  */
  readonly variableSetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set tfe_project_variable_set}
*/
export class ProjectVariableSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_project_variable_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectVariableSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectVariableSet to import
  * @param importFromId The id of the existing ProjectVariableSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectVariableSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_project_variable_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/project_variable_set tfe_project_variable_set} Resource
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_set_id: {
        value: cdktf.stringToHclTerraform(this._variableSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
