# `registryModule` Submodule <a name="`registryModule` Submodule" id="@cdktf/provider-tfe.registryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryModule <a name="RegistryModule" id="@cdktf/provider-tfe.registryModule.RegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  module_provider: str = None,
  name: str = None,
  namespace: str = None,
  no_code: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  registry_name: str = None,
  test_config: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]] = None,
  vcs_repo: RegistryModuleVcsRepo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#id RegistryModule#id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.moduleProvider">module_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#name RegistryModule#name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#namespace RegistryModule#namespace}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.noCode">no_code</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#no_code RegistryModule#no_code}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#organization RegistryModule#organization}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.registryName">registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.testConfig">test_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | vcs_repo block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#id RegistryModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_provider`<sup>Optional</sup> <a name="module_provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.moduleProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#name RegistryModule#name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#namespace RegistryModule#namespace}.

---

##### `no_code`<sup>Optional</sup> <a name="no_code" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.noCode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#no_code RegistryModule#no_code}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#organization RegistryModule#organization}.

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.registryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}.

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.testConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#test_config RegistryModule#test_config}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.vcsRepo"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#vcs_repo RegistryModule#vcs_repo}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig">put_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo">put_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider">reset_module_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode">reset_no_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName">reset_registry_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig">reset_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo">reset_vcs_repo</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.registryModule.RegistryModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_test_config` <a name="put_test_config" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig"></a>

```python
def put_test_config(
  value: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]

---

##### `put_vcs_repo` <a name="put_vcs_repo" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo"></a>

```python
def put_vcs_repo(
  display_identifier: str,
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  oauth_token_id: str = None,
  tags: typing.Union[bool, IResolvable] = None
) -> None
```

###### `display_identifier`<sup>Required</sup> <a name="display_identifier" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.displayIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}.

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#identifier RegistryModule#identifier}.

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#branch RegistryModule#branch}.

---

###### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.githubAppInstallationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}.

---

###### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.oauthTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.tags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#tags RegistryModule#tags}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_module_provider` <a name="reset_module_provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider"></a>

```python
def reset_module_provider() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_code` <a name="reset_no_code" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode"></a>

```python
def reset_no_code() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_registry_name` <a name="reset_registry_name" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName"></a>

```python
def reset_registry_name() -> None
```

##### `reset_test_config` <a name="reset_test_config" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig"></a>

```python
def reset_test_config() -> None
```

##### `reset_vcs_repo` <a name="reset_vcs_repo" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo"></a>

```python
def reset_vcs_repo() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RegistryModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism">publishing_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig">test_config</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput">module_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput">no_code_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput">registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput">test_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput">vcs_repo_input</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider">module_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode">no_code</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `publishing_mechanism`<sup>Required</sup> <a name="publishing_mechanism" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism"></a>

```python
publishing_mechanism: str
```

- *Type:* str

---

##### `test_config`<sup>Required</sup> <a name="test_config" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig"></a>

```python
test_config: RegistryModuleTestConfigList
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a>

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo"></a>

```python
vcs_repo: RegistryModuleVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_provider_input`<sup>Optional</sup> <a name="module_provider_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput"></a>

```python
module_provider_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_code_input`<sup>Optional</sup> <a name="no_code_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput"></a>

```python
no_code_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `registry_name_input`<sup>Optional</sup> <a name="registry_name_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput"></a>

```python
registry_name_input: str
```

- *Type:* str

---

##### `test_config_input`<sup>Optional</sup> <a name="test_config_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput"></a>

```python
test_config_input: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]

---

##### `vcs_repo_input`<sup>Optional</sup> <a name="vcs_repo_input" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput"></a>

```python
vcs_repo_input: RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_code`<sup>Required</sup> <a name="no_code" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode"></a>

```python
no_code: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryModuleConfig <a name="RegistryModuleConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  module_provider: str = None,
  name: str = None,
  namespace: str = None,
  no_code: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  registry_name: str = None,
  test_config: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]] = None,
  vcs_repo: RegistryModuleVcsRepo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#id RegistryModule#id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider">module_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#name RegistryModule#name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#namespace RegistryModule#namespace}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode">no_code</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#no_code RegistryModule#no_code}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#organization RegistryModule#organization}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName">registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig">test_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | vcs_repo block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#id RegistryModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_provider`<sup>Optional</sup> <a name="module_provider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#name RegistryModule#name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#namespace RegistryModule#namespace}.

---

##### `no_code`<sup>Optional</sup> <a name="no_code" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode"></a>

```python
no_code: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#no_code RegistryModule#no_code}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#organization RegistryModule#organization}.

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}.

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig"></a>

```python
test_config: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#test_config RegistryModule#test_config}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo"></a>

```python
vcs_repo: RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#vcs_repo RegistryModule#vcs_repo}

---

### RegistryModuleTestConfig <a name="RegistryModuleTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleTestConfig(
  tests_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled">tests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}. |

---

##### `tests_enabled`<sup>Optional</sup> <a name="tests_enabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled"></a>

```python
tests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}.

---

### RegistryModuleVcsRepo <a name="RegistryModuleVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleVcsRepo(
  display_identifier: str,
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  oauth_token_id: str = None,
  tags: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier">display_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#identifier RegistryModule#identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#branch RegistryModule#branch}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags">tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#tags RegistryModule#tags}. |

---

##### `display_identifier`<sup>Required</sup> <a name="display_identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier"></a>

```python
display_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#identifier RegistryModule#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#branch RegistryModule#branch}.

---

##### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}.

---

##### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags"></a>

```python
tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/registry_module#tags RegistryModule#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegistryModuleTestConfigList <a name="RegistryModuleTestConfigList" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleTestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RegistryModuleTestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RegistryModuleTestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]]

---


### RegistryModuleTestConfigOutputReference <a name="RegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleTestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled">reset_tests_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tests_enabled` <a name="reset_tests_enabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled"></a>

```python
def reset_tests_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput">tests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled">tests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tests_enabled_input`<sup>Optional</sup> <a name="tests_enabled_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput"></a>

```python
tests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tests_enabled`<sup>Required</sup> <a name="tests_enabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```python
tests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RegistryModuleTestConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>]

---


### RegistryModuleVcsRepoOutputReference <a name="RegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import registry_module

registryModule.RegistryModuleVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId">reset_github_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId">reset_oauth_token_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_github_app_installation_id` <a name="reset_github_app_installation_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```python
def reset_github_app_installation_id() -> None
```

##### `reset_oauth_token_id` <a name="reset_oauth_token_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId"></a>

```python
def reset_oauth_token_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput">display_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput">github_app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput">oauth_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier">display_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags">tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `display_identifier_input`<sup>Optional</sup> <a name="display_identifier_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput"></a>

```python
display_identifier_input: str
```

- *Type:* str

---

##### `github_app_installation_id_input`<sup>Optional</sup> <a name="github_app_installation_id_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```python
github_app_installation_id_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `oauth_token_id_input`<sup>Optional</sup> <a name="oauth_token_id_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```python
oauth_token_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `display_identifier`<sup>Required</sup> <a name="display_identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```python
display_identifier: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags"></a>

```python
tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---



