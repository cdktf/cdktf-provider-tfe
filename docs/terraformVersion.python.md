# `terraformVersion` Submodule <a name="`terraformVersion` Submodule" id="@cdktf/provider-tfe.terraformVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformVersion <a name="TerraformVersion" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version tfe_terraform_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sha: str,
  url: str,
  version: str,
  beta: typing.Union[bool, IResolvable] = None,
  deprecated: typing.Union[bool, IResolvable] = None,
  deprecated_reason: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  official: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.sha">sha</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#sha TerraformVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#url TerraformVersion#url}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#version TerraformVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.beta">beta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#beta TerraformVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.deprecated">deprecated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#id TerraformVersion#id}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.official">official</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#official TerraformVersion#official}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.sha"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#sha TerraformVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#url TerraformVersion#url}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#version TerraformVersion#version}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.beta"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#beta TerraformVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.deprecated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}.

---

##### `deprecated_reason`<sup>Optional</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.deprecatedReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#id TerraformVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.official"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#official TerraformVersion#official}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta">reset_beta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated">reset_deprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason">reset_deprecated_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial">reset_official</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_beta` <a name="reset_beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta"></a>

```python
def reset_beta() -> None
```

##### `reset_deprecated` <a name="reset_deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated"></a>

```python
def reset_deprecated() -> None
```

##### `reset_deprecated_reason` <a name="reset_deprecated_reason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason"></a>

```python
def reset_deprecated_reason() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_official` <a name="reset_official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial"></a>

```python
def reset_official() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TerraformVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TerraformVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TerraformVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TerraformVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TerraformVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput">beta_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput">deprecated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput">deprecated_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput">official_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput">sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta">beta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated">deprecated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official">official</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha">sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `beta_input`<sup>Optional</sup> <a name="beta_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput"></a>

```python
beta_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deprecated_input`<sup>Optional</sup> <a name="deprecated_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput"></a>

```python
deprecated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deprecated_reason_input`<sup>Optional</sup> <a name="deprecated_reason_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput"></a>

```python
deprecated_reason_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `official_input`<sup>Optional</sup> <a name="official_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput"></a>

```python
official_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sha_input`<sup>Optional</sup> <a name="sha_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput"></a>

```python
sha_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta"></a>

```python
beta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated"></a>

```python
deprecated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deprecated_reason`<sup>Required</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason"></a>

```python
deprecated_reason: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `official`<sup>Required</sup> <a name="official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official"></a>

```python
official: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha"></a>

```python
sha: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformVersionConfig <a name="TerraformVersionConfig" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import terraform_version

terraformVersion.TerraformVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sha: str,
  url: str,
  version: str,
  beta: typing.Union[bool, IResolvable] = None,
  deprecated: typing.Union[bool, IResolvable] = None,
  deprecated_reason: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  official: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha">sha</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#sha TerraformVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#url TerraformVersion#url}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#version TerraformVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta">beta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#beta TerraformVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated">deprecated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#id TerraformVersion#id}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official">official</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#official TerraformVersion#official}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha"></a>

```python
sha: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#sha TerraformVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#url TerraformVersion#url}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#version TerraformVersion#version}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta"></a>

```python
beta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#beta TerraformVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated"></a>

```python
deprecated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}.

---

##### `deprecated_reason`<sup>Optional</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason"></a>

```python
deprecated_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#id TerraformVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official"></a>

```python
official: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/terraform_version#official TerraformVersion#official}.

---



