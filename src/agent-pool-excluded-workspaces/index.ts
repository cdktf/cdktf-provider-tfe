/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentPoolExcludedWorkspacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#agent_pool_id AgentPoolExcludedWorkspaces#agent_pool_id}
  */
  readonly agentPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#excluded_workspace_ids AgentPoolExcludedWorkspaces#excluded_workspace_ids}
  */
  readonly excludedWorkspaceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#id AgentPoolExcludedWorkspaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces tfe_agent_pool_excluded_workspaces}
*/
export class AgentPoolExcludedWorkspaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_agent_pool_excluded_workspaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentPoolExcludedWorkspaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentPoolExcludedWorkspaces to import
  * @param importFromId The id of the existing AgentPoolExcludedWorkspaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentPoolExcludedWorkspaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_agent_pool_excluded_workspaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces tfe_agent_pool_excluded_workspaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentPoolExcludedWorkspacesConfig
  */
  public constructor(scope: Construct, id: string, config: AgentPoolExcludedWorkspacesConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_agent_pool_excluded_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.71.0',
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
    this._excludedWorkspaceIds = config.excludedWorkspaceIds;
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

  // excluded_workspace_ids - computed: false, optional: false, required: true
  private _excludedWorkspaceIds?: string[]; 
  public get excludedWorkspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_workspace_ids'));
  }
  public set excludedWorkspaceIds(value: string[]) {
    this._excludedWorkspaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedWorkspaceIdsInput() {
    return this._excludedWorkspaceIds;
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
      excluded_workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedWorkspaceIds),
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
      excluded_workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedWorkspaceIds),
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
