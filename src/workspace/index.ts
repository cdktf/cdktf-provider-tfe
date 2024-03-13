// https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}
  */
  readonly agentPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}
  */
  readonly allowDestroyPlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}
  */
  readonly assessmentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#auto_apply Workspace#auto_apply}
  */
  readonly autoApply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}
  */
  readonly autoApplyRunTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#execution_mode Workspace#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}
  */
  readonly fileTriggersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#force_delete Workspace#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}
  */
  readonly globalRemoteState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#id Workspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#operations Workspace#operations}
  */
  readonly operations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#organization Workspace#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#project_id Workspace#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}
  */
  readonly queueAllRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}
  */
  readonly remoteStateConsumerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#source_name Workspace#source_name}
  */
  readonly sourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#source_url Workspace#source_url}
  */
  readonly sourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}
  */
  readonly speculativeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}
  */
  readonly sshKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}
  */
  readonly structuredRunOutputEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#tag_names Workspace#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#terraform_version Workspace#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}
  */
  readonly triggerPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}
  */
  readonly triggerPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#working_directory Workspace#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * vcs_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#vcs_repo Workspace#vcs_repo}
  */
  readonly vcsRepo?: WorkspaceVcsRepo;
}
export interface WorkspaceVcsRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#branch Workspace#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#identifier Workspace#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}
  */
  readonly ingressSubmodules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}
  */
  readonly oauthTokenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#tags_regex Workspace#tags_regex}
  */
  readonly tagsRegex?: string;
}

export function workspaceVcsRepoToTerraform(struct?: WorkspaceVcsRepoOutputReference | WorkspaceVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    github_app_installation_id: cdktf.stringToTerraform(struct!.githubAppInstallationId),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    ingress_submodules: cdktf.booleanToTerraform(struct!.ingressSubmodules),
    oauth_token_id: cdktf.stringToTerraform(struct!.oauthTokenId),
    tags_regex: cdktf.stringToTerraform(struct!.tagsRegex),
  }
}


