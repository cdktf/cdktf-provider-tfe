# `dataTfePolicySet` Submodule <a name="`dataTfePolicySet` Submodule" id="@cdktf/provider-tfe.dataTfePolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfePolicySet <a name="DataTfePolicySet" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySet(
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
  kind: str = None,
  organization: str = None,
  overridable: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#name DataTfePolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#id DataTfePolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The policy-as-code framework for the policy. Valid values are sentinel and opa. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether users can override this policy when it fails during a run. Only valid for OPA policies. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#name DataTfePolicySet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#id DataTfePolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.kind"></a>

- *Type:* str

The policy-as-code framework for the policy. Valid values are sentinel and opa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#kind DataTfePolicySet#kind}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.overridable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether users can override this policy when it fails during a run. Only valid for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#overridable DataTfePolicySet#overridable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverridable">reset_overridable</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_overridable` <a name="reset_overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverridable"></a>

```python
def reset_overridable() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTfePolicySet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTfePolicySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTfePolicySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTfePolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfePolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.agentEnabled">agent_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.excludedWorkspaceIds">excluded_workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.global">global</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policiesPath">policies_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyIds">policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyToolVersion">policy_tool_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.projectIds">project_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList">DataTfePolicySetVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridableInput">overridable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_enabled`<sup>Required</sup> <a name="agent_enabled" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.agentEnabled"></a>

```python
agent_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `excluded_workspace_ids`<sup>Required</sup> <a name="excluded_workspace_ids" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.excludedWorkspaceIds"></a>

```python
excluded_workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.global"></a>

```python
global: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `policies_path`<sup>Required</sup> <a name="policies_path" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policiesPath"></a>

```python
policies_path: str
```

- *Type:* str

---

##### `policy_ids`<sup>Required</sup> <a name="policy_ids" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyIds"></a>

```python
policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_tool_version`<sup>Required</sup> <a name="policy_tool_version" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyToolVersion"></a>

```python
policy_tool_version: str
```

- *Type:* str

---

##### `project_ids`<sup>Required</sup> <a name="project_ids" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.projectIds"></a>

```python
project_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.vcsRepo"></a>

```python
vcs_repo: DataTfePolicySetVcsRepoList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList">DataTfePolicySetVcsRepoList</a>

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `overridable_input`<sup>Optional</sup> <a name="overridable_input" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridableInput"></a>

```python
overridable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `overridable`<sup>Required</sup> <a name="overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridable"></a>

```python
overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfePolicySetConfig <a name="DataTfePolicySetConfig" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  kind: str = None,
  organization: str = None,
  overridable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#name DataTfePolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#id DataTfePolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.kind">kind</a></code> | <code>str</code> | The policy-as-code framework for the policy. Valid values are sentinel and opa. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether users can override this policy when it fails during a run. Only valid for OPA policies. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#name DataTfePolicySet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#id DataTfePolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The policy-as-code framework for the policy. Valid values are sentinel and opa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#kind DataTfePolicySet#kind}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.overridable"></a>

```python
overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether users can override this policy when it fails during a run. Only valid for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/data-sources/policy_set#overridable DataTfePolicySet#overridable}

---

### DataTfePolicySetVcsRepo <a name="DataTfePolicySetVcsRepo" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySetVcsRepo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfePolicySetVcsRepoList <a name="DataTfePolicySetVcsRepoList" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySetVcsRepoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTfePolicySetVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataTfePolicySetVcsRepoOutputReference <a name="DataTfePolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_tfe_policy_set

dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.ingressSubmodules">ingress_submodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo">DataTfePolicySetVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `ingress_submodules`<sup>Required</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```python
ingress_submodules: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: DataTfePolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo">DataTfePolicySetVcsRepo</a>

---



