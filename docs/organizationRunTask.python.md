# `organizationRunTask` Submodule <a name="`organizationRunTask` Submodule" id="@cdktf/provider-tfe.organizationRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRunTask <a name="OrganizationRunTask" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task tfe_organization_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTask(
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
  url: str,
  category: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hmac_key: str = None,
  organization: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#name OrganizationRunTask#name}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#url OrganizationRunTask#url}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#category OrganizationRunTask#category}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#description OrganizationRunTask#description}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#enabled OrganizationRunTask#enabled}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.hmacKey">hmac_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#hmac_key OrganizationRunTask#hmac_key}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#organization OrganizationRunTask#organization}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#name OrganizationRunTask#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#url OrganizationRunTask#url}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#category OrganizationRunTask#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#description OrganizationRunTask#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#enabled OrganizationRunTask#enabled}.

---

##### `hmac_key`<sup>Optional</sup> <a name="hmac_key" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.hmacKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#hmac_key OrganizationRunTask#hmac_key}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#organization OrganizationRunTask#organization}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetHmacKey">reset_hmac_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_category` <a name="reset_category" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_hmac_key` <a name="reset_hmac_key" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetHmacKey"></a>

```python
def reset_hmac_key() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.resetOrganization"></a>

```python
def reset_organization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationRunTask resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationRunTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationRunTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.hmacKeyInput">hmac_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.hmacKey">hmac_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hmac_key_input`<sup>Optional</sup> <a name="hmac_key_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.hmacKeyInput"></a>

```python
hmac_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hmac_key`<sup>Required</sup> <a name="hmac_key" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.hmacKey"></a>

```python
hmac_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRunTaskConfig <a name="OrganizationRunTaskConfig" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task

organizationRunTask.OrganizationRunTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  url: str,
  category: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hmac_key: str = None,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#name OrganizationRunTask#name}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#url OrganizationRunTask#url}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#category OrganizationRunTask#category}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#description OrganizationRunTask#description}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#enabled OrganizationRunTask#enabled}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.hmacKey">hmac_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#hmac_key OrganizationRunTask#hmac_key}. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#organization OrganizationRunTask#organization}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#name OrganizationRunTask#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#url OrganizationRunTask#url}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#category OrganizationRunTask#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#description OrganizationRunTask#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#enabled OrganizationRunTask#enabled}.

---

##### `hmac_key`<sup>Optional</sup> <a name="hmac_key" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.hmacKey"></a>

```python
hmac_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#hmac_key OrganizationRunTask#hmac_key}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.organizationRunTask.OrganizationRunTaskConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/organization_run_task#organization OrganizationRunTask#organization}.

---



