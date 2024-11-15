/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#description Stack#description}
  */
  readonly description?: string;
  /**
  * Name of the Stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#name Stack#name}
  */
  readonly name: string;
  /**
  * ID of the project that the Stack belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#project_id Stack#project_id}
  */
  readonly projectId: string;
  /**
  * vcs_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#vcs_repo Stack#vcs_repo}
  */
  readonly vcsRepo?: StackVcsRepo;
}
export interface StackVcsRepo {
  /**
  * The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#branch Stack#branch}
  */
  readonly branch?: string;
  /**
  * The installation ID of the GitHub App. This conflicts with `oauth_token_id` and can only be used if `oauth_token_id` is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#github_app_installation_id Stack#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * Identifier of the VCS repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#identifier Stack#identifier}
  */
  readonly identifier: string;
  /**
  * The VCS Connection to use. This ID can be obtained from a `tfe_oauth_client` resource. This conflicts with `github_app_installation_id` and can only be used if `github_app_installation_id` is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#oauth_token_id Stack#oauth_token_id}
  */
  readonly oauthTokenId?: string;
}

export function stackVcsRepoToTerraform(struct?: StackVcsRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    github_app_installation_id: cdktf.stringToTerraform(struct!.githubAppInstallationId),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    oauth_token_id: cdktf.stringToTerraform(struct!.oauthTokenId),
  }
}


export function stackVcsRepoToHclTerraform(struct?: StackVcsRepo | cdktf.IResolvable): any {
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
    oauth_token_id: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackVcsRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._oauthTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenId = this._oauthTokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackVcsRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._githubAppInstallationId = undefined;
      this._identifier = undefined;
      this._oauthTokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._identifier = value.identifier;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack tfe_stack}
*/
export class Stack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stack to import
  * @param importFromId The id of the existing Stack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/stack tfe_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackConfig
  */
  public constructor(scope: Construct, id: string, config: StackConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_stack',
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
    this._description = config.description;
    this._name = config.name;
    this._projectId = config.projectId;
    this._vcsRepo.internalValue = config.vcsRepo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_names - computed: true, optional: false, required: false
  public get deploymentNames() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_names'));
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

  // id - computed: true, optional: false, required: false
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vcs_repo - computed: false, optional: true, required: false
  private _vcsRepo = new StackVcsRepoOutputReference(this, "vcs_repo");
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: StackVcsRepo) {
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
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      vcs_repo: stackVcsRepoToTerraform(this._vcsRepo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_repo: {
        value: stackVcsRepoToHclTerraform(this._vcsRepo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackVcsRepo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
