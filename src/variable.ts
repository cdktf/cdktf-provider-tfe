// https://www.terraform.io/docs/providers/tfe/r/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#category Variable#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#description Variable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#hcl Variable#hcl}
  */
  readonly hcl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#key Variable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#sensitive Variable#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#value Variable#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#workspace_id Variable#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/variable tfe_variable}
*/
export class Variable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/variable tfe_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableConfig
  */
  public constructor(scope: Construct, id: string, config: VariableConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_variable',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._category = config.category;
    this._description = config.description;
    this._hcl = config.hcl;
    this._key = config.key;
    this._sensitive = config.sensitive;
    this._value = config.value;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
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

  // hcl - computed: false, optional: true, required: false
  private _hcl?: boolean | cdktf.IResolvable; 
  public get hcl() {
    return this.getBooleanAttribute('hcl');
  }
  public set hcl(value: boolean | cdktf.IResolvable) {
    this._hcl = value;
  }
  public resetHcl() {
    this._hcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      hcl: cdktf.booleanToTerraform(this._hcl),
      key: cdktf.stringToTerraform(this._key),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      value: cdktf.stringToTerraform(this._value),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
