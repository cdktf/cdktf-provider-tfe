// https://www.terraform.io/docs/providers/tfe/d/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#name DataTfeWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#organization DataTfeWorkspace#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#tag_names DataTfeWorkspace#tag_names}
  */
  readonly tagNames?: string[];
}
export class DataTfeWorkspaceVcsRepo extends cdktf.ComplexComputedList {

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // ingress_submodules - computed: true, optional: false, required: false
  public get ingressSubmodules() {
    return this.getBooleanAttribute('ingress_submodules') as any;
  }

  // oauth_token_id - computed: true, optional: false, required: false
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace tfe_workspace}
*/
export class DataTfeWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/workspace tfe_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._organization = config.organization;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_destroy_plan - computed: true, optional: false, required: false
  public get allowDestroyPlan() {
    return this.getBooleanAttribute('allow_destroy_plan') as any;
  }

  // auto_apply - computed: true, optional: false, required: false
  public get autoApply() {
    return this.getBooleanAttribute('auto_apply') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_triggers_enabled - computed: true, optional: false, required: false
  public get fileTriggersEnabled() {
    return this.getBooleanAttribute('file_triggers_enabled') as any;
  }

  // global_remote_state - computed: true, optional: false, required: false
  public get globalRemoteState() {
    return this.getBooleanAttribute('global_remote_state') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getBooleanAttribute('operations') as any;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // policy_check_failures - computed: true, optional: false, required: false
  public get policyCheckFailures() {
    return this.getNumberAttribute('policy_check_failures');
  }

  // queue_all_runs - computed: true, optional: false, required: false
  public get queueAllRuns() {
    return this.getBooleanAttribute('queue_all_runs') as any;
  }

  // remote_state_consumer_ids - computed: true, optional: false, required: false
  public get remoteStateConsumerIds() {
    return this.getListAttribute('remote_state_consumer_ids');
  }

  // resource_count - computed: true, optional: false, required: false
  public get resourceCount() {
    return this.getNumberAttribute('resource_count');
  }

  // run_failures - computed: true, optional: false, required: false
  public get runFailures() {
    return this.getNumberAttribute('run_failures');
  }

  // runs_count - computed: true, optional: false, required: false
  public get runsCount() {
    return this.getNumberAttribute('runs_count');
  }

  // speculative_enabled - computed: true, optional: false, required: false
  public get speculativeEnabled() {
    return this.getBooleanAttribute('speculative_enabled') as any;
  }

  // ssh_key_id - computed: true, optional: false, required: false
  public get sshKeyId() {
    return this.getStringAttribute('ssh_key_id');
  }

  // structured_run_output_enabled - computed: true, optional: false, required: false
  public get structuredRunOutputEnabled() {
    return this.getBooleanAttribute('structured_run_output_enabled') as any;
  }

  // tag_names - computed: true, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // trigger_prefixes - computed: true, optional: false, required: false
  public get triggerPrefixes() {
    return this.getListAttribute('trigger_prefixes');
  }

  // vcs_repo - computed: true, optional: false, required: false
  public vcsRepo(index: string) {
    return new DataTfeWorkspaceVcsRepo(this, 'vcs_repo', index);
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform)(this._tagNames),
    };
  }
}
