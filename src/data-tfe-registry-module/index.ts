// https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeRegistryModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the module provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}
  */
  readonly moduleProvider: string;
  /**
  * Name of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#name DataTfeRegistryModule#name}
  */
  readonly name: string;
  /**
  * The namespace of the no-code module. Uses organization name if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}
  */
  readonly organization: string;
  /**
  * Name of the registry. Valid options: "public", "private". Defaults to "private".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}
  */
  readonly registryName?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}
  */
  readonly permissions?: DataTfeRegistryModulePermissions[] | cdktf.IResolvable;
  /**
  * test_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}
  */
  readonly testConfig?: DataTfeRegistryModuleTestConfig[] | cdktf.IResolvable;
  /**
  * vcs_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}
  */
  readonly vcsRepo?: DataTfeRegistryModuleVcsRepo[] | cdktf.IResolvable;
  /**
  * version_statuses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}
  */
  readonly versionStatuses?: DataTfeRegistryModuleVersionStatuses[] | cdktf.IResolvable;
}
export interface DataTfeRegistryModulePermissions {
}

export function dataTfeRegistryModulePermissionsToTerraform(struct?: DataTfeRegistryModulePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTfeRegistryModulePermissionsToHclTerraform(struct?: DataTfeRegistryModulePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTfeRegistryModulePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTfeRegistryModulePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeRegistryModulePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // can_delete - computed: true, optional: false, required: false
  public get canDelete() {
    return this.getBooleanAttribute('can_delete');
  }

  // can_resync - computed: true, optional: false, required: false
  public get canResync() {
    return this.getBooleanAttribute('can_resync');
  }

  // can_retry - computed: true, optional: false, required: false
  public get canRetry() {
    return this.getBooleanAttribute('can_retry');
  }
}

export class DataTfeRegistryModulePermissionsList extends cdktf.ComplexList {
  public internalValue? : DataTfeRegistryModulePermissions[] | cdktf.IResolvable

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
  public get(index: number): DataTfeRegistryModulePermissionsOutputReference {
    return new DataTfeRegistryModulePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTfeRegistryModuleTestConfig {
}

export function dataTfeRegistryModuleTestConfigToTerraform(struct?: DataTfeRegistryModuleTestConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTfeRegistryModuleTestConfigToHclTerraform(struct?: DataTfeRegistryModuleTestConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTfeRegistryModuleTestConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTfeRegistryModuleTestConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeRegistryModuleTestConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // tests_enabled - computed: true, optional: false, required: false
  public get testsEnabled() {
    return this.getBooleanAttribute('tests_enabled');
  }
}

export class DataTfeRegistryModuleTestConfigList extends cdktf.ComplexList {
  public internalValue? : DataTfeRegistryModuleTestConfig[] | cdktf.IResolvable

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
  public get(index: number): DataTfeRegistryModuleTestConfigOutputReference {
    return new DataTfeRegistryModuleTestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTfeRegistryModuleVcsRepo {
}

export function dataTfeRegistryModuleVcsRepoToTerraform(struct?: DataTfeRegistryModuleVcsRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTfeRegistryModuleVcsRepoToHclTerraform(struct?: DataTfeRegistryModuleVcsRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTfeRegistryModuleVcsRepoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTfeRegistryModuleVcsRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeRegistryModuleVcsRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // display_identifier - computed: true, optional: false, required: false
  public get displayIdentifier() {
    return this.getStringAttribute('display_identifier');
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

  // repository_http_url - computed: true, optional: false, required: false
  public get repositoryHttpUrl() {
    return this.getStringAttribute('repository_http_url');
  }

  // service_provider - computed: true, optional: false, required: false
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getBooleanAttribute('tags');
  }

  // tags_regex - computed: true, optional: false, required: false
  public get tagsRegex() {
    return this.getStringAttribute('tags_regex');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}

export class DataTfeRegistryModuleVcsRepoList extends cdktf.ComplexList {
  public internalValue? : DataTfeRegistryModuleVcsRepo[] | cdktf.IResolvable

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
  public get(index: number): DataTfeRegistryModuleVcsRepoOutputReference {
    return new DataTfeRegistryModuleVcsRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTfeRegistryModuleVersionStatuses {
}

export function dataTfeRegistryModuleVersionStatusesToTerraform(struct?: DataTfeRegistryModuleVersionStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTfeRegistryModuleVersionStatusesToHclTerraform(struct?: DataTfeRegistryModuleVersionStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTfeRegistryModuleVersionStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTfeRegistryModuleVersionStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeRegistryModuleVersionStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTfeRegistryModuleVersionStatusesList extends cdktf.ComplexList {
  public internalValue? : DataTfeRegistryModuleVersionStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataTfeRegistryModuleVersionStatusesOutputReference {
    return new DataTfeRegistryModuleVersionStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module tfe_registry_module}
*/
export class DataTfeRegistryModule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_registry_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeRegistryModule to import
  * @param importFromId The id of the existing DataTfeRegistryModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeRegistryModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_registry_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_module tfe_registry_module} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeRegistryModuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeRegistryModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_module',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.66.0',
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
    this._moduleProvider = config.moduleProvider;
    this._name = config.name;
    this._namespace = config.namespace;
    this._organization = config.organization;
    this._registryName = config.registryName;
    this._permissions.internalValue = config.permissions;
    this._testConfig.internalValue = config.testConfig;
    this._vcsRepo.internalValue = config.vcsRepo;
    this._versionStatuses.internalValue = config.versionStatuses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_provider - computed: false, optional: false, required: true
  private _moduleProvider?: string; 
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }
  public set moduleProvider(value: string) {
    this._moduleProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleProviderInput() {
    return this._moduleProvider;
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

  // no_code - computed: true, optional: false, required: false
  public get noCode() {
    return this.getBooleanAttribute('no_code');
  }

  // no_code_module_id - computed: true, optional: false, required: false
  public get noCodeModuleId() {
    return this.getStringAttribute('no_code_module_id');
  }

  // no_code_module_source - computed: true, optional: false, required: false
  public get noCodeModuleSource() {
    return this.getStringAttribute('no_code_module_source');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataTfeRegistryModulePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataTfeRegistryModulePermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // test_config - computed: false, optional: true, required: false
  private _testConfig = new DataTfeRegistryModuleTestConfigList(this, "test_config", false);
  public get testConfig() {
    return this._testConfig;
  }
  public putTestConfig(value: DataTfeRegistryModuleTestConfig[] | cdktf.IResolvable) {
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
  private _vcsRepo = new DataTfeRegistryModuleVcsRepoList(this, "vcs_repo", false);
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: DataTfeRegistryModuleVcsRepo[] | cdktf.IResolvable) {
    this._vcsRepo.internalValue = value;
  }
  public resetVcsRepo() {
    this._vcsRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsRepoInput() {
    return this._vcsRepo.internalValue;
  }

  // version_statuses - computed: false, optional: true, required: false
  private _versionStatuses = new DataTfeRegistryModuleVersionStatusesList(this, "version_statuses", false);
  public get versionStatuses() {
    return this._versionStatuses;
  }
  public putVersionStatuses(value: DataTfeRegistryModuleVersionStatuses[] | cdktf.IResolvable) {
    this._versionStatuses.internalValue = value;
  }
  public resetVersionStatuses() {
    this._versionStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStatusesInput() {
    return this._versionStatuses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      module_provider: cdktf.stringToTerraform(this._moduleProvider),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      organization: cdktf.stringToTerraform(this._organization),
      registry_name: cdktf.stringToTerraform(this._registryName),
      permissions: cdktf.listMapper(dataTfeRegistryModulePermissionsToTerraform, true)(this._permissions.internalValue),
      test_config: cdktf.listMapper(dataTfeRegistryModuleTestConfigToTerraform, true)(this._testConfig.internalValue),
      vcs_repo: cdktf.listMapper(dataTfeRegistryModuleVcsRepoToTerraform, true)(this._vcsRepo.internalValue),
      version_statuses: cdktf.listMapper(dataTfeRegistryModuleVersionStatusesToTerraform, true)(this._versionStatuses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      permissions: {
        value: cdktf.listMapperHcl(dataTfeRegistryModulePermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfeRegistryModulePermissionsList",
      },
      test_config: {
        value: cdktf.listMapperHcl(dataTfeRegistryModuleTestConfigToHclTerraform, true)(this._testConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfeRegistryModuleTestConfigList",
      },
      vcs_repo: {
        value: cdktf.listMapperHcl(dataTfeRegistryModuleVcsRepoToHclTerraform, true)(this._vcsRepo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfeRegistryModuleVcsRepoList",
      },
      version_statuses: {
        value: cdktf.listMapperHcl(dataTfeRegistryModuleVersionStatusesToHclTerraform, true)(this._versionStatuses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfeRegistryModuleVersionStatusesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
