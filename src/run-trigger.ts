// https://www.terraform.io/docs/providers/tfe/r/run_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger.html#sourceable_id RunTrigger#sourceable_id}
  */
  readonly sourceableId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger.html#workspace_id RunTrigger#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger.html tfe_run_trigger}
*/
export class RunTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_run_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger.html tfe_run_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: RunTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_run_trigger',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._sourceableId = config.sourceableId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sourceable_id - computed: false, optional: false, required: true
  private _sourceableId?: string; 
  public get sourceableId() {
    return this.getStringAttribute('sourceable_id');
  }
  public set sourceableId(value: string) {
    this._sourceableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceableIdInput() {
    return this._sourceableId;
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
      sourceable_id: cdktf.stringToTerraform(this._sourceableId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
