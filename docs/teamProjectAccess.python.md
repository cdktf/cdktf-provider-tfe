# `teamProjectAccess` Submodule <a name="`teamProjectAccess` Submodule" id="@cdktf/provider-tfe.teamProjectAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamProjectAccess <a name="TeamProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access tfe_team_project_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access: str,
  project_id: str,
  team_id: str,
  id: str = None,
  project_access: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]] = None,
  workspace_access: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectAccess">project_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]</code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.workspaceAccess">workspace_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]</code> | workspace_access block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.access"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_access`<sup>Optional</sup> <a name="project_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectAccess"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.workspaceAccess"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess">put_project_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess">put_workspace_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess">reset_project_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess">reset_workspace_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_project_access` <a name="put_project_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess"></a>

```python
def put_project_access(
  value: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]

---

##### `put_workspace_access` <a name="put_workspace_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess"></a>

```python
def put_workspace_access(
  value: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_access` <a name="reset_project_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess"></a>

```python
def reset_project_access() -> None
```

##### `reset_workspace_access` <a name="reset_workspace_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess"></a>

```python
def reset_workspace_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamProjectAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamProjectAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamProjectAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess">project_access</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess">workspace_access</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput">project_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput">workspace_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_access`<sup>Required</sup> <a name="project_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess"></a>

```python
project_access: TeamProjectAccessProjectAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a>

---

##### `workspace_access`<sup>Required</sup> <a name="workspace_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess"></a>

```python
workspace_access: TeamProjectAccessWorkspaceAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_access_input`<sup>Optional</sup> <a name="project_access_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput"></a>

```python
project_access_input: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `workspace_access_input`<sup>Optional</sup> <a name="workspace_access_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput"></a>

```python
workspace_access_input: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamProjectAccessConfig <a name="TeamProjectAccessConfig" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access: str,
  project_id: str,
  team_id: str,
  id: str = None,
  project_access: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]] = None,
  workspace_access: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess">project_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]</code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]</code> | workspace_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_access`<sup>Optional</sup> <a name="project_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess"></a>

```python
project_access: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

### TeamProjectAccessProjectAccess <a name="TeamProjectAccessProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessProjectAccess(
  settings: str = None,
  teams: str = None,
  variable_sets: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams">teams</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.variableSets">variable_sets</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variable_sets TeamProjectAccess#variable_sets}. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings"></a>

```python
settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams"></a>

```python
teams: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}.

---

##### `variable_sets`<sup>Optional</sup> <a name="variable_sets" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.variableSets"></a>

```python
variable_sets: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variable_sets TeamProjectAccess#variable_sets}.

---

### TeamProjectAccessWorkspaceAccess <a name="TeamProjectAccessWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessWorkspaceAccess(
  create: typing.Union[bool, IResolvable] = None,
  delete: typing.Union[bool, IResolvable] = None,
  locking: typing.Union[bool, IResolvable] = None,
  move: typing.Union[bool, IResolvable] = None,
  runs: str = None,
  run_tasks: typing.Union[bool, IResolvable] = None,
  sentinel_mocks: str = None,
  state_versions: str = None,
  variables: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#create TeamProjectAccess#create}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking">locking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move">move</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#move TeamProjectAccess#move}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs">runs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks">run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks">sentinel_mocks</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions">state_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables">variables</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#create TeamProjectAccess#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}.

---

##### `locking`<sup>Optional</sup> <a name="locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking"></a>

```python
locking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}.

---

##### `move`<sup>Optional</sup> <a name="move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move"></a>

```python
move: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#move TeamProjectAccess#move}.

---

##### `runs`<sup>Optional</sup> <a name="runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs"></a>

```python
runs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}.

---

##### `run_tasks`<sup>Optional</sup> <a name="run_tasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks"></a>

```python
run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}.

---

##### `sentinel_mocks`<sup>Optional</sup> <a name="sentinel_mocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks"></a>

```python
sentinel_mocks: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}.

---

##### `state_versions`<sup>Optional</sup> <a name="state_versions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions"></a>

```python
state_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables"></a>

