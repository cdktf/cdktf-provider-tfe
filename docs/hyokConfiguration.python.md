# `hyokConfiguration` Submodule <a name="`hyokConfiguration` Submodule" id="@cdktf/provider-tfe.hyokConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyokConfiguration <a name="HyokConfiguration" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_pool_id: str,
  kek_id: str,
  name: str,
  oidc_configuration_id: str,
  oidc_configuration_type: str,
  kms_options: HyokConfigurationKmsOptions = None,
  organization: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.agentPoolId">agent_pool_id</a></code> | <code>str</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kekId">kek_id</a></code> | <code>str</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationId">oidc_configuration_id</a></code> | <code>str</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationType">oidc_configuration_type</a></code> | <code>str</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kmsOptions">kms_options</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.agentPoolId"></a>

- *Type:* str

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `kek_id`<sup>Required</sup> <a name="kek_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kekId"></a>

- *Type:* str

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `oidc_configuration_id`<sup>Required</sup> <a name="oidc_configuration_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationId"></a>

- *Type:* str

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `oidc_configuration_type`<sup>Required</sup> <a name="oidc_configuration_type" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationType"></a>

- *Type:* str

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `kms_options`<sup>Optional</sup> <a name="kms_options" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kmsOptions"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.organization"></a>

- *Type:* str

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions">put_kms_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions">reset_kms_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kms_options` <a name="put_kms_options" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions"></a>

```python
def put_kms_options(
  key_location: str = None,
  key_region: str = None,
  key_ring_id: str = None
) -> None
```

###### `key_location`<sup>Optional</sup> <a name="key_location" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.keyLocation"></a>

- *Type:* str

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

###### `key_region`<sup>Optional</sup> <a name="key_region" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.keyRegion"></a>

- *Type:* str

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

###### `key_ring_id`<sup>Optional</sup> <a name="key_ring_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.keyRingId"></a>

- *Type:* str

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

##### `reset_kms_options` <a name="reset_kms_options" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions"></a>

```python
def reset_kms_options() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization"></a>

```python
def reset_organization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HyokConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HyokConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HyokConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions">kms_options</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput">agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput">kek_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput">kms_options_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput">oidc_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput">oidc_configuration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId">kek_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId">oidc_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType">oidc_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_options`<sup>Required</sup> <a name="kms_options" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions"></a>

```python
kms_options: HyokConfigurationKmsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a>

---

##### `agent_pool_id_input`<sup>Optional</sup> <a name="agent_pool_id_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput"></a>

```python
agent_pool_id_input: str
```

- *Type:* str

---

##### `kek_id_input`<sup>Optional</sup> <a name="kek_id_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput"></a>

```python
kek_id_input: str
```

- *Type:* str

---

##### `kms_options_input`<sup>Optional</sup> <a name="kms_options_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput"></a>

```python
kms_options_input: IResolvable | HyokConfigurationKmsOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oidc_configuration_id_input`<sup>Optional</sup> <a name="oidc_configuration_id_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput"></a>

```python
oidc_configuration_id_input: str
```

- *Type:* str

---

##### `oidc_configuration_type_input`<sup>Optional</sup> <a name="oidc_configuration_type_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput"></a>

```python
oidc_configuration_type_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

---

##### `kek_id`<sup>Required</sup> <a name="kek_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId"></a>

```python
kek_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc_configuration_id`<sup>Required</sup> <a name="oidc_configuration_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId"></a>

```python
oidc_configuration_id: str
```

- *Type:* str

---

##### `oidc_configuration_type`<sup>Required</sup> <a name="oidc_configuration_type" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType"></a>

```python
oidc_configuration_type: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HyokConfigurationConfig <a name="HyokConfigurationConfig" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_pool_id: str,
  kek_id: str,
  name: str,
  oidc_configuration_id: str,
  oidc_configuration_type: str,
  kms_options: HyokConfigurationKmsOptions = None,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId">kek_id</a></code> | <code>str</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name">name</a></code> | <code>str</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId">oidc_configuration_id</a></code> | <code>str</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType">oidc_configuration_type</a></code> | <code>str</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions">kms_options</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization">organization</a></code> | <code>str</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `kek_id`<sup>Required</sup> <a name="kek_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId"></a>

```python
kek_id: str
```

- *Type:* str

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `oidc_configuration_id`<sup>Required</sup> <a name="oidc_configuration_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId"></a>

```python
oidc_configuration_id: str
```

- *Type:* str

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `oidc_configuration_type`<sup>Required</sup> <a name="oidc_configuration_type" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType"></a>

```python
oidc_configuration_type: str
```

- *Type:* str

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `kms_options`<sup>Optional</sup> <a name="kms_options" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions"></a>

```python
kms_options: HyokConfigurationKmsOptions
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

### HyokConfigurationKmsOptions <a name="HyokConfigurationKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfigurationKmsOptions(
  key_location: str = None,
  key_region: str = None,
  key_ring_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation">key_location</a></code> | <code>str</code> | The location in which the GCP key ring exists. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion">key_region</a></code> | <code>str</code> | The AWS region where your key is located. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId">key_ring_id</a></code> | <code>str</code> | The root resource for Google Cloud KMS keys and key versions. |

---

##### `key_location`<sup>Optional</sup> <a name="key_location" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

##### `key_region`<sup>Optional</sup> <a name="key_region" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion"></a>

```python
key_region: str
```

- *Type:* str

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

##### `key_ring_id`<sup>Optional</sup> <a name="key_ring_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId"></a>

```python
key_ring_id: str
```

- *Type:* str

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyokConfigurationKmsOptionsOutputReference <a name="HyokConfigurationKmsOptionsOutputReference" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import hyok_configuration

hyokConfiguration.HyokConfigurationKmsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation">reset_key_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion">reset_key_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId">reset_key_ring_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_location` <a name="reset_key_location" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation"></a>

```python
def reset_key_location() -> None
```

##### `reset_key_region` <a name="reset_key_region" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion"></a>

```python
def reset_key_region() -> None
```

##### `reset_key_ring_id` <a name="reset_key_ring_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId"></a>

```python
def reset_key_ring_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput">key_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput">key_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput">key_ring_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation">key_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion">key_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId">key_ring_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_location_input`<sup>Optional</sup> <a name="key_location_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput"></a>

```python
key_location_input: str
```

- *Type:* str

---

##### `key_region_input`<sup>Optional</sup> <a name="key_region_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput"></a>

```python
key_region_input: str
```

- *Type:* str

---

##### `key_ring_id_input`<sup>Optional</sup> <a name="key_ring_id_input" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput"></a>

```python
key_ring_id_input: str
```

- *Type:* str

---

##### `key_location`<sup>Required</sup> <a name="key_location" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

---

##### `key_region`<sup>Required</sup> <a name="key_region" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion"></a>

```python
key_region: str
```

- *Type:* str

---

##### `key_ring_id`<sup>Required</sup> <a name="key_ring_id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId"></a>

```python
key_ring_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HyokConfigurationKmsOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---



