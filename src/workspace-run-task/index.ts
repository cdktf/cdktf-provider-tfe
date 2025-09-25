/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceRunTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * The enforcement level of the task. Valid values are `advisory` and `mandatory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}
  */
  readonly enforcementLevel: string;
  /**
  * The stage to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#stage WorkspaceRunTask#stage}
  */
  readonly stage?: string;
  /**
  * The stages to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#stages WorkspaceRunTask#stages}
  */
  readonly stages?: string[];
  /**
  * The id of the Run task to associate to the Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#task_id WorkspaceRunTask#task_id}
  */
  readonly taskId: string;
  /**
  * The id of the workspace to associate the Run task to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task tfe_workspace_run_task}
*/
export class WorkspaceRunTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace_run_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceRunTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceRunTask to import
  * @param importFromId The id of the existing WorkspaceRunTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceRunTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace_run_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/workspace_run_task tfe_workspace_run_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceRunTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceRunTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace_run_task',
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
    this._enforcementLevel = config.enforcementLevel;
    this._stage = config.stage;
    this._stages = config.stages;
    this._taskId = config.taskId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement_level - computed: false, optional: false, required: true
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stage - computed: true, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // stages - computed: true, optional: true, required: false
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
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
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      stage: cdktf.stringToTerraform(this._stage),
      stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stages),
      task_id: cdktf.stringToTerraform(this._taskId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement_level: {
        value: cdktf.stringToHclTerraform(this._enforcementLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
