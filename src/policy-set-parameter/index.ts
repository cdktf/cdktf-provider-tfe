/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#key PolicySetParameter#key}
  */
  readonly key: string;
  /**
  * The ID of the policy set that owns the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}
  */
  readonly policySetId: string;
  /**
  * Whether the value is sensitive. If true then the parameter is written once and not visible thereafter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#sensitive PolicySetParameter#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#value PolicySetParameter#value}
  */
  readonly value?: string;
  /**
  * Value of the parameter in write-only mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#value_wo PolicySetParameter#value_wo}
  */
  readonly valueWo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter tfe_policy_set_parameter}
*/
export class PolicySetParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_policy_set_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySetParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySetParameter to import
  * @param importFromId The id of the existing PolicySetParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySetParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_policy_set_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.1/docs/resources/policy_set_parameter tfe_policy_set_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetParameterConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_policy_set_parameter',
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
    this._key = config.key;
    this._policySetId = config.policySetId;
    this._sensitive = config.sensitive;
    this._value = config.value;
    this._valueWo = config.valueWo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
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

  // policy_set_id - computed: false, optional: false, required: true
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // sensitive - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

  // value_wo - computed: false, optional: true, required: false
  private _valueWo?: string; 
  public get valueWo() {
    return this.getStringAttribute('value_wo');
  }
  public set valueWo(value: string) {
    this._valueWo = value;
  }
  public resetValueWo() {
    this._valueWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWoInput() {
    return this._valueWo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      value: cdktf.stringToTerraform(this._value),
      value_wo: cdktf.stringToTerraform(this._valueWo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive: {
        value: cdktf.booleanToHclTerraform(this._sensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_wo: {
        value: cdktf.stringToHclTerraform(this._valueWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
