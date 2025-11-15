# `opaVersion` Submodule <a name="`opaVersion` Submodule" id="@cdktf/provider-tfe.opaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpaVersion <a name="OpaVersion" id="@cdktf/provider-tfe.opaVersion.OpaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version tfe_opa_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  version: str,
  archs: IResolvable | typing.List[OpaVersionArchs] = None,
  beta: bool | IResolvable = None,
  deprecated: bool | IResolvable = None,
  deprecated_reason: str = None,
  enabled: bool | IResolvable = None,
  official: bool | IResolvable = None,
  sha: str = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.archs">archs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.deprecated">deprecated</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.official">official</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.sha">sha</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}.

---

##### `archs`<sup>Optional</sup> <a name="archs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.archs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.beta"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.deprecated"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}.

---

##### `deprecated_reason`<sup>Optional</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.deprecatedReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.official"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}.

---

##### `sha`<sup>Optional</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.sha"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs">put_archs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetArchs">reset_archs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetBeta">reset_beta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecated">reset_deprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecatedReason">reset_deprecated_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetOfficial">reset_official</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetSha">reset_sha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.opaVersion.OpaVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_archs` <a name="put_archs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs"></a>

```python
def put_archs(
  value: IResolvable | typing.List[OpaVersionArchs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]

---

##### `reset_archs` <a name="reset_archs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetArchs"></a>

```python
def reset_archs() -> None
```

##### `reset_beta` <a name="reset_beta" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetBeta"></a>

```python
def reset_beta() -> None
```

##### `reset_deprecated` <a name="reset_deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecated"></a>

```python
def reset_deprecated() -> None
```

##### `reset_deprecated_reason` <a name="reset_deprecated_reason" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecatedReason"></a>

```python
def reset_deprecated_reason() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_official` <a name="reset_official" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetOfficial"></a>

```python
def reset_official() -> None
```

##### `reset_sha` <a name="reset_sha" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetSha"></a>

```python
def reset_sha() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpaVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpaVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpaVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.archs">archs</a></code> | <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList">OpaVersionArchsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.archsInput">archs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.betaInput">beta_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedInput">deprecated_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReasonInput">deprecated_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.officialInput">official_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.shaInput">sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecated">deprecated</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.official">official</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.sha">sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `archs`<sup>Required</sup> <a name="archs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.archs"></a>

```python
archs: OpaVersionArchsList
```

- *Type:* <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList">OpaVersionArchsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `archs_input`<sup>Optional</sup> <a name="archs_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.archsInput"></a>

```python
archs_input: IResolvable | typing.List[OpaVersionArchs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]

---

##### `beta_input`<sup>Optional</sup> <a name="beta_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.betaInput"></a>

```python
beta_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deprecated_input`<sup>Optional</sup> <a name="deprecated_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedInput"></a>

```python
deprecated_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deprecated_reason_input`<sup>Optional</sup> <a name="deprecated_reason_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReasonInput"></a>

```python
deprecated_reason_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `official_input`<sup>Optional</sup> <a name="official_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.officialInput"></a>

```python
official_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sha_input`<sup>Optional</sup> <a name="sha_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.shaInput"></a>

```python
sha_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.beta"></a>

```python
beta: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecated"></a>

```python
deprecated: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deprecated_reason`<sup>Required</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReason"></a>

```python
deprecated_reason: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `official`<sup>Required</sup> <a name="official" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.official"></a>

```python
official: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.sha"></a>

```python
sha: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpaVersionArchs <a name="OpaVersionArchs" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersionArchs(
  arch: str,
  os: str,
  sha: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.arch">arch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#arch OpaVersion#arch}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#os OpaVersion#os}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.sha">sha</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}. |

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.arch"></a>

```python
arch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#arch OpaVersion#arch}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#os OpaVersion#os}.

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.sha"></a>

```python
sha: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}.

---

### OpaVersionConfig <a name="OpaVersionConfig" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  version: str,
  archs: IResolvable | typing.List[OpaVersionArchs] = None,
  beta: bool | IResolvable = None,
  deprecated: bool | IResolvable = None,
  deprecated_reason: str = None,
  enabled: bool | IResolvable = None,
  official: bool | IResolvable = None,
  sha: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.archs">archs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecated">deprecated</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecatedReason">deprecated_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.official">official</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.sha">sha</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}.

---

##### `archs`<sup>Optional</sup> <a name="archs" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.archs"></a>

```python
archs: IResolvable | typing.List[OpaVersionArchs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.beta"></a>

```python
beta: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecated"></a>

```python
deprecated: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}.

---

##### `deprecated_reason`<sup>Optional</sup> <a name="deprecated_reason" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecatedReason"></a>

```python
deprecated_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.official"></a>

```python
official: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}.

---

##### `sha`<sup>Optional</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.sha"></a>

```python
sha: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpaVersionArchsList <a name="OpaVersionArchsList" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersionArchsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpaVersionArchsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpaVersionArchs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>]

---


### OpaVersionArchsOutputReference <a name="OpaVersionArchsOutputReference" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import opa_version

opaVersion.OpaVersionArchsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.archInput">arch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.shaInput">sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.arch">arch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.sha">sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_input`<sup>Optional</sup> <a name="arch_input" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.archInput"></a>

```python
arch_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `sha_input`<sup>Optional</sup> <a name="sha_input" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.shaInput"></a>

```python
sha_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.arch"></a>

```python
arch: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.sha"></a>

```python
sha: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpaVersionArchs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>

---



