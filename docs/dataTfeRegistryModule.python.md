# `dataTfeRegistryModule` Submodule <a name="`dataTfeRegistryModule` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryModule <a name="DataTfeRegistryModule" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  module_provider: str,
  name: str,
  organization: str,
  namespace: str = None,
  permissions: IResolvable | typing.List[DataTfeRegistryModulePermissions] = None,
  registry_name: str = None,
  test_config: IResolvable | typing.List[DataTfeRegistryModuleTestConfig] = None,
  vcs_repo: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo] = None,
  version_statuses: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.moduleProvider">module_provider</a></code> | <code>str</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.permissions">permissions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]</code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.registryName">registry_name</a></code> | <code>str</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.testConfig">test_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.vcsRepo">vcs_repo</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]</code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.versionStatuses">version_statuses</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]</code> | version_statuses block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.moduleProvider"></a>

- *Type:* str

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.name"></a>

- *Type:* str

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.organization"></a>

- *Type:* str

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.permissions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.registryName"></a>

- *Type:* str

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.testConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.vcsRepo"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `version_statuses`<sup>Optional</sup> <a name="version_statuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.versionStatuses"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig">put_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo">put_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses">put_version_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName">reset_registry_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig">reset_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo">reset_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses">reset_version_statuses</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[DataTfeRegistryModulePermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]

---

##### `put_test_config` <a name="put_test_config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig"></a>

```python
def put_test_config(
  value: IResolvable | typing.List[DataTfeRegistryModuleTestConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]

---

##### `put_vcs_repo` <a name="put_vcs_repo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo"></a>

```python
def put_vcs_repo(
  value: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]

---

##### `put_version_statuses` <a name="put_version_statuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses"></a>

```python
def put_version_statuses(
  value: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_registry_name` <a name="reset_registry_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName"></a>

```python
def reset_registry_name() -> None
```

##### `reset_test_config` <a name="reset_test_config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig"></a>

```python
def reset_test_config() -> None
```

##### `reset_vcs_repo` <a name="reset_vcs_repo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo"></a>

```python
def reset_vcs_repo() -> None
```

##### `reset_version_statuses` <a name="reset_version_statuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses"></a>

```python
def reset_version_statuses() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeRegistryModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeRegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode">no_code</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId">no_code_module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource">no_code_module_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism">publishing_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig">test_config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses">version_statuses</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput">module_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput">permissions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput">registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput">test_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput">vcs_repo_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput">version_statuses_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider">module_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `no_code`<sup>Required</sup> <a name="no_code" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode"></a>

```python
no_code: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `no_code_module_id`<sup>Required</sup> <a name="no_code_module_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId"></a>

```python
no_code_module_id: str
```

- *Type:* str

---

##### `no_code_module_source`<sup>Required</sup> <a name="no_code_module_source" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource"></a>

```python
no_code_module_source: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions"></a>

```python
permissions: DataTfeRegistryModulePermissionsList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a>

---

##### `publishing_mechanism`<sup>Required</sup> <a name="publishing_mechanism" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism"></a>

```python
publishing_mechanism: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `test_config`<sup>Required</sup> <a name="test_config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig"></a>

```python
test_config: DataTfeRegistryModuleTestConfigList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo"></a>

```python
vcs_repo: DataTfeRegistryModuleVcsRepoList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a>

---

##### `version_statuses`<sup>Required</sup> <a name="version_statuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses"></a>

```python
version_statuses: DataTfeRegistryModuleVersionStatusesList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a>

---

##### `module_provider_input`<sup>Optional</sup> <a name="module_provider_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput"></a>

```python
module_provider_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[DataTfeRegistryModulePermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]

---

##### `registry_name_input`<sup>Optional</sup> <a name="registry_name_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput"></a>

```python
registry_name_input: str
```

- *Type:* str

---

##### `test_config_input`<sup>Optional</sup> <a name="test_config_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput"></a>

```python
test_config_input: IResolvable | typing.List[DataTfeRegistryModuleTestConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]

---

##### `vcs_repo_input`<sup>Optional</sup> <a name="vcs_repo_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput"></a>

