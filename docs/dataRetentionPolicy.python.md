# `dataRetentionPolicy` Submodule <a name="`dataRetentionPolicy` Submodule" id="@cdktf/provider-tfe.dataRetentionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataRetentionPolicy <a name="DataRetentionPolicy" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy tfe_data_retention_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delete_older_than: DataRetentionPolicyDeleteOlderThan = None,
  dont_delete: DataRetentionPolicyDontDelete = None,
  organization: str = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.deleteOlderThan">delete_older_than</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | delete_older_than block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.dontDelete">dont_delete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | dont_delete block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | ID of the workspace that the data retention policy should apply to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delete_older_than`<sup>Optional</sup> <a name="delete_older_than" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.deleteOlderThan"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

delete_older_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#delete_older_than DataRetentionPolicy#delete_older_than}

---

##### `dont_delete`<sup>Optional</sup> <a name="dont_delete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.dontDelete"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

dont_delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#dont_delete DataRetentionPolicy#dont_delete}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.organization"></a>

- *Type:* str

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#organization DataRetentionPolicy#organization}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.workspaceId"></a>

- *Type:* str

ID of the workspace that the data retention policy should apply to.

If omitted, the data retention policy will apply to the entire organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#workspace_id DataRetentionPolicy#workspace_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan">put_delete_older_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete">put_dont_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan">reset_delete_older_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delete_older_than` <a name="put_delete_older_than" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan"></a>

```python
def put_delete_older_than(
  days: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan.parameter.days"></a>

- *Type:* typing.Union[int, float]

Number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#days DataRetentionPolicy#days}

---

##### `put_dont_delete` <a name="put_dont_delete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete"></a>

```python
def put_dont_delete() -> None
```

##### `reset_delete_older_than` <a name="reset_delete_older_than" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan"></a>

```python
def reset_delete_older_than() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataRetentionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataRetentionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataRetentionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan">delete_older_than</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete">dont_delete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput">delete_older_than_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput">dont_delete_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delete_older_than`<sup>Required</sup> <a name="delete_older_than" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan"></a>

```python
delete_older_than: DataRetentionPolicyDeleteOlderThanOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a>

---

##### `dont_delete`<sup>Required</sup> <a name="dont_delete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete"></a>

```python
dont_delete: DataRetentionPolicyDontDeleteOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `delete_older_than_input`<sup>Optional</sup> <a name="delete_older_than_input" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput"></a>

```python
delete_older_than_input: typing.Union[IResolvable, DataRetentionPolicyDeleteOlderThan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>]

---

##### `dont_delete_input`<sup>Optional</sup> <a name="dont_delete_input" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput"></a>

```python
dont_delete_input: typing.Union[IResolvable, DataRetentionPolicyDontDelete]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>]

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataRetentionPolicyConfig <a name="DataRetentionPolicyConfig" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delete_older_than: DataRetentionPolicyDeleteOlderThan = None,
  dont_delete: DataRetentionPolicyDontDelete = None,
  organization: str = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan">delete_older_than</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | delete_older_than block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete">dont_delete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | dont_delete block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization">organization</a></code> | <code>str</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | ID of the workspace that the data retention policy should apply to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delete_older_than`<sup>Optional</sup> <a name="delete_older_than" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan"></a>

```python
delete_older_than: DataRetentionPolicyDeleteOlderThan
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

delete_older_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#delete_older_than DataRetentionPolicy#delete_older_than}

---

##### `dont_delete`<sup>Optional</sup> <a name="dont_delete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete"></a>

```python
dont_delete: DataRetentionPolicyDontDelete
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

dont_delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#dont_delete DataRetentionPolicy#dont_delete}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#organization DataRetentionPolicy#organization}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

ID of the workspace that the data retention policy should apply to.

If omitted, the data retention policy will apply to the entire organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#workspace_id DataRetentionPolicy#workspace_id}

---

### DataRetentionPolicyDeleteOlderThan <a name="DataRetentionPolicyDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Number of days. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/data_retention_policy#days DataRetentionPolicy#days}

---

### DataRetentionPolicyDontDelete <a name="DataRetentionPolicyDontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicyDontDelete()
```


## Classes <a name="Classes" id="Classes"></a>

### DataRetentionPolicyDeleteOlderThanOutputReference <a name="DataRetentionPolicyDeleteOlderThanOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataRetentionPolicyDeleteOlderThan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>]

---


### DataRetentionPolicyDontDeleteOutputReference <a name="DataRetentionPolicyDontDeleteOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import data_retention_policy

dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataRetentionPolicyDontDelete]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>]

---



