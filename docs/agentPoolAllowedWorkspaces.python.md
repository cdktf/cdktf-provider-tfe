# `agentPoolAllowedWorkspaces` Submodule <a name="`agentPoolAllowedWorkspaces` Submodule" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentPoolAllowedWorkspaces <a name="AgentPoolAllowedWorkspaces" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces tfe_agent_pool_allowed_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_pool_id: str,
  allowed_workspace_ids: typing.List[str],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.allowedWorkspaceIds">allowed_workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.agentPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}.

---

##### `allowed_workspace_ids`<sup>Required</sup> <a name="allowed_workspace_ids" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.allowedWorkspaceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AgentPoolAllowedWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AgentPoolAllowedWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentPoolAllowedWorkspaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentPoolAllowedWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AgentPoolAllowedWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput">agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput">allowed_workspace_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds">allowed_workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_pool_id_input`<sup>Optional</sup> <a name="agent_pool_id_input" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput"></a>

```python
agent_pool_id_input: str
```

- *Type:* str

---

##### `allowed_workspace_ids_input`<sup>Optional</sup> <a name="allowed_workspace_ids_input" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput"></a>

```python
allowed_workspace_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

---

##### `allowed_workspace_ids`<sup>Required</sup> <a name="allowed_workspace_ids" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds"></a>

```python
allowed_workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentPoolAllowedWorkspacesConfig <a name="AgentPoolAllowedWorkspacesConfig" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import agent_pool_allowed_workspaces

agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_pool_id: str,
  allowed_workspace_ids: typing.List[str],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds">allowed_workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}.

---

##### `allowed_workspace_ids`<sup>Required</sup> <a name="allowed_workspace_ids" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds"></a>

```python
allowed_workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



