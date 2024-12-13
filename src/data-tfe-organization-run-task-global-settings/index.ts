/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOrganizationRunTaskGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the run task will be applied globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings#enabled DataTfeOrganizationRunTaskGlobalSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The enforcement level of the global task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings#enforcement_level DataTfeOrganizationRunTaskGlobalSettings#enforcement_level}
  */
  readonly enforcementLevel?: string;
  /**
  * Which stages the task will run in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings#stages DataTfeOrganizationRunTaskGlobalSettings#stages}
  */
  readonly stages?: string[];
  /**
  * The id of the run task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings#task_id DataTfeOrganizationRunTaskGlobalSettings#task_id}
  */
  readonly taskId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings tfe_organization_run_task_global_settings}
*/
export class DataTfeOrganizationRunTaskGlobalSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_run_task_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeOrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeOrganizationRunTaskGlobalSettings to import
  * @param importFromId The id of the existing DataTfeOrganizationRunTaskGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeOrganizationRunTaskGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization_run_task_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/organization_run_task_global_settings tfe_organization_run_task_global_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOrganizationRunTaskGlobalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeOrganizationRunTaskGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_run_task_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.61.0',
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
    this._enabled = config.enabled;
    this._enforcementLevel = config.enforcementLevel;
    this._stages = config.stages;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforcement_level - computed: false, optional: true, required: false
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  public resetEnforcementLevel() {
    this._enforcementLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stages - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stages),
      task_id: cdktf.stringToTerraform(this._taskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforcement_level: {
        value: cdktf.stringToHclTerraform(this._enforcementLevel),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
