/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings#default_agent_pool_id ProjectSettings#default_agent_pool_id}
  */
  readonly defaultAgentPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings#default_execution_mode ProjectSettings#default_execution_mode}
  */
  readonly defaultExecutionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings#project_id ProjectSettings#project_id}
  */
  readonly projectId: string;
}
export interface ProjectSettingsOverwrites {
}

export function projectSettingsOverwritesToTerraform(struct?: ProjectSettingsOverwrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectSettingsOverwritesToHclTerraform(struct?: ProjectSettingsOverwrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectSettingsOverwritesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectSettingsOverwrites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsOverwrites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_agent_pool_id - computed: true, optional: false, required: false
  public get defaultAgentPoolId() {
    return this.getBooleanAttribute('default_agent_pool_id');
  }

  // default_execution_mode - computed: true, optional: false, required: false
  public get defaultExecutionMode() {
    return this.getBooleanAttribute('default_execution_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings tfe_project_settings}
*/
export class ProjectSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_project_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectSettings to import
  * @param importFromId The id of the existing ProjectSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_project_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/project_settings tfe_project_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_project_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.70.0',
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
    this._defaultAgentPoolId = config.defaultAgentPoolId;
    this._defaultExecutionMode = config.defaultExecutionMode;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_agent_pool_id - computed: true, optional: true, required: false
  private _defaultAgentPoolId?: string; 
  public get defaultAgentPoolId() {
    return this.getStringAttribute('default_agent_pool_id');
  }
  public set defaultAgentPoolId(value: string) {
    this._defaultAgentPoolId = value;
  }
  public resetDefaultAgentPoolId() {
    this._defaultAgentPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAgentPoolIdInput() {
    return this._defaultAgentPoolId;
  }

  // default_execution_mode - computed: true, optional: true, required: false
  private _defaultExecutionMode?: string; 
  public get defaultExecutionMode() {
    return this.getStringAttribute('default_execution_mode');
  }
  public set defaultExecutionMode(value: string) {
    this._defaultExecutionMode = value;
  }
  public resetDefaultExecutionMode() {
    this._defaultExecutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecutionModeInput() {
    return this._defaultExecutionMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overwrites - computed: true, optional: false, required: false
  private _overwrites = new ProjectSettingsOverwritesOutputReference(this, "overwrites");
  public get overwrites() {
    return this._overwrites;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_agent_pool_id: cdktf.stringToTerraform(this._defaultAgentPoolId),
      default_execution_mode: cdktf.stringToTerraform(this._defaultExecutionMode),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_agent_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultAgentPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_execution_mode: {
        value: cdktf.stringToHclTerraform(this._defaultExecutionMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
