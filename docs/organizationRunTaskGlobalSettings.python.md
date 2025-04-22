# `organizationRunTaskGlobalSettings` Submodule <a name="`organizationRunTaskGlobalSettings` Submodule" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRunTaskGlobalSettings <a name="OrganizationRunTaskGlobalSettings" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings tfe_organization_run_task_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enforcement_level: str,
  stages: typing.List[str],
  task_id: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.enforcementLevel">enforcement_level</a></code> | <code>str</code> | The enforcement level of the global task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.stages">stages</a></code> | <code>typing.List[str]</code> | Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.taskId">task_id</a></code> | <code>str</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the run task will be applied globally. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enforcement_level`<sup>Required</sup> <a name="enforcement_level" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.enforcementLevel"></a>

- *Type:* str

The enforcement level of the global task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enforcement_level OrganizationRunTaskGlobalSettings#enforcement_level}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.stages"></a>

- *Type:* typing.List[str]

Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#stages OrganizationRunTaskGlobalSettings#stages}

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.taskId"></a>

- *Type:* str

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#task_id OrganizationRunTaskGlobalSettings#task_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the run task will be applied globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enabled OrganizationRunTaskGlobalSettings#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationRunTaskGlobalSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationRunTaskGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRunTaskGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevelInput">enforcement_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stagesInput">stages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskIdInput">task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevel">enforcement_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskId">task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforcement_level_input`<sup>Optional</sup> <a name="enforcement_level_input" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevelInput"></a>

```python
enforcement_level_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stagesInput"></a>

```python
stages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_id_input`<sup>Optional</sup> <a name="task_id_input" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskIdInput"></a>

```python
task_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforcement_level`<sup>Required</sup> <a name="enforcement_level" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevel"></a>

```python
enforcement_level: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRunTaskGlobalSettingsConfig <a name="OrganizationRunTaskGlobalSettingsConfig" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization_run_task_global_settings

organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enforcement_level: str,
  stages: typing.List[str],
  task_id: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel">enforcement_level</a></code> | <code>str</code> | The enforcement level of the global task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.stages">stages</a></code> | <code>typing.List[str]</code> | Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.taskId">task_id</a></code> | <code>str</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the run task will be applied globally. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enforcement_level`<sup>Required</sup> <a name="enforcement_level" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel"></a>

```python
enforcement_level: str
```

- *Type:* str

The enforcement level of the global task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enforcement_level OrganizationRunTaskGlobalSettings#enforcement_level}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#stages OrganizationRunTaskGlobalSettings#stages}

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#task_id OrganizationRunTaskGlobalSettings#task_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the run task will be applied globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enabled OrganizationRunTaskGlobalSettings#enabled}

---



