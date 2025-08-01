/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace#id DataTfeWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace#name DataTfeWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace#organization DataTfeWorkspace#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}
  */
  readonly tagNames?: string[];
}
export interface DataTfeWorkspaceVcsRepo {
}

export function dataTfeWorkspaceVcsRepoToTerraform(struct?: DataTfeWorkspaceVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTfeWorkspaceVcsRepoToHclTerraform(struct?: DataTfeWorkspaceVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTfeWorkspaceVcsRepoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTfeWorkspaceVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeWorkspaceVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // github_app_installation_id - computed: true, optional: false, required: false
  public get githubAppInstallationId() {
    return this.getStringAttribute('github_app_installation_id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // ingress_submodules - computed: true, optional: false, required: false
  public get ingressSubmodules() {
    return this.getBooleanAttribute('ingress_submodules');
  }

  // oauth_token_id - computed: true, optional: false, required: false
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }

  // tags_regex - computed: true, optional: false, required: false
  public get tagsRegex() {
    return this.getStringAttribute('tags_regex');
  }
}

export class DataTfeWorkspaceVcsRepoList extends cdktf.ComplexList {

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
  public get(index: number): DataTfeWorkspaceVcsRepoOutputReference {
    return new DataTfeWorkspaceVcsRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace tfe_workspace}
*/
export class DataTfeWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeWorkspace to import
  * @param importFromId The id of the existing DataTfeWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/workspace tfe_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.68.2',
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
    this._id = config.id;
    this._name = config.name;
    this._organization = config.organization;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_destroy_plan - computed: true, optional: false, required: false
  public get allowDestroyPlan() {
    return this.getBooleanAttribute('allow_destroy_plan');
  }

  // assessments_enabled - computed: true, optional: false, required: false
  public get assessmentsEnabled() {
    return this.getBooleanAttribute('assessments_enabled');
  }

  // auto_apply - computed: true, optional: false, required: false
  public get autoApply() {
    return this.getBooleanAttribute('auto_apply');
  }

  // auto_apply_run_trigger - computed: true, optional: false, required: false
  public get autoApplyRunTrigger() {
    return this.getBooleanAttribute('auto_apply_run_trigger');
  }

  // auto_destroy_activity_duration - computed: true, optional: false, required: false
  public get autoDestroyActivityDuration() {
    return this.getStringAttribute('auto_destroy_activity_duration');
  }

  // auto_destroy_at - computed: true, optional: false, required: false
  public get autoDestroyAt() {
    return this.getStringAttribute('auto_destroy_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_tags - computed: true, optional: false, required: false
  private _effectiveTags = new cdktf.StringMap(this, "effective_tags");
  public get effectiveTags() {
    return this._effectiveTags;
  }

  // execution_mode - computed: true, optional: false, required: false
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }

  // file_triggers_enabled - computed: true, optional: false, required: false
  public get fileTriggersEnabled() {
    return this.getBooleanAttribute('file_triggers_enabled');
  }

  // global_remote_state - computed: true, optional: false, required: false
  public get globalRemoteState() {
    return this.getBooleanAttribute('global_remote_state');
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

  // inherits_project_auto_destroy - computed: true, optional: false, required: false
  public get inheritsProjectAutoDestroy() {
    return this.getBooleanAttribute('inherits_project_auto_destroy');
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
    return this.getBooleanAttribute('operations');
  }

  // organization - computed: false, optional: true, required: false
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

  // policy_check_failures - computed: true, optional: false, required: false
  public get policyCheckFailures() {
    return this.getNumberAttribute('policy_check_failures');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // queue_all_runs - computed: true, optional: false, required: false
  public get queueAllRuns() {
    return this.getBooleanAttribute('queue_all_runs');
  }

  // remote_state_consumer_ids - computed: true, optional: false, required: false
  public get remoteStateConsumerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_state_consumer_ids'));
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

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_url - computed: true, optional: false, required: false
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }

  // speculative_enabled - computed: true, optional: false, required: false
  public get speculativeEnabled() {
    return this.getBooleanAttribute('speculative_enabled');
  }

  // ssh_key_id - computed: true, optional: false, required: false
  public get sshKeyId() {
    return this.getStringAttribute('ssh_key_id');
  }

  // structured_run_output_enabled - computed: true, optional: false, required: false
  public get structuredRunOutputEnabled() {
    return this.getBooleanAttribute('structured_run_output_enabled');
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

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // trigger_patterns - computed: true, optional: false, required: false
  public get triggerPatterns() {
    return this.getListAttribute('trigger_patterns');
  }

  // trigger_prefixes - computed: true, optional: false, required: false
  public get triggerPrefixes() {
    return this.getListAttribute('trigger_prefixes');
  }

  // vcs_repo - computed: true, optional: false, required: false
  private _vcsRepo = new DataTfeWorkspaceVcsRepoList(this, "vcs_repo", false);
  public get vcsRepo() {
    return this._vcsRepo;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
