# `dataTfeOutputs` Submodule <a name="`dataTfeOutputs` Submodule" id="@cdktf/provider-tfe.dataTfeOutputs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOutputs <a name="DataTfeOutputs" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs tfe_outputs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace: str,
  organization: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.workspace">workspace</a></code> | <code>str</code> | Name of the workspace. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Name of the organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.workspace"></a>

- *Type:* str

Name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs#workspace DataTfeOutputs#workspace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.Initializer.parameter.organization"></a>

- *Type:* str

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs#organization DataTfeOutputs#organization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.resetOrganization"></a>

```python
def reset_organization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeOutputs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeOutputs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeOutputs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeOutputs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOutputs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.nonsensitiveValues">nonsensitive_values</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.values">values</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nonsensitive_values`<sup>Required</sup> <a name="nonsensitive_values" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.nonsensitiveValues"></a>

```python
nonsensitive_values: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.values"></a>

```python
values: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOutputsConfig <a name="DataTfeOutputsConfig" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_outputs

dataTfeOutputs.DataTfeOutputsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace: str,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.workspace">workspace</a></code> | <code>str</code> | Name of the workspace. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.organization">organization</a></code> | <code>str</code> | Name of the organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs#workspace DataTfeOutputs#workspace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOutputs.DataTfeOutputsConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/data-sources/outputs#organization DataTfeOutputs#organization}

---



