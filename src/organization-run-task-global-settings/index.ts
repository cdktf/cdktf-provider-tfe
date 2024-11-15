// https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationRunTaskGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the run task will be applied globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings#enabled OrganizationRunTaskGlobalSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The enforcement level of the global task. Valid values are `advisory` and `mandatory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings#enforcement_level OrganizationRunTaskGlobalSettings#enforcement_level}
  */
  readonly enforcementLevel: string;
  /**
  * Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings#stages OrganizationRunTaskGlobalSettings#stages}
  */
  readonly stages: string[];
  /**
  * The id of the run task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings#task_id OrganizationRunTaskGlobalSettings#task_id}
  */
  readonly taskId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings tfe_organization_run_task_global_settings}
*/
export class OrganizationRunTaskGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_run_task_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationRunTaskGlobalSettings to import
  * @param importFromId The id of the existing OrganizationRunTaskGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationRunTaskGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_organization_run_task_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task_global_settings tfe_organization_run_task_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationRunTaskGlobalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationRunTaskGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_run_task_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.60.1',
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

  // enabled - computed: true, optional: true, required: false
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

  // stages - computed: false, optional: false, required: true
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
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
