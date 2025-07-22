# `teamAccess` Submodule <a name="`teamAccess` Submodule" id="@cdktf/provider-tfe.teamAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamAccess <a name="TeamAccess" id="@cdktf/provider-tfe.teamAccess.TeamAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access tfe_team_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_id: str,
  workspace_id: str,
  access: str = None,
  id: str = None,
  permissions: typing.Union[IResolvable, typing.List[TeamAccessPermissions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#team_id TeamAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_id TeamAccess#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#access TeamAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#id TeamAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]</code> | permissions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#team_id TeamAccess#team_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_id TeamAccess#workspace_id}.

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.access"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#access TeamAccess#access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#id TeamAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#permissions TeamAccess#permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.teamAccess.TeamAccess.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.teamAccess.TeamAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamAccess.TeamAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[TeamAccessPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetPermissions"></a>

```python
def reset_permissions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TeamAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TeamAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamAccess.TeamAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList">TeamAccessPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissions"></a>

```python
permissions: TeamAccessPermissionsList
```

- *Type:* <a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList">TeamAccessPermissionsList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[TeamAccessPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamAccessConfig <a name="TeamAccessConfig" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_id: str,
  workspace_id: str,
  access: str = None,
  id: str = None,
  permissions: typing.Union[IResolvable, typing.List[TeamAccessPermissions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#team_id TeamAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_id TeamAccess#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#access TeamAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#id TeamAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]</code> | permissions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#team_id TeamAccess#team_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_id TeamAccess#workspace_id}.

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#access TeamAccess#access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#id TeamAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[TeamAccessPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#permissions TeamAccess#permissions}

---

### TeamAccessPermissions <a name="TeamAccessPermissions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccessPermissions(
  runs: str,
  run_tasks: typing.Union[bool, IResolvable],
  sentinel_mocks: str,
  state_versions: str,
  variables: str,
  workspace_locking: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runs">runs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#runs TeamAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runTasks">run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#run_tasks TeamAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.sentinelMocks">sentinel_mocks</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#sentinel_mocks TeamAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.stateVersions">state_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#state_versions TeamAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.variables">variables</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#variables TeamAccess#variables}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.workspaceLocking">workspace_locking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_locking TeamAccess#workspace_locking}. |

---

##### `runs`<sup>Required</sup> <a name="runs" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runs"></a>

```python
runs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#runs TeamAccess#runs}.

---

##### `run_tasks`<sup>Required</sup> <a name="run_tasks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runTasks"></a>

```python
run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#run_tasks TeamAccess#run_tasks}.

---

##### `sentinel_mocks`<sup>Required</sup> <a name="sentinel_mocks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.sentinelMocks"></a>

```python
sentinel_mocks: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#sentinel_mocks TeamAccess#sentinel_mocks}.

---

##### `state_versions`<sup>Required</sup> <a name="state_versions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.stateVersions"></a>

```python
state_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#state_versions TeamAccess#state_versions}.

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.variables"></a>

```python
variables: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#variables TeamAccess#variables}.

---

##### `workspace_locking`<sup>Required</sup> <a name="workspace_locking" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.workspaceLocking"></a>

```python
workspace_locking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.1/docs/resources/team_access#workspace_locking TeamAccess#workspace_locking}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamAccessPermissionsList <a name="TeamAccessPermissionsList" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccessPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamAccessPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TeamAccessPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]]

---


### TeamAccessPermissionsOutputReference <a name="TeamAccessPermissionsOutputReference" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_access

teamAccess.TeamAccessPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runsInput">runs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasksInput">run_tasks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocksInput">sentinel_mocks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersionsInput">state_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variablesInput">variables_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLockingInput">workspace_locking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runs">runs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasks">run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocks">sentinel_mocks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersions">state_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variables">variables</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLocking">workspace_locking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runs_input`<sup>Optional</sup> <a name="runs_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runsInput"></a>

```python
runs_input: str
```

- *Type:* str

---

##### `run_tasks_input`<sup>Optional</sup> <a name="run_tasks_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasksInput"></a>

```python
run_tasks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sentinel_mocks_input`<sup>Optional</sup> <a name="sentinel_mocks_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocksInput"></a>

```python
sentinel_mocks_input: str
```

- *Type:* str

---

##### `state_versions_input`<sup>Optional</sup> <a name="state_versions_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersionsInput"></a>

```python
state_versions_input: str
```

- *Type:* str

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variablesInput"></a>

```python
variables_input: str
```

- *Type:* str

---

##### `workspace_locking_input`<sup>Optional</sup> <a name="workspace_locking_input" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLockingInput"></a>

```python
workspace_locking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runs`<sup>Required</sup> <a name="runs" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runs"></a>

```python
runs: str
```

- *Type:* str

---

##### `run_tasks`<sup>Required</sup> <a name="run_tasks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasks"></a>

```python
run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sentinel_mocks`<sup>Required</sup> <a name="sentinel_mocks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocks"></a>

```python
sentinel_mocks: str
```

- *Type:* str

---

##### `state_versions`<sup>Required</sup> <a name="state_versions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersions"></a>

```python
state_versions: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variables"></a>

```python
variables: str
```

- *Type:* str

---

##### `workspace_locking`<sup>Required</sup> <a name="workspace_locking" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLocking"></a>

```python
workspace_locking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TeamAccessPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions">TeamAccessPermissions</a>]

---