```python
vcs_repo_input: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]

---

##### `version_statuses_input`<sup>Optional</sup> <a name="version_statuses_input" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput"></a>

```python
version_statuses_input: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryModuleConfig <a name="DataTfeRegistryModuleConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  module_provider: str,
  name: str,
  organization: str,
  namespace: str = None,
  permissions: IResolvable | typing.List[DataTfeRegistryModulePermissions] = None,
  registry_name: str = None,
  test_config: IResolvable | typing.List[DataTfeRegistryModuleTestConfig] = None,
  vcs_repo: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo] = None,
  version_statuses: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider">module_provider</a></code> | <code>str</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name">name</a></code> | <code>str</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization">organization</a></code> | <code>str</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]</code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName">registry_name</a></code> | <code>str</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig">test_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo">vcs_repo</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]</code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses">version_statuses</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]</code> | version_statuses block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions"></a>

```python
permissions: IResolvable | typing.List[DataTfeRegistryModulePermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig"></a>

```python
test_config: IResolvable | typing.List[DataTfeRegistryModuleTestConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo"></a>

```python
vcs_repo: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `version_statuses`<sup>Optional</sup> <a name="version_statuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses"></a>

```python
version_statuses: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

### DataTfeRegistryModulePermissions <a name="DataTfeRegistryModulePermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModulePermissions()
```


### DataTfeRegistryModuleTestConfig <a name="DataTfeRegistryModuleTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleTestConfig()
```


### DataTfeRegistryModuleVcsRepo <a name="DataTfeRegistryModuleVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo()
```


### DataTfeRegistryModuleVersionStatuses <a name="DataTfeRegistryModuleVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses()
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryModulePermissionsList <a name="DataTfeRegistryModulePermissionsList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModulePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeRegistryModulePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataTfeRegistryModulePermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>]

---


### DataTfeRegistryModulePermissionsOutputReference <a name="DataTfeRegistryModulePermissionsOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete">can_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync">can_resync</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry">can_retry</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `can_delete`<sup>Required</sup> <a name="can_delete" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete"></a>

```python
can_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_resync`<sup>Required</sup> <a name="can_resync" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync"></a>

```python
can_resync: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_retry`<sup>Required</sup> <a name="can_retry" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry"></a>

```python
can_retry: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataTfeRegistryModulePermissions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>

---


### DataTfeRegistryModuleTestConfigList <a name="DataTfeRegistryModuleTestConfigList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeRegistryModuleTestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataTfeRegistryModuleTestConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>]

---


### DataTfeRegistryModuleTestConfigOutputReference <a name="DataTfeRegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled">tests_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tests_enabled`<sup>Required</sup> <a name="tests_enabled" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```python
tests_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataTfeRegistryModuleTestConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>

---


### DataTfeRegistryModuleVcsRepoList <a name="DataTfeRegistryModuleVcsRepoList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeRegistryModuleVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataTfeRegistryModuleVcsRepo]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>]

---


### DataTfeRegistryModuleVcsRepoOutputReference <a name="DataTfeRegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier">display_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules">ingress_submodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl">repository_http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider">service_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.sourceDirectory">source_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagPrefix">tag_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags">tags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex">tags_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `display_identifier`<sup>Required</sup> <a name="display_identifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```python
display_identifier: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `ingress_submodules`<sup>Required</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules"></a>

```python
ingress_submodules: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `repository_http_url`<sup>Required</sup> <a name="repository_http_url" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl"></a>

```python
repository_http_url: str
```

- *Type:* str

---

##### `service_provider`<sup>Required</sup> <a name="service_provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider"></a>

```python
service_provider: str
```

- *Type:* str

---

##### `source_directory`<sup>Required</sup> <a name="source_directory" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.sourceDirectory"></a>

```python
source_directory: str
```

- *Type:* str

---

##### `tag_prefix`<sup>Required</sup> <a name="tag_prefix" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagPrefix"></a>

```python
tag_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags"></a>

```python
tags: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags_regex`<sup>Required</sup> <a name="tags_regex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex"></a>

```python
tags_regex: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataTfeRegistryModuleVcsRepo
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>

---


### DataTfeRegistryModuleVersionStatusesList <a name="DataTfeRegistryModuleVersionStatusesList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeRegistryModuleVersionStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataTfeRegistryModuleVersionStatuses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>]

---


### DataTfeRegistryModuleVersionStatusesOutputReference <a name="DataTfeRegistryModuleVersionStatusesOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_registry_module

dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataTfeRegistryModuleVersionStatuses
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>

---