export function workspaceVcsRepoToHclTerraform(struct?: WorkspaceVcsRepoOutputReference | WorkspaceVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.githubAppInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.ingressSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_token_id: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_regex: {
      value: cdktf.stringToHclTerraform(struct!.tagsRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspaceVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._githubAppInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppInstallationId = this._githubAppInstallationId;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._ingressSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSubmodules = this._ingressSubmodules;
    }
    if (this._oauthTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenId = this._oauthTokenId;
    }
    if (this._tagsRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsRegex = this._tagsRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._githubAppInstallationId = undefined;
      this._identifier = undefined;
      this._ingressSubmodules = undefined;
      this._oauthTokenId = undefined;
      this._tagsRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._identifier = value.identifier;
      this._ingressSubmodules = value.ingressSubmodules;
      this._oauthTokenId = value.oauthTokenId;
      this._tagsRegex = value.tagsRegex;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // github_app_installation_id - computed: false, optional: true, required: false
  private _githubAppInstallationId?: string; 
  public get githubAppInstallationId() {
    return this.getStringAttribute('github_app_installation_id');
  }
  public set githubAppInstallationId(value: string) {
    this._githubAppInstallationId = value;
  }
  public resetGithubAppInstallationId() {
    this._githubAppInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInstallationIdInput() {
    return this._githubAppInstallationId;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // ingress_submodules - computed: false, optional: true, required: false
  private _ingressSubmodules?: boolean | cdktf.IResolvable; 
  public get ingressSubmodules() {
    return this.getBooleanAttribute('ingress_submodules');
  }
  public set ingressSubmodules(value: boolean | cdktf.IResolvable) {
    this._ingressSubmodules = value;
  }
  public resetIngressSubmodules() {
    this._ingressSubmodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSubmodulesInput() {
    return this._ingressSubmodules;
  }

  // oauth_token_id - computed: false, optional: true, required: false
  private _oauthTokenId?: string; 
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }
  public set oauthTokenId(value: string) {
    this._oauthTokenId = value;
  }
  public resetOauthTokenId() {
    this._oauthTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenIdInput() {
    return this._oauthTokenId;
  }

  // tags_regex - computed: false, optional: true, required: false
  private _tagsRegex?: string; 
  public get tagsRegex() {
    return this.getStringAttribute('tags_regex');
  }
  public set tagsRegex(value: string) {
    this._tagsRegex = value;
  }
  public resetTagsRegex() {
    this._tagsRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsRegexInput() {
    return this._tagsRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace tfe_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace tfe_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.52.0',
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
    this._allowDestroyPlan = config.allowDestroyPlan;
    this._assessmentsEnabled = config.assessmentsEnabled;
    this._autoApply = config.autoApply;
    this._autoApplyRunTrigger = config.autoApplyRunTrigger;
    this._description = config.description;
    this._executionMode = config.executionMode;
    this._fileTriggersEnabled = config.fileTriggersEnabled;
    this._forceDelete = config.forceDelete;
    this._globalRemoteState = config.globalRemoteState;
    this._id = config.id;
    this._name = config.name;
    this._operations = config.operations;
    this._organization = config.organization;
    this._projectId = config.projectId;
    this._queueAllRuns = config.queueAllRuns;
    this._remoteStateConsumerIds = config.remoteStateConsumerIds;
    this._sourceName = config.sourceName;
    this._sourceUrl = config.sourceUrl;
    this._speculativeEnabled = config.speculativeEnabled;
    this._sshKeyId = config.sshKeyId;
    this._structuredRunOutputEnabled = config.structuredRunOutputEnabled;
    this._tagNames = config.tagNames;
    this._terraformVersion = config.terraformVersion;
    this._triggerPatterns = config.triggerPatterns;
    this._triggerPrefixes = config.triggerPrefixes;
    this._workingDirectory = config.workingDirectory;
    this._vcsRepo.internalValue = config.vcsRepo;
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

  // allow_destroy_plan - computed: false, optional: true, required: false
  private _allowDestroyPlan?: boolean | cdktf.IResolvable; 
  public get allowDestroyPlan() {
    return this.getBooleanAttribute('allow_destroy_plan');
  }
  public set allowDestroyPlan(value: boolean | cdktf.IResolvable) {
    this._allowDestroyPlan = value;
  }
  public resetAllowDestroyPlan() {
    this._allowDestroyPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDestroyPlanInput() {
    return this._allowDestroyPlan;
  }

  // assessments_enabled - computed: false, optional: true, required: false
  private _assessmentsEnabled?: boolean | cdktf.IResolvable; 
  public get assessmentsEnabled() {
    return this.getBooleanAttribute('assessments_enabled');
  }
  public set assessmentsEnabled(value: boolean | cdktf.IResolvable) {
    this._assessmentsEnabled = value;
  }
  public resetAssessmentsEnabled() {
    this._assessmentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentsEnabledInput() {
    return this._assessmentsEnabled;
  }

  // auto_apply - computed: false, optional: true, required: false
  private _autoApply?: boolean | cdktf.IResolvable; 
  public get autoApply() {
    return this.getBooleanAttribute('auto_apply');
  }
  public set autoApply(value: boolean | cdktf.IResolvable) {
    this._autoApply = value;
  }
  public resetAutoApply() {
    this._autoApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyInput() {
    return this._autoApply;
  }

  // auto_apply_run_trigger - computed: false, optional: true, required: false
  private _autoApplyRunTrigger?: boolean | cdktf.IResolvable; 
  public get autoApplyRunTrigger() {
    return this.getBooleanAttribute('auto_apply_run_trigger');
  }
  public set autoApplyRunTrigger(value: boolean | cdktf.IResolvable) {
    this._autoApplyRunTrigger = value;
  }
  public resetAutoApplyRunTrigger() {
    this._autoApplyRunTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyRunTriggerInput() {
    return this._autoApplyRunTrigger;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // file_triggers_enabled - computed: false, optional: true, required: false
  private _fileTriggersEnabled?: boolean | cdktf.IResolvable; 
  public get fileTriggersEnabled() {
    return this.getBooleanAttribute('file_triggers_enabled');
  }
  public set fileTriggersEnabled(value: boolean | cdktf.IResolvable) {
    this._fileTriggersEnabled = value;
  }
  public resetFileTriggersEnabled() {
    this._fileTriggersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTriggersEnabledInput() {
    return this._fileTriggersEnabled;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // operations - computed: true, optional: true, required: false
  private _operations?: boolean | cdktf.IResolvable; 
  public get operations() {
    return this.getBooleanAttribute('operations');
  }
  public set operations(value: boolean | cdktf.IResolvable) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // queue_all_runs - computed: false, optional: true, required: false
  private _queueAllRuns?: boolean | cdktf.IResolvable; 
  public get queueAllRuns() {
    return this.getBooleanAttribute('queue_all_runs');
  }
  public set queueAllRuns(value: boolean | cdktf.IResolvable) {
    this._queueAllRuns = value;
  }
  public resetQueueAllRuns() {
    this._queueAllRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAllRunsInput() {
    return this._queueAllRuns;
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

  // resource_count - computed: true, optional: false, required: false
  public get resourceCount() {
    return this.getNumberAttribute('resource_count');
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // speculative_enabled - computed: false, optional: true, required: false
  private _speculativeEnabled?: boolean | cdktf.IResolvable; 
  public get speculativeEnabled() {
    return this.getBooleanAttribute('speculative_enabled');
  }
  public set speculativeEnabled(value: boolean | cdktf.IResolvable) {
    this._speculativeEnabled = value;
  }
  public resetSpeculativeEnabled() {
    this._speculativeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speculativeEnabledInput() {
    return this._speculativeEnabled;
  }

  // ssh_key_id - computed: false, optional: true, required: false
  private _sshKeyId?: string; 
  public get sshKeyId() {
    return this.getStringAttribute('ssh_key_id');
  }
  public set sshKeyId(value: string) {
    this._sshKeyId = value;
  }
  public resetSshKeyId() {
    this._sshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdInput() {
    return this._sshKeyId;
  }

  // structured_run_output_enabled - computed: false, optional: true, required: false
  private _structuredRunOutputEnabled?: boolean | cdktf.IResolvable; 
  public get structuredRunOutputEnabled() {
    return this.getBooleanAttribute('structured_run_output_enabled');
  }
  public set structuredRunOutputEnabled(value: boolean | cdktf.IResolvable) {
    this._structuredRunOutputEnabled = value;
  }
  public resetStructuredRunOutputEnabled() {
    this._structuredRunOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredRunOutputEnabledInput() {
    return this._structuredRunOutputEnabled;
  }

  // tag_names - computed: true, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_names'));
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

  // terraform_version - computed: true, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // trigger_patterns - computed: false, optional: true, required: false
  private _triggerPatterns?: string[]; 
  public get triggerPatterns() {
    return this.getListAttribute('trigger_patterns');
  }
  public set triggerPatterns(value: string[]) {
    this._triggerPatterns = value;
  }
  public resetTriggerPatterns() {
    this._triggerPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPatternsInput() {
    return this._triggerPatterns;
  }

  // trigger_prefixes - computed: false, optional: true, required: false
  private _triggerPrefixes?: string[]; 
  public get triggerPrefixes() {
    return this.getListAttribute('trigger_prefixes');
  }
  public set triggerPrefixes(value: string[]) {
    this._triggerPrefixes = value;
  }
  public resetTriggerPrefixes() {
    this._triggerPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPrefixesInput() {
    return this._triggerPrefixes;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // vcs_repo - computed: false, optional: true, required: false
  private _vcsRepo = new WorkspaceVcsRepoOutputReference(this, "vcs_repo");
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: WorkspaceVcsRepo) {
    this._vcsRepo.internalValue = value;
  }
  public resetVcsRepo() {
    this._vcsRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsRepoInput() {
    return this._vcsRepo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool_id: cdktf.stringToTerraform(this._agentPoolId),
      allow_destroy_plan: cdktf.booleanToTerraform(this._allowDestroyPlan),
      assessments_enabled: cdktf.booleanToTerraform(this._assessmentsEnabled),
      auto_apply: cdktf.booleanToTerraform(this._autoApply),
      auto_apply_run_trigger: cdktf.booleanToTerraform(this._autoApplyRunTrigger),
      description: cdktf.stringToTerraform(this._description),
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      file_triggers_enabled: cdktf.booleanToTerraform(this._fileTriggersEnabled),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      global_remote_state: cdktf.booleanToTerraform(this._globalRemoteState),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operations: cdktf.booleanToTerraform(this._operations),
      organization: cdktf.stringToTerraform(this._organization),
      project_id: cdktf.stringToTerraform(this._projectId),
      queue_all_runs: cdktf.booleanToTerraform(this._queueAllRuns),
      remote_state_consumer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteStateConsumerIds),
      source_name: cdktf.stringToTerraform(this._sourceName),
      source_url: cdktf.stringToTerraform(this._sourceUrl),
      speculative_enabled: cdktf.booleanToTerraform(this._speculativeEnabled),
      ssh_key_id: cdktf.stringToTerraform(this._sshKeyId),
      structured_run_output_enabled: cdktf.booleanToTerraform(this._structuredRunOutputEnabled),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      terraform_version: cdktf.stringToTerraform(this._terraformVersion),
      trigger_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerPatterns),
      trigger_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerPrefixes),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      vcs_repo: workspaceVcsRepoToTerraform(this._vcsRepo.internalValue),
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
      allow_destroy_plan: {
        value: cdktf.booleanToHclTerraform(this._allowDestroyPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assessments_enabled: {
        value: cdktf.booleanToHclTerraform(this._assessmentsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_apply: {
        value: cdktf.booleanToHclTerraform(this._autoApply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_apply_run_trigger: {
        value: cdktf.booleanToHclTerraform(this._autoApplyRunTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      file_triggers_enabled: {
        value: cdktf.booleanToHclTerraform(this._fileTriggersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_remote_state: {
        value: cdktf.booleanToHclTerraform(this._globalRemoteState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations: {
        value: cdktf.booleanToHclTerraform(this._operations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
      queue_all_runs: {
        value: cdktf.booleanToHclTerraform(this._queueAllRuns),
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
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_url: {
        value: cdktf.stringToHclTerraform(this._sourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speculative_enabled: {
        value: cdktf.booleanToHclTerraform(this._speculativeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_key_id: {
        value: cdktf.stringToHclTerraform(this._sshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structured_run_output_enabled: {
        value: cdktf.booleanToHclTerraform(this._structuredRunOutputEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      terraform_version: {
        value: cdktf.stringToHclTerraform(this._terraformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trigger_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_repo: {
        value: workspaceVcsRepoToHclTerraform(this._vcsRepo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceVcsRepoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
