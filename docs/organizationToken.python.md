# `tfe_organization_token`

Refer to the Terraform Registory for docs: [`tfe_organization_token`](https://www.terraform.io/docs/providers/tfe/r/organization_token).

# `organizationToken` Submodule <a name="`organizationToken` Submodule" id="@cdktf/provider-tfe.organizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationToken <a name="OrganizationToken" id="@cdktf/provider-tfe.organizationToken.OrganizationToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_token tfe_organization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_token

organizationToken.OrganizationToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  force_regenerate: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.forceRegenerate">force_regenerate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `force_regenerate`<sup>Optional</sup> <a name="force_regenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.forceRegenerate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetForceRegenerate">reset_force_regenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_force_regenerate` <a name="reset_force_regenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetForceRegenerate"></a>

```python
def reset_force_regenerate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOrganization"></a>

```python
def reset_organization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import organization_token

organizationToken.OrganizationToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import organization_token

organizationToken.OrganizationToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import organization_token

organizationToken.OrganizationToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerateInput">force_regenerate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerate">force_regenerate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `force_regenerate_input`<sup>Optional</sup> <a name="force_regenerate_input" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerateInput"></a>

```python
force_regenerate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `force_regenerate`<sup>Required</sup> <a name="force_regenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerate"></a>

```python
force_regenerate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationTokenConfig <a name="OrganizationTokenConfig" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_token

organizationToken.OrganizationTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  force_regenerate: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forceRegenerate">force_regenerate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `force_regenerate`<sup>Optional</sup> <a name="force_regenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forceRegenerate"></a>

```python
force_regenerate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}.

---



