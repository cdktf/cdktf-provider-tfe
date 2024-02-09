# `workspaceRun` Submodule <a name="`workspaceRun` Submodule" id="@cdktf/provider-tfe.workspaceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRun <a name="WorkspaceRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run tfe_workspace_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRun(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  apply: WorkspaceRunApply = None,
  destroy: WorkspaceRunDestroy = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `apply`<sup>Optional</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.apply"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `destroy`<sup>Optional</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.destroy"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply">put_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy">put_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply">reset_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy">reset_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_apply` <a name="put_apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply"></a>

```python
def put_apply(
  manual_confirm: typing.Union[bool, IResolvable],
  retry: typing.Union[bool, IResolvable] = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_backoff_max: typing.Union[int, float] = None,
  retry_backoff_min: typing.Union[int, float] = None,
  wait_for_run: typing.Union[bool, IResolvable] = None
) -> None
```

###### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.manualConfirm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

###### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.retry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

###### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.retryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

###### `retry_backoff_max`<sup>Optional</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.retryBackoffMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

###### `retry_backoff_min`<sup>Optional</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.retryBackoffMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

###### `wait_for_run`<sup>Optional</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.waitForRun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

##### `put_destroy` <a name="put_destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy"></a>

```python
def put_destroy(
  manual_confirm: typing.Union[bool, IResolvable],
  retry: typing.Union[bool, IResolvable] = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_backoff_max: typing.Union[int, float] = None,
  retry_backoff_min: typing.Union[int, float] = None,
  wait_for_run: typing.Union[bool, IResolvable] = None
) -> None
```

###### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.manualConfirm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

###### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.retry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

###### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.retryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

###### `retry_backoff_max`<sup>Optional</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.retryBackoffMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

###### `retry_backoff_min`<sup>Optional</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.retryBackoffMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

###### `wait_for_run`<sup>Optional</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.waitForRun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

##### `reset_apply` <a name="reset_apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply"></a>

```python
def reset_apply() -> None
```

##### `reset_destroy` <a name="reset_destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy"></a>

```python
def reset_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRun.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput">apply_input</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput">destroy_input</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apply`<sup>Required</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply"></a>

```python
apply: WorkspaceRunApplyOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a>

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy"></a>

```python
destroy: WorkspaceRunDestroyOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a>

---

##### `apply_input`<sup>Optional</sup> <a name="apply_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput"></a>

```python
apply_input: WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `destroy_input`<sup>Optional</sup> <a name="destroy_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput"></a>

```python
destroy_input: WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunApply <a name="WorkspaceRunApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRunApply(
  manual_confirm: typing.Union[bool, IResolvable],
  retry: typing.Union[bool, IResolvable] = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_backoff_max: typing.Union[int, float] = None,
  retry_backoff_min: typing.Union[int, float] = None,
  wait_for_run: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm">manual_confirm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax">retry_backoff_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin">retry_backoff_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun">wait_for_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm"></a>

```python
manual_confirm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retry_backoff_max`<sup>Optional</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax"></a>

```python
retry_backoff_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retry_backoff_min`<sup>Optional</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin"></a>

```python
retry_backoff_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `wait_for_run`<sup>Optional</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun"></a>

```python
wait_for_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

### WorkspaceRunConfig <a name="WorkspaceRunConfig" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  apply: WorkspaceRunApply = None,
  destroy: WorkspaceRunDestroy = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `apply`<sup>Optional</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply"></a>

```python
apply: WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `destroy`<sup>Optional</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy"></a>

```python
destroy: WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceRunDestroy <a name="WorkspaceRunDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRunDestroy(
  manual_confirm: typing.Union[bool, IResolvable],
  retry: typing.Union[bool, IResolvable] = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_backoff_max: typing.Union[int, float] = None,
  retry_backoff_min: typing.Union[int, float] = None,
  wait_for_run: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm">manual_confirm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax">retry_backoff_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin">retry_backoff_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun">wait_for_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm"></a>

```python
manual_confirm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retry_backoff_max`<sup>Optional</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax"></a>

```python
retry_backoff_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retry_backoff_min`<sup>Optional</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin"></a>

```python
retry_backoff_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `wait_for_run`<sup>Optional</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun"></a>