```python
variables: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamProjectAccessProjectAccessList <a name="TeamProjectAccessProjectAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessProjectAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamProjectAccessProjectAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TeamProjectAccessProjectAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]]

---


### TeamProjectAccessProjectAccessOutputReference <a name="TeamProjectAccessProjectAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessProjectAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetVariableSets">reset_variable_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_variable_sets` <a name="reset_variable_sets" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetVariableSets"></a>

```python
def reset_variable_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput">teams_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.variableSetsInput">variable_sets_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams">teams</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.variableSets">variable_sets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput"></a>

```python
teams_input: str
```

- *Type:* str

---

##### `variable_sets_input`<sup>Optional</sup> <a name="variable_sets_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.variableSetsInput"></a>

```python
variable_sets_input: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams"></a>

```python
teams: str
```

- *Type:* str

---

##### `variable_sets`<sup>Required</sup> <a name="variable_sets" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.variableSets"></a>

```python
variable_sets: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TeamProjectAccessProjectAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>]

---


### TeamProjectAccessWorkspaceAccessList <a name="TeamProjectAccessWorkspaceAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessWorkspaceAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamProjectAccessWorkspaceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TeamProjectAccessWorkspaceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]]

---


### TeamProjectAccessWorkspaceAccessOutputReference <a name="TeamProjectAccessWorkspaceAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_project_access

teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking">reset_locking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove">reset_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns">reset_runs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks">reset_run_tasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks">reset_sentinel_mocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions">reset_state_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_locking` <a name="reset_locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking"></a>

```python
def reset_locking() -> None
```

##### `reset_move` <a name="reset_move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove"></a>

```python
def reset_move() -> None
```

##### `reset_runs` <a name="reset_runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns"></a>

```python
def reset_runs() -> None
```

##### `reset_run_tasks` <a name="reset_run_tasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks"></a>

```python
def reset_run_tasks() -> None
```

##### `reset_sentinel_mocks` <a name="reset_sentinel_mocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks"></a>

```python
def reset_sentinel_mocks() -> None
```

##### `reset_state_versions` <a name="reset_state_versions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions"></a>

```python
def reset_state_versions() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput">create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput">delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput">locking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput">move_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput">runs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput">run_tasks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput">sentinel_mocks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput">state_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput">variables_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking">locking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move">move</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs">runs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks">run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks">sentinel_mocks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions">state_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables">variables</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput"></a>

```python
create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput"></a>

```python
delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locking_input`<sup>Optional</sup> <a name="locking_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput"></a>

```python
locking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `move_input`<sup>Optional</sup> <a name="move_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput"></a>

```python
move_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runs_input`<sup>Optional</sup> <a name="runs_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput"></a>

```python
runs_input: str
```

- *Type:* str

---

##### `run_tasks_input`<sup>Optional</sup> <a name="run_tasks_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput"></a>

```python
run_tasks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sentinel_mocks_input`<sup>Optional</sup> <a name="sentinel_mocks_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput"></a>

```python
sentinel_mocks_input: str
```

- *Type:* str

---

##### `state_versions_input`<sup>Optional</sup> <a name="state_versions_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput"></a>

```python
state_versions_input: str
```

- *Type:* str

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput"></a>

```python
variables_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locking`<sup>Required</sup> <a name="locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking"></a>

```python
locking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `move`<sup>Required</sup> <a name="move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move"></a>

```python
move: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runs`<sup>Required</sup> <a name="runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs"></a>

```python
runs: str
```

- *Type:* str

---

##### `run_tasks`<sup>Required</sup> <a name="run_tasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks"></a>

```python
run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sentinel_mocks`<sup>Required</sup> <a name="sentinel_mocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks"></a>

```python
sentinel_mocks: str
```

- *Type:* str

---

##### `state_versions`<sup>Required</sup> <a name="state_versions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions"></a>

```python
state_versions: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables"></a>

```python
variables: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TeamProjectAccessWorkspaceAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>]

---



