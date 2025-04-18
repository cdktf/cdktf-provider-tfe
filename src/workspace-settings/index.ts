/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}
  */
  readonly agentPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Whether the workspace allows all workspaces in the organization to access its state data during runs. If false, then only workspaces defined in `remote_state_consumer_ids` can access its state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#global_remote_state WorkspaceSettings#global_remote_state}
  */
  readonly globalRemoteState?: boolean | cdktf.IResolvable;
  /**
  * The set of workspace IDs set as explicit remote state consumers for the given workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#remote_state_consumer_ids WorkspaceSettings#remote_state_consumer_ids}
  */
  readonly remoteStateConsumerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}
  */
  readonly workspaceId: string;
}
export interface WorkspaceSettingsOverwrites {
}

export function workspaceSettingsOverwritesToTerraform(struct?: WorkspaceSettingsOverwrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workspaceSettingsOverwritesToHclTerraform(struct?: WorkspaceSettingsOverwrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkspaceSettingsOverwritesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspaceSettingsOverwrites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingsOverwrites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_pool - computed: true, optional: false, required: false
  public get agentPool() {
    return this.getBooleanAttribute('agent_pool');
  }

  // execution_mode - computed: true, optional: false, required: false
  public get executionMode() {
    return this.getBooleanAttribute('execution_mode');
  }
}

export class WorkspaceSettingsOverwritesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkspaceSettingsOverwritesOutputReference {
    return new WorkspaceSettingsOverwritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings tfe_workspace_settings}
*/
export class WorkspaceSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceSettings to import
  * @param importFromId The id of the existing WorkspaceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/workspace_settings tfe_workspace_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.65.0',
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
    this._agentPoolId = config.agentPoolId;
    this._executionMode = config.executionMode;
    this._globalRemoteState = config.globalRemoteState;
    this._remoteStateConsumerIds = config.remoteStateConsumerIds;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_id - computed: true, optional: true, required: false
  private _agentPoolId?: string; 
  public get agentPoolId() {
    return this.getStringAttribute('agent_pool_id');
  }
  public set agentPoolId(value: string) {
    this._agentPoolId = value;
  }
  public resetAgentPoolId() {
    this._agentPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolIdInput() {
    return this._agentPoolId;
  }

  // execution_mode - computed: true, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // global_remote_state - computed: true, optional: true, required: false
  private _globalRemoteState?: boolean | cdktf.IResolvable; 
  public get globalRemoteState() {
    return this.getBooleanAttribute('global_remote_state');
  }
  public set globalRemoteState(value: boolean | cdktf.IResolvable) {
    this._globalRemoteState = value;
  }
  public resetGlobalRemoteState() {
    this._globalRemoteState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalRemoteStateInput() {
    return this._globalRemoteState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overwrites - computed: true, optional: false, required: false
  private _overwrites = new WorkspaceSettingsOverwritesList(this, "overwrites", false);
  public get overwrites() {
    return this._overwrites;
  }

  // remote_state_consumer_ids - computed: true, optional: true, required: false
  private _remoteStateConsumerIds?: string[]; 
  public get remoteStateConsumerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_state_consumer_ids'));
  }
  public set remoteStateConsumerIds(value: string[]) {
    this._remoteStateConsumerIds = value;
  }
  public resetRemoteStateConsumerIds() {
    this._remoteStateConsumerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStateConsumerIdsInput() {
    return this._remoteStateConsumerIds;
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
      agent_pool_id: cdktf.stringToTerraform(this._agentPoolId),
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      global_remote_state: cdktf.booleanToTerraform(this._globalRemoteState),
      remote_state_consumer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteStateConsumerIds),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_pool_id: {
        value: cdktf.stringToHclTerraform(this._agentPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_remote_state: {
        value: cdktf.booleanToHclTerraform(this._globalRemoteState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_state_consumer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteStateConsumerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
