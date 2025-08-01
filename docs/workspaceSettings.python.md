# `workspaceSettings` Submodule <a name="`workspaceSettings` Submodule" id="@cdktf/provider-tfe.workspaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettings <a name="WorkspaceSettings" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings tfe_workspace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettings(
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
  agent_pool_id: str = None,
  assessments_enabled: typing.Union[bool, IResolvable] = None,
  auto_apply: typing.Union[bool, IResolvable] = None,
  description: str = None,
  effective_tags: typing.Mapping[str] = None,
  execution_mode: str = None,
  global_remote_state: typing.Union[bool, IResolvable] = None,
  remote_state_consumer_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.effectiveTags">effective_tags</a></code> | <code>typing.Mapping[str]</code> | A map of all key-value tags set on the workspace (includes inheritted tags). |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the workspace allows all workspaces in the organization to access its state data during runs. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | The set of workspace IDs set as explicit remote state consumers for the given workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value tags to add to the workspace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.agentPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}.

---

##### `assessments_enabled`<sup>Optional</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.assessmentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#assessments_enabled WorkspaceSettings#assessments_enabled}

---

##### `auto_apply`<sup>Optional</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.autoApply"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply.

If set to true, this resource will be automatically applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#auto_apply WorkspaceSettings#auto_apply}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.description"></a>

- *Type:* str

A description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#description WorkspaceSettings#description}

---

##### `effective_tags`<sup>Optional</sup> <a name="effective_tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.effectiveTags"></a>

- *Type:* typing.Mapping[str]

A map of all key-value tags set on the workspace (includes inheritted tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#effective_tags WorkspaceSettings#effective_tags}

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.executionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}.

---

##### `global_remote_state`<sup>Optional</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.globalRemoteState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the workspace allows all workspaces in the organization to access its state data during runs.

If false, then only workspaces defined in `remote_state_consumer_ids` can access its state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#global_remote_state WorkspaceSettings#global_remote_state}

---

##### `remote_state_consumer_ids`<sup>Optional</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.remoteStateConsumerIds"></a>

- *Type:* typing.List[str]

The set of workspace IDs set as explicit remote state consumers for the given workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#remote_state_consumer_ids WorkspaceSettings#remote_state_consumer_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of key-value tags to add to the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#tags WorkspaceSettings#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId">reset_agent_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled">reset_assessments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply">reset_auto_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags">reset_effective_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode">reset_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState">reset_global_remote_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds">reset_remote_state_consumer_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_agent_pool_id` <a name="reset_agent_pool_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId"></a>

```python
def reset_agent_pool_id() -> None
```

##### `reset_assessments_enabled` <a name="reset_assessments_enabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled"></a>

```python
def reset_assessments_enabled() -> None
```

##### `reset_auto_apply` <a name="reset_auto_apply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply"></a>

```python
def reset_auto_apply() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_effective_tags` <a name="reset_effective_tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags"></a>

```python
def reset_effective_tags() -> None
```

##### `reset_execution_mode` <a name="reset_execution_mode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode"></a>

```python
def reset_execution_mode() -> None
```

##### `reset_global_remote_state` <a name="reset_global_remote_state" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState"></a>

```python
def reset_global_remote_state() -> None
```

##### `reset_remote_state_consumer_ids` <a name="reset_remote_state_consumer_ids" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds"></a>

```python
def reset_remote_state_consumer_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites">overwrites</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput">agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput">assessments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput">auto_apply_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput">effective_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput">execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput">global_remote_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput">remote_state_consumer_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags">effective_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode">execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `overwrites`<sup>Required</sup> <a name="overwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites"></a>

```python
overwrites: WorkspaceSettingsOverwritesList
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a>

---

##### `agent_pool_id_input`<sup>Optional</sup> <a name="agent_pool_id_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput"></a>

```python
agent_pool_id_input: str
```

- *Type:* str

---

