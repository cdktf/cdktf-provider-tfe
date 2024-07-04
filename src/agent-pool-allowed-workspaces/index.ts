/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentPoolAllowedWorkspacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}
  */
  readonly agentPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}
  */
  readonly allowedWorkspaceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces tfe_agent_pool_allowed_workspaces}
*/
export class AgentPoolAllowedWorkspaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_agent_pool_allowed_workspaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentPoolAllowedWorkspaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentPoolAllowedWorkspaces to import
  * @param importFromId The id of the existing AgentPoolAllowedWorkspaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentPoolAllowedWorkspaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_agent_pool_allowed_workspaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/agent_pool_allowed_workspaces tfe_agent_pool_allowed_workspaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentPoolAllowedWorkspacesConfig
  */
  public constructor(scope: Construct, id: string, config: AgentPoolAllowedWorkspacesConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_agent_pool_allowed_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.56.0',
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
    this._allowedWorkspaceIds = config.allowedWorkspaceIds;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_id - computed: false, optional: false, required: true
  private _agentPoolId?: string; 
  public get agentPoolId() {
    return this.getStringAttribute('agent_pool_id');
  }
  public set agentPoolId(value: string) {
    this._agentPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolIdInput() {
    return this._agentPoolId;
  }

  // allowed_workspace_ids - computed: false, optional: false, required: true
  private _allowedWorkspaceIds?: string[]; 
  public get allowedWorkspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_workspace_ids'));
  }
  public set allowedWorkspaceIds(value: string[]) {
    this._allowedWorkspaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWorkspaceIdsInput() {
    return this._allowedWorkspaceIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool_id: cdktf.stringToTerraform(this._agentPoolId),
      allowed_workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedWorkspaceIds),
      id: cdktf.stringToTerraform(this._id),
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
      allowed_workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedWorkspaceIds),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
