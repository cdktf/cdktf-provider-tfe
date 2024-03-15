# `dataTfeVariables` Submodule <a name="`dataTfeVariables` Submodule" id="@cdktf/provider-tfe.dataTfeVariables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeVariables <a name="DataTfeVariables" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables tfe_variables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariables(
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
  variable_set_id: str = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#id DataTfeVariables#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.variableSetId">variable_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#variable_set_id DataTfeVariables#variable_set_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#workspace_id DataTfeVariables#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#id DataTfeVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `variable_set_id`<sup>Optional</sup> <a name="variable_set_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.variableSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#variable_set_id DataTfeVariables#variable_set_id}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#workspace_id DataTfeVariables#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetVariableSetId">reset_variable_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_variable_set_id` <a name="reset_variable_set_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetVariableSetId"></a>

```python
def reset_variable_set_id() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeVariables resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeVariables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeVariables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeVariables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeVariables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.env">env</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList">DataTfeVariablesEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraform">terraform</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList">DataTfeVariablesTerraformList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList">DataTfeVariablesVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variableSetIdInput">variable_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variableSetId">variable_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.env"></a>

```python
env: DataTfeVariablesEnvList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList">DataTfeVariablesEnvList</a>

---

##### `terraform`<sup>Required</sup> <a name="terraform" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.terraform"></a>

```python
terraform: DataTfeVariablesTerraformList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList">DataTfeVariablesTerraformList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variables"></a>

```python
variables: DataTfeVariablesVariablesList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList">DataTfeVariablesVariablesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `variable_set_id_input`<sup>Optional</sup> <a name="variable_set_id_input" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variableSetIdInput"></a>

```python
variable_set_id_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `variable_set_id`<sup>Required</sup> <a name="variable_set_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.variableSetId"></a>

```python
variable_set_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeVariablesConfig <a name="DataTfeVariablesConfig" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  variable_set_id: str = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#id DataTfeVariables#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.variableSetId">variable_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#variable_set_id DataTfeVariables#variable_set_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#workspace_id DataTfeVariables#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#id DataTfeVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `variable_set_id`<sup>Optional</sup> <a name="variable_set_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.variableSetId"></a>

```python
variable_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#variable_set_id DataTfeVariables#variable_set_id}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/variables#workspace_id DataTfeVariables#workspace_id}.

---

### DataTfeVariablesEnv <a name="DataTfeVariablesEnv" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesEnv()
```


### DataTfeVariablesTerraform <a name="DataTfeVariablesTerraform" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraform.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesTerraform()
```


### DataTfeVariablesVariables <a name="DataTfeVariablesVariables" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesVariables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeVariablesEnvList <a name="DataTfeVariablesEnvList" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeVariablesEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataTfeVariablesEnvOutputReference <a name="DataTfeVariablesEnvOutputReference" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.hcl">hcl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnv">DataTfeVariablesEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.hcl"></a>

```python
hcl: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.sensitive"></a>

```python
sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnvOutputReference.property.internalValue"></a>

```python
internal_value: DataTfeVariablesEnv
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesEnv">DataTfeVariablesEnv</a>

---


### DataTfeVariablesTerraformList <a name="DataTfeVariablesTerraformList" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesTerraformList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeVariablesTerraformOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataTfeVariablesTerraformOutputReference <a name="DataTfeVariablesTerraformOutputReference" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesTerraformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.hcl">hcl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraform">DataTfeVariablesTerraform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.hcl"></a>

```python
hcl: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.sensitive"></a>

```python
sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraformOutputReference.property.internalValue"></a>

```python
internal_value: DataTfeVariablesTerraform
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesTerraform">DataTfeVariablesTerraform</a>

---


### DataTfeVariablesVariablesList <a name="DataTfeVariablesVariablesList" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeVariablesVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataTfeVariablesVariablesOutputReference <a name="DataTfeVariablesVariablesOutputReference" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_variables

dataTfeVariables.DataTfeVariablesVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.hcl">hcl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariables">DataTfeVariablesVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.hcl"></a>

```python
hcl: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.sensitive"></a>

```python
sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataTfeVariablesVariables
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeVariables.DataTfeVariablesVariables">DataTfeVariablesVariables</a>

---



