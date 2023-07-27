/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#description PolicySet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#global PolicySet#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#id PolicySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#kind PolicySet#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#organization PolicySet#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#overridable PolicySet#overridable}
  */
  readonly overridable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#policies_path PolicySet#policies_path}
  */
  readonly policiesPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#policy_ids PolicySet#policy_ids}
  */
  readonly policyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#slug PolicySet#slug}
  */
  readonly slug?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}
  */
  readonly workspaceIds?: string[];
  /**
  * vcs_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}
  */
  readonly vcsRepo?: PolicySetVcsRepo;
}
export interface PolicySetVcsRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#branch PolicySet#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#identifier PolicySet#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}
  */
  readonly ingressSubmodules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}
  */
  readonly oauthTokenId?: string;
}

export function policySetVcsRepoToTerraform(struct?: PolicySetVcsRepoOutputReference | PolicySetVcsRepo): any {
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
  }
}

export class PolicySetVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySetVcsRepo | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._githubAppInstallationId = undefined;
      this._identifier = undefined;
      this._ingressSubmodules = undefined;
      this._oauthTokenId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._identifier = value.identifier;
      this._ingressSubmodules = value.ingressSubmodules;
      this._oauthTokenId = value.oauthTokenId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set tfe_policy_set}
*/
export class PolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_policy_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy_set tfe_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.47.0',
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
    this._description = config.description;
    this._global = config.global;
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._organization = config.organization;
    this._overridable = config.overridable;
    this._policiesPath = config.policiesPath;
    this._policyIds = config.policyIds;
    this._slug = config.slug;
    this._workspaceIds = config.workspaceIds;
    this._vcsRepo.internalValue = config.vcsRepo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // overridable - computed: false, optional: true, required: false
  private _overridable?: boolean | cdktf.IResolvable; 
  public get overridable() {
    return this.getBooleanAttribute('overridable');
  }
  public set overridable(value: boolean | cdktf.IResolvable) {
    this._overridable = value;
  }
  public resetOverridable() {
    this._overridable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridableInput() {
    return this._overridable;
  }

  // policies_path - computed: false, optional: true, required: false
  private _policiesPath?: string; 
  public get policiesPath() {
    return this.getStringAttribute('policies_path');
  }
  public set policiesPath(value: string) {
    this._policiesPath = value;
  }
  public resetPoliciesPath() {
    this._policiesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesPathInput() {
    return this._policiesPath;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: string[]; 
  public get policyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ids'));
  }
  public set policyIds(value: string[]) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: { [key: string]: string }; 
  public get slug() {
    return this.getStringMapAttribute('slug');
  }
  public set slug(value: { [key: string]: string }) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // workspace_ids - computed: true, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // vcs_repo - computed: false, optional: true, required: false
  private _vcsRepo = new PolicySetVcsRepoOutputReference(this, "vcs_repo");
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: PolicySetVcsRepo) {
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
      description: cdktf.stringToTerraform(this._description),
      global: cdktf.booleanToTerraform(this._global),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      overridable: cdktf.booleanToTerraform(this._overridable),
      policies_path: cdktf.stringToTerraform(this._policiesPath),
      policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyIds),
      slug: cdktf.hashMapper(cdktf.stringToTerraform)(this._slug),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
      vcs_repo: policySetVcsRepoToTerraform(this._vcsRepo.internalValue),
    };
  }
}
