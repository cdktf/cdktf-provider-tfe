# `dataTfeHyokCustomerKeyVersion` Submodule <a name="`dataTfeHyokCustomerKeyVersion` Submodule" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeHyokCustomerKeyVersion <a name="DataTfeHyokCustomerKeyVersion" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version tfe_hyok_customer_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the HYOK customer key version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

The ID of the HYOK customer key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#id DataTfeHyokCustomerKeyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeHyokCustomerKeyVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeHyokCustomerKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeHyokCustomerKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured">workspaces_secured</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `workspaces_secured`<sup>Required</sup> <a name="workspaces_secured" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured"></a>

```python
workspaces_secured: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeHyokCustomerKeyVersionConfig <a name="DataTfeHyokCustomerKeyVersionConfig" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_hyok_customer_key_version

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id">id</a></code> | <code>str</code> | The ID of the HYOK customer key version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the HYOK customer key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#id DataTfeHyokCustomerKeyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



