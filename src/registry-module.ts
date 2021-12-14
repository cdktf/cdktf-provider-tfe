// https://www.terraform.io/docs/providers/tfe/r/registry_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * vcs_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html#vcs_repo RegistryModule#vcs_repo}
  */
  readonly vcsRepo: RegistryModuleVcsRepo;
}
export interface RegistryModuleVcsRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html#display_identifier RegistryModule#display_identifier}
  */
  readonly displayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html#identifier RegistryModule#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html#oauth_token_id RegistryModule#oauth_token_id}
  */
  readonly oauthTokenId: string;
}

export function registryModuleVcsRepoToTerraform(struct?: RegistryModuleVcsRepoOutputReference | RegistryModuleVcsRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_identifier: cdktf.stringToTerraform(struct!.displayIdentifier),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    oauth_token_id: cdktf.stringToTerraform(struct!.oauthTokenId),
  }
}

export class RegistryModuleVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RegistryModuleVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayIdentifier = this._displayIdentifier;
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

  public set internalValue(value: RegistryModuleVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayIdentifier = undefined;
      this._identifier = undefined;
      this._oauthTokenId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayIdentifier = value.displayIdentifier;
      this._identifier = value.identifier;
      this._oauthTokenId = value.oauthTokenId;
    }
  }

  // display_identifier - computed: false, optional: false, required: true
  private _displayIdentifier?: string; 
  public get displayIdentifier() {
    return this.getStringAttribute('display_identifier');
  }
  public set displayIdentifier(value: string) {
    this._displayIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayIdentifierInput() {
    return this._displayIdentifier;
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

  // oauth_token_id - computed: false, optional: false, required: true
  private _oauthTokenId?: string; 
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }
  public set oauthTokenId(value: string) {
    this._oauthTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenIdInput() {
    return this._oauthTokenId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html tfe_registry_module}
*/
export class RegistryModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_registry_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/registry_module.html tfe_registry_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryModuleConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_module',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vcsRepo.internalValue = config.vcsRepo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_provider - computed: true, optional: false, required: false
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // vcs_repo - computed: false, optional: false, required: true
  private _vcsRepo = new RegistryModuleVcsRepoOutputReference(this as any, "vcs_repo", true);
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: RegistryModuleVcsRepo) {
    this._vcsRepo.internalValue = value;
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
      vcs_repo: registryModuleVcsRepoToTerraform(this._vcsRepo.internalValue),
    };
  }
}
