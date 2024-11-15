# `dataTfeWorkspace` Submodule <a name="`dataTfeWorkspace` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspace <a name="DataTfeWorkspace" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  organization: str = None,
  tag_names: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#name DataTfeWorkspace#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#id DataTfeWorkspace#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#organization DataTfeWorkspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#name DataTfeWorkspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#organization DataTfeWorkspace#organization}.

---

##### `tag_names`<sup>Optional</sup> <a name="tag_names" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.tagNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames">reset_tag_names</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_tag_names` <a name="reset_tag_names" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames"></a>

```python
def reset_tag_names() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan">allow_destroy_plan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled">assessments_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply">auto_apply</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger">auto_apply_run_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoDestroyActivityDuration">auto_destroy_activity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoDestroyAt">auto_destroy_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode">execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled">file_triggers_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState">global_remote_state</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations">operations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures">policy_check_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns">queue_all_runs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures">run_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount">runs_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled">speculative_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId">ssh_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled">structured_run_output_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion">terraform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns">trigger_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes">trigger_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput">tag_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_destroy_plan`<sup>Required</sup> <a name="allow_destroy_plan" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan"></a>

```python
allow_destroy_plan: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `assessments_enabled`<sup>Required</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled"></a>

```python
assessments_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_apply`<sup>Required</sup> <a name="auto_apply" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply"></a>

```python
auto_apply: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_apply_run_trigger`<sup>Required</sup> <a name="auto_apply_run_trigger" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger"></a>

```python
auto_apply_run_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_destroy_activity_duration`<sup>Required</sup> <a name="auto_destroy_activity_duration" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoDestroyActivityDuration"></a>

```python
auto_destroy_activity_duration: str
```

- *Type:* str

---

##### `auto_destroy_at`<sup>Required</sup> <a name="auto_destroy_at" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoDestroyAt"></a>

```python
auto_destroy_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

---

##### `file_triggers_enabled`<sup>Required</sup> <a name="file_triggers_enabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled"></a>

```python
file_triggers_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `global_remote_state`<sup>Required</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState"></a>

```python
global_remote_state: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations"></a>

```python
operations: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `policy_check_failures`<sup>Required</sup> <a name="policy_check_failures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures"></a>

```python
policy_check_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `queue_all_runs`<sup>Required</sup> <a name="queue_all_runs" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns"></a>

```python
queue_all_runs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remote_state_consumer_ids`<sup>Required</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds"></a>

```python
remote_state_consumer_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_failures`<sup>Required</sup> <a name="run_failures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures"></a>

```python
run_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runs_count`<sup>Required</sup> <a name="runs_count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount"></a>

```python
runs_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `speculative_enabled`<sup>Required</sup> <a name="speculative_enabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled"></a>

```python
speculative_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssh_key_id`<sup>Required</sup> <a name="ssh_key_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId"></a>

```python
ssh_key_id: str
```

- *Type:* str

---

##### `structured_run_output_enabled`<sup>Required</sup> <a name="structured_run_output_enabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled"></a>

```python
structured_run_output_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `terraform_version`<sup>Required</sup> <a name="terraform_version" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion"></a>

```python
terraform_version: str
```

- *Type:* str

---

##### `trigger_patterns`<sup>Required</sup> <a name="trigger_patterns" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns"></a>

```python
trigger_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_prefixes`<sup>Required</sup> <a name="trigger_prefixes" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes"></a>

```python
trigger_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo"></a>

```python
vcs_repo: DataTfeWorkspaceVcsRepoList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a>

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `tag_names_input`<sup>Optional</sup> <a name="tag_names_input" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput"></a>

```python
tag_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `tag_names`<sup>Required</sup> <a name="tag_names" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames"></a>

```python
tag_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceConfig <a name="DataTfeWorkspaceConfig" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  organization: str = None,
  tag_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#name DataTfeWorkspace#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#id DataTfeWorkspace#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#organization DataTfeWorkspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#name DataTfeWorkspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#organization DataTfeWorkspace#organization}.

---

##### `tag_names`<sup>Optional</sup> <a name="tag_names" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames"></a>

```python
tag_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}.

---

### DataTfeWorkspaceVcsRepo <a name="DataTfeWorkspaceVcsRepo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspaceVcsRepo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeWorkspaceVcsRepoList <a name="DataTfeWorkspaceVcsRepoList" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspaceVcsRepoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfeWorkspaceVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataTfeWorkspaceVcsRepoOutputReference <a name="DataTfeWorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_workspace

dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules">ingress_submodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex">tags_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `ingress_submodules`<sup>Required</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```python
ingress_submodules: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `tags_regex`<sup>Required</sup> <a name="tags_regex" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```python
tags_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: DataTfeWorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a>

---



