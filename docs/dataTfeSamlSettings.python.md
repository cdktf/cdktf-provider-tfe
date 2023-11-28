# `dataTfeSamlSettings` Submodule <a name="`dataTfeSamlSettings` Submodule" id="@cdktf/provider-tfe.dataTfeSamlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeSamlSettings <a name="DataTfeSamlSettings" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfeSamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfeSamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfeSamlSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfeSamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeSamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl">acs_consumer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups">attr_groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin">attr_site_admin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername">attr_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned">authn_requests_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug">debug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert">idp_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl">metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert">old_idp_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod">signature_digest_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod">signature_signing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole">site_admin_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl">slo_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout">sso_api_token_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl">sso_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled">team_management_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned">want_assertions_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acs_consumer_url`<sup>Required</sup> <a name="acs_consumer_url" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl"></a>

```python
acs_consumer_url: str
```

- *Type:* str

---

##### `attr_groups`<sup>Required</sup> <a name="attr_groups" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups"></a>

```python
attr_groups: str
```

- *Type:* str

---

##### `attr_site_admin`<sup>Required</sup> <a name="attr_site_admin" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin"></a>

```python
attr_site_admin: str
```

- *Type:* str

---

##### `attr_username`<sup>Required</sup> <a name="attr_username" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername"></a>

```python
attr_username: str
```

- *Type:* str

---

##### `authn_requests_signed`<sup>Required</sup> <a name="authn_requests_signed" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned"></a>

```python
authn_requests_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `debug`<sup>Required</sup> <a name="debug" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug"></a>

```python
debug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_cert`<sup>Required</sup> <a name="idp_cert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert"></a>

```python
idp_cert: str
```

- *Type:* str

---

##### `metadata_url`<sup>Required</sup> <a name="metadata_url" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl"></a>

```python
metadata_url: str
```

- *Type:* str

---

##### `old_idp_cert`<sup>Required</sup> <a name="old_idp_cert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert"></a>

```python
old_idp_cert: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `signature_digest_method`<sup>Required</sup> <a name="signature_digest_method" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod"></a>

```python
signature_digest_method: str
```

- *Type:* str

---

##### `signature_signing_method`<sup>Required</sup> <a name="signature_signing_method" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod"></a>

```python
signature_signing_method: str
```

- *Type:* str

---

##### `site_admin_role`<sup>Required</sup> <a name="site_admin_role" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole"></a>

```python
site_admin_role: str
```

- *Type:* str

---

##### `slo_endpoint_url`<sup>Required</sup> <a name="slo_endpoint_url" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl"></a>

```python
slo_endpoint_url: str
```

- *Type:* str

---

##### `sso_api_token_session_timeout`<sup>Required</sup> <a name="sso_api_token_session_timeout" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout"></a>

```python
sso_api_token_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sso_endpoint_url`<sup>Required</sup> <a name="sso_endpoint_url" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl"></a>

```python
sso_endpoint_url: str
```

- *Type:* str

---

##### `team_management_enabled`<sup>Required</sup> <a name="team_management_enabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled"></a>

```python
team_management_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `want_assertions_signed`<sup>Required</sup> <a name="want_assertions_signed" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned"></a>

```python
want_assertions_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeSamlSettingsConfig <a name="DataTfeSamlSettingsConfig" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_saml_settings

dataTfeSamlSettings.DataTfeSamlSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---