##### `assessments_enabled_input`<sup>Optional</sup> <a name="assessments_enabled_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput"></a>

```python
assessments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_input`<sup>Optional</sup> <a name="auto_apply_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput"></a>

```python
auto_apply_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effective_tags_input`<sup>Optional</sup> <a name="effective_tags_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput"></a>

```python
effective_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_mode_input`<sup>Optional</sup> <a name="execution_mode_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput"></a>

```python
execution_mode_input: str
```

- *Type:* str

---

##### `global_remote_state_input`<sup>Optional</sup> <a name="global_remote_state_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput"></a>

```python
global_remote_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_state_consumer_ids_input`<sup>Optional</sup> <a name="remote_state_consumer_ids_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput"></a>

```python
remote_state_consumer_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

---

##### `assessments_enabled`<sup>Required</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled"></a>

```python
assessments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply`<sup>Required</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply"></a>

```python
auto_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_tags`<sup>Required</sup> <a name="effective_tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags"></a>

```python
effective_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

---

##### `global_remote_state`<sup>Required</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState"></a>

```python
global_remote_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_state_consumer_ids`<sup>Required</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds"></a>

```python
remote_state_consumer_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingsConfig <a name="WorkspaceSettingsConfig" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  agent_pool_id: str = None,
  assessments_enabled: typing.Union[bool, IResolvable] = None,
  auto_apply: typing.Union[bool, IResolvable] = None,
  description: str = None,
  effective_tags: typing.Mapping[str] = None,
  execution_mode: str = None,
  global_remote_state: typing.Union[bool, IResolvable] = None,
  remote_state_consumer_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description">description</a></code> | <code>str</code> | A description of the workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags">effective_tags</a></code> | <code>typing.Mapping[str]</code> | A map of all key-value tags set on the workspace (includes inheritted tags). |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the workspace allows all workspaces in the organization to access its state data during runs. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | The set of workspace IDs set as explicit remote state consumers for the given workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value tags to add to the workspace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}.

---

##### `assessments_enabled`<sup>Optional</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled"></a>

```python
assessments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#assessments_enabled WorkspaceSettings#assessments_enabled}

---

##### `auto_apply`<sup>Optional</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply"></a>

```python
auto_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply.

If set to true, this resource will be automatically applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#auto_apply WorkspaceSettings#auto_apply}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#description WorkspaceSettings#description}

---

##### `effective_tags`<sup>Optional</sup> <a name="effective_tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags"></a>

```python
effective_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of all key-value tags set on the workspace (includes inheritted tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#effective_tags WorkspaceSettings#effective_tags}

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}.

---

##### `global_remote_state`<sup>Optional</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState"></a>

```python
global_remote_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the workspace allows all workspaces in the organization to access its state data during runs.

If false, then only workspaces defined in `remote_state_consumer_ids` can access its state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#global_remote_state WorkspaceSettings#global_remote_state}

---

##### `remote_state_consumer_ids`<sup>Optional</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds"></a>

```python
remote_state_consumer_ids: typing.List[str]
```

- *Type:* typing.List[str]

The set of workspace IDs set as explicit remote state consumers for the given workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#remote_state_consumer_ids WorkspaceSettings#remote_state_consumer_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value tags to add to the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace_settings#tags WorkspaceSettings#tags}

---

### WorkspaceSettingsOverwrites <a name="WorkspaceSettingsOverwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettingsOverwrites()
```


## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingsOverwritesList <a name="WorkspaceSettingsOverwritesList" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettingsOverwritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceSettingsOverwritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkspaceSettingsOverwritesOutputReference <a name="WorkspaceSettingsOverwritesOutputReference" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace_settings

workspaceSettings.WorkspaceSettingsOverwritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool">agent_pool</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode">execution_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_pool`<sup>Required</sup> <a name="agent_pool" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool"></a>

```python
agent_pool: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode"></a>

```python
execution_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceSettingsOverwrites
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a>

---



