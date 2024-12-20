// https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#id RegistryModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#initial_version RegistryModule#initial_version}
  */
  readonly initialVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}
  */
  readonly moduleProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#name RegistryModule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#namespace RegistryModule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#no_code RegistryModule#no_code}
  */
  readonly noCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#organization RegistryModule#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}
  */
  readonly registryName?: string;
  /**
  * test_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#test_config RegistryModule#test_config}
  */
  readonly testConfig?: RegistryModuleTestConfig[] | cdktf.IResolvable;
  /**
  * vcs_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#vcs_repo RegistryModule#vcs_repo}
  */
  readonly vcsRepo?: RegistryModuleVcsRepo;
}
export interface RegistryModuleTestConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}
  */
  readonly testsEnabled?: boolean | cdktf.IResolvable;
}

export function registryModuleTestConfigToTerraform(struct?: RegistryModuleTestConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tests_enabled: cdktf.booleanToTerraform(struct!.testsEnabled),
  }
}


export function registryModuleTestConfigToHclTerraform(struct?: RegistryModuleTestConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.testsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistryModuleTestConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RegistryModuleTestConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.testsEnabled = this._testsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistryModuleTestConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testsEnabled = value.testsEnabled;
    }
  }

  // tests_enabled - computed: false, optional: true, required: false
  private _testsEnabled?: boolean | cdktf.IResolvable; 
  public get testsEnabled() {
    return this.getBooleanAttribute('tests_enabled');
  }
  public set testsEnabled(value: boolean | cdktf.IResolvable) {
    this._testsEnabled = value;
  }
  public resetTestsEnabled() {
    this._testsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsEnabledInput() {
    return this._testsEnabled;
  }
}

export class RegistryModuleTestConfigList extends cdktf.ComplexList {
  public internalValue? : RegistryModuleTestConfig[] | cdktf.IResolvable

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
  public get(index: number): RegistryModuleTestConfigOutputReference {
    return new RegistryModuleTestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegistryModuleVcsRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#branch RegistryModule#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}
  */
  readonly displayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#identifier RegistryModule#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}
  */
  readonly oauthTokenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#tags RegistryModule#tags}
  */
  readonly tags?: boolean | cdktf.IResolvable;
}

export function registryModuleVcsRepoToTerraform(struct?: RegistryModuleVcsRepoOutputReference | RegistryModuleVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    display_identifier: cdktf.stringToTerraform(struct!.displayIdentifier),
    github_app_installation_id: cdktf.stringToTerraform(struct!.githubAppInstallationId),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    oauth_token_id: cdktf.stringToTerraform(struct!.oauthTokenId),
    tags: cdktf.booleanToTerraform(struct!.tags),
  }
}


export function registryModuleVcsRepoToHclTerraform(struct?: RegistryModuleVcsRepoOutputReference | RegistryModuleVcsRepo): any {
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
    display_identifier: {
      value: cdktf.stringToHclTerraform(struct!.displayIdentifier),
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
    tags: {
      value: cdktf.booleanToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistryModuleVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistryModuleVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._displayIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayIdentifier = this._displayIdentifier;
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
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistryModuleVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._displayIdentifier = undefined;
      this._githubAppInstallationId = undefined;
      this._identifier = undefined;
      this._oauthTokenId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._displayIdentifier = value.displayIdentifier;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._identifier = value.identifier;
      this._oauthTokenId = value.oauthTokenId;
      this._tags = value.tags;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: boolean | cdktf.IResolvable; 
  public get tags() {
    return this.getBooleanAttribute('tags');
  }
  public set tags(value: boolean | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module tfe_registry_module}
*/
export class RegistryModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_registry_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistryModule to import
  * @param importFromId The id of the existing RegistryModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistryModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_registry_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/registry_module tfe_registry_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryModuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RegistryModuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_module',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.62.0',
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
    this._initialVersion = config.initialVersion;
    this._moduleProvider = config.moduleProvider;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noCode = config.noCode;
    this._organization = config.organization;
    this._registryName = config.registryName;
    this._testConfig.internalValue = config.testConfig;
    this._vcsRepo.internalValue = config.vcsRepo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // initial_version - computed: false, optional: true, required: false
  private _initialVersion?: string; 
  public get initialVersion() {
    return this.getStringAttribute('initial_version');
  }
  public set initialVersion(value: string) {
    this._initialVersion = value;
  }
  public resetInitialVersion() {
    this._initialVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVersionInput() {
    return this._initialVersion;
  }

  // module_provider - computed: true, optional: true, required: false
  private _moduleProvider?: string; 
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }
  public set moduleProvider(value: string) {
    this._moduleProvider = value;
  }
  public resetModuleProvider() {
    this._moduleProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleProviderInput() {
    return this._moduleProvider;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // no_code - computed: true, optional: true, required: false
  private _noCode?: boolean | cdktf.IResolvable; 
  public get noCode() {
    return this.getBooleanAttribute('no_code');
  }
  public set noCode(value: boolean | cdktf.IResolvable) {
    this._noCode = value;
  }
  public resetNoCode() {
    this._noCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCodeInput() {
    return this._noCode;
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

  // publishing_mechanism - computed: true, optional: false, required: false
  public get publishingMechanism() {
    return this.getStringAttribute('publishing_mechanism');
  }

  // registry_name - computed: true, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // test_config - computed: false, optional: true, required: false
  private _testConfig = new RegistryModuleTestConfigList(this, "test_config", false);
  public get testConfig() {
    return this._testConfig;
  }
  public putTestConfig(value: RegistryModuleTestConfig[] | cdktf.IResolvable) {
    this._testConfig.internalValue = value;
  }
  public resetTestConfig() {
    this._testConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigInput() {
    return this._testConfig.internalValue;
  }

  // vcs_repo - computed: false, optional: true, required: false
  private _vcsRepo = new RegistryModuleVcsRepoOutputReference(this, "vcs_repo");
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: RegistryModuleVcsRepo) {
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
      id: cdktf.stringToTerraform(this._id),
      initial_version: cdktf.stringToTerraform(this._initialVersion),
      module_provider: cdktf.stringToTerraform(this._moduleProvider),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_code: cdktf.booleanToTerraform(this._noCode),
      organization: cdktf.stringToTerraform(this._organization),
      registry_name: cdktf.stringToTerraform(this._registryName),
      test_config: cdktf.listMapper(registryModuleTestConfigToTerraform, true)(this._testConfig.internalValue),
      vcs_repo: registryModuleVcsRepoToTerraform(this._vcsRepo.internalValue),
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
      initial_version: {
        value: cdktf.stringToHclTerraform(this._initialVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_provider: {
        value: cdktf.stringToHclTerraform(this._moduleProvider),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_code: {
        value: cdktf.booleanToHclTerraform(this._noCode),
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
      registry_name: {
        value: cdktf.stringToHclTerraform(this._registryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_config: {
        value: cdktf.listMapperHcl(registryModuleTestConfigToHclTerraform, true)(this._testConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegistryModuleTestConfigList",
      },
      vcs_repo: {
        value: registryModuleVcsRepoToHclTerraform(this._vcsRepo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegistryModuleVcsRepoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