```python
wait_for_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceRunApplyOutputReference <a name="WorkspaceRunApplyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRunApplyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts">reset_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax">reset_retry_backoff_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin">reset_retry_backoff_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun">reset_wait_for_run</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retry` <a name="reset_retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_retry_attempts` <a name="reset_retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts"></a>

```python
def reset_retry_attempts() -> None
```

##### `reset_retry_backoff_max` <a name="reset_retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax"></a>

```python
def reset_retry_backoff_max() -> None
```

##### `reset_retry_backoff_min` <a name="reset_retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin"></a>

```python
def reset_retry_backoff_min() -> None
```

##### `reset_wait_for_run` <a name="reset_wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun"></a>

```python
def reset_wait_for_run() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput">manual_confirm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput">retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput">retry_backoff_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput">retry_backoff_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput">retry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput">wait_for_run_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm">manual_confirm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax">retry_backoff_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin">retry_backoff_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun">wait_for_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_confirm_input`<sup>Optional</sup> <a name="manual_confirm_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput"></a>

```python
manual_confirm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_attempts_input`<sup>Optional</sup> <a name="retry_attempts_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput"></a>

```python
retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_max_input`<sup>Optional</sup> <a name="retry_backoff_max_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput"></a>

```python
retry_backoff_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_min_input`<sup>Optional</sup> <a name="retry_backoff_min_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput"></a>

```python
retry_backoff_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput"></a>

```python
retry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_run_input`<sup>Optional</sup> <a name="wait_for_run_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput"></a>

```python
wait_for_run_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm"></a>

```python
manual_confirm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_attempts`<sup>Required</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_max`<sup>Required</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax"></a>

```python
retry_backoff_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_min`<sup>Required</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin"></a>

```python
retry_backoff_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_run`<sup>Required</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun"></a>

```python
wait_for_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---


### WorkspaceRunDestroyOutputReference <a name="WorkspaceRunDestroyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_run

workspaceRun.WorkspaceRunDestroyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts">reset_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax">reset_retry_backoff_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin">reset_retry_backoff_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun">reset_wait_for_run</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retry` <a name="reset_retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_retry_attempts` <a name="reset_retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts"></a>

```python
def reset_retry_attempts() -> None
```

##### `reset_retry_backoff_max` <a name="reset_retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax"></a>

```python
def reset_retry_backoff_max() -> None
```

##### `reset_retry_backoff_min` <a name="reset_retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin"></a>

```python
def reset_retry_backoff_min() -> None
```

##### `reset_wait_for_run` <a name="reset_wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun"></a>

```python
def reset_wait_for_run() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput">manual_confirm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput">retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput">retry_backoff_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput">retry_backoff_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput">retry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput">wait_for_run_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm">manual_confirm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax">retry_backoff_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin">retry_backoff_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun">wait_for_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_confirm_input`<sup>Optional</sup> <a name="manual_confirm_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput"></a>

```python
manual_confirm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_attempts_input`<sup>Optional</sup> <a name="retry_attempts_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput"></a>

```python
retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_max_input`<sup>Optional</sup> <a name="retry_backoff_max_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput"></a>

```python
retry_backoff_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_min_input`<sup>Optional</sup> <a name="retry_backoff_min_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput"></a>

```python
retry_backoff_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput"></a>

```python
retry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_run_input`<sup>Optional</sup> <a name="wait_for_run_input" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput"></a>

```python
wait_for_run_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_confirm`<sup>Required</sup> <a name="manual_confirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm"></a>

```python
manual_confirm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_attempts`<sup>Required</sup> <a name="retry_attempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_max`<sup>Required</sup> <a name="retry_backoff_max" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax"></a>

```python
retry_backoff_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_backoff_min`<sup>Required</sup> <a name="retry_backoff_min" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin"></a>

```python
retry_backoff_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_run`<sup>Required</sup> <a name="wait_for_run" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun"></a>

```python
wait_for_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---



