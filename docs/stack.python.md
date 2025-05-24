# `stack` Submodule <a name="`stack` Submodule" id="@cdktf/provider-tfe.stack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stack <a name="Stack" id="@cdktf/provider-tfe.stack.Stack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack tfe_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.stack.Stack.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.Stack(
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
  project_id: str,
  description: str = None,
  vcs_repo: StackVcsRepo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | ID of the project that the Stack belongs to. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a></code> | vcs_repo block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.name"></a>

- *Type:* str

Name of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#name Stack#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.projectId"></a>

- *Type:* str

ID of the project that the Stack belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#project_id Stack#project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.description"></a>

- *Type:* str

Description of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#description Stack#description}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.vcsRepo"></a>

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#vcs_repo Stack#vcs_repo}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.putVcsRepo">put_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetVcsRepo">reset_vcs_repo</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.stack.Stack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.stack.Stack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.stack.Stack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.stack.Stack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.stack.Stack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.stack.Stack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.stack.Stack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.stack.Stack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.stack.Stack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.stack.Stack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.stack.Stack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.stack.Stack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.stack.Stack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.stack.Stack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.stack.Stack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.stack.Stack.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.stack.Stack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.stack.Stack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.Stack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.stack.Stack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.stack.Stack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.stack.Stack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.stack.Stack.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.stack.Stack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vcs_repo` <a name="put_vcs_repo" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo"></a>

```python
def put_vcs_repo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  oauth_token_id: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo.parameter.identifier"></a>

- *Type:* str

Identifier of the VCS repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#identifier Stack#identifier}

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo.parameter.branch"></a>

- *Type:* str

The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#branch Stack#branch}

---

###### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo.parameter.githubAppInstallationId"></a>

- *Type:* str

The installation ID of the GitHub App.

This conflicts with `oauth_token_id` and can only be used if `oauth_token_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#github_app_installation_id Stack#github_app_installation_id}

---

###### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo.parameter.oauthTokenId"></a>

- *Type:* str

The VCS Connection to use.

This ID can be obtained from a `tfe_oauth_client` resource. This conflicts with `github_app_installation_id` and can only be used if `github_app_installation_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#oauth_token_id Stack#oauth_token_id}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.stack.Stack.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_vcs_repo` <a name="reset_vcs_repo" id="@cdktf/provider-tfe.stack.Stack.resetVcsRepo"></a>

```python
def reset_vcs_repo() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.stack.Stack.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.Stack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.stack.Stack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.Stack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.stack.Stack.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.Stack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.Stack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Stack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Stack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Stack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.deploymentNames">deployment_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference">StackVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.vcsRepoInput">vcs_repo_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.stack.Stack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.stack.Stack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.stack.Stack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.stack.Stack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.stack.Stack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.stack.Stack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.stack.Stack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.stack.Stack.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.stack.Stack.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.stack.Stack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.stack.Stack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.stack.Stack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.stack.Stack.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-tfe.stack.Stack.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deployment_names`<sup>Required</sup> <a name="deployment_names" id="@cdktf/provider-tfe.stack.Stack.property.deploymentNames"></a>

```python
deployment_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-tfe.stack.Stack.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.stack.Stack.property.vcsRepo"></a>

```python
vcs_repo: StackVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference">StackVcsRepoOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.stack.Stack.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.stack.Stack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-tfe.stack.Stack.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `vcs_repo_input`<sup>Optional</sup> <a name="vcs_repo_input" id="@cdktf/provider-tfe.stack.Stack.property.vcsRepoInput"></a>

```python
vcs_repo_input: typing.Union[IResolvable, StackVcsRepo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.stack.Stack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.stack.Stack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.stack.Stack.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.stack.Stack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackConfig <a name="StackConfig" id="@cdktf/provider-tfe.stack.StackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.stack.StackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.StackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  description: str = None,
  vcs_repo: StackVcsRepo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.name">name</a></code> | <code>str</code> | Name of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.projectId">project_id</a></code> | <code>str</code> | ID of the project that the Stack belongs to. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.description">description</a></code> | <code>str</code> | Description of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a></code> | vcs_repo block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.stack.StackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.stack.StackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.stack.StackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.stack.StackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.stack.StackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.StackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.stack.StackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.stack.StackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#name Stack#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.stack.StackConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID of the project that the Stack belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#project_id Stack#project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.stack.StackConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#description Stack#description}

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.stack.StackConfig.property.vcsRepo"></a>

```python
vcs_repo: StackVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#vcs_repo Stack#vcs_repo}

---

### StackVcsRepo <a name="StackVcsRepo" id="@cdktf/provider-tfe.stack.StackVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.stack.StackVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.StackVcsRepo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  oauth_token_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.identifier">identifier</a></code> | <code>str</code> | Identifier of the VCS repository. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.branch">branch</a></code> | <code>str</code> | The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main). |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | The installation ID of the GitHub App. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | The VCS Connection to use. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Identifier of the VCS repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#identifier Stack#identifier}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.branch"></a>

```python
branch: str
```

- *Type:* str

The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#branch Stack#branch}

---

##### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

The installation ID of the GitHub App.

This conflicts with `oauth_token_id` and can only be used if `oauth_token_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#github_app_installation_id Stack#github_app_installation_id}

---

##### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

The VCS Connection to use.

This ID can be obtained from a `tfe_oauth_client` resource. This conflicts with `github_app_installation_id` and can only be used if `github_app_installation_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/stack#oauth_token_id Stack#oauth_token_id}

---

## Classes <a name="Classes" id="Classes"></a>

### StackVcsRepoOutputReference <a name="StackVcsRepoOutputReference" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import stack

stack.StackVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetGithubAppInstallationId">reset_github_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetOauthTokenId">reset_oauth_token_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_github_app_installation_id` <a name="reset_github_app_installation_id" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```python
def reset_github_app_installation_id() -> None
```

##### `reset_oauth_token_id` <a name="reset_oauth_token_id" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetOauthTokenId"></a>

```python
def reset_oauth_token_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationIdInput">github_app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenIdInput">oauth_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `github_app_installation_id_input`<sup>Optional</sup> <a name="github_app_installation_id_input" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```python
github_app_installation_id_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `oauth_token_id_input`<sup>Optional</sup> <a name="oauth_token_id_input" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```python
oauth_token_id_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackVcsRepo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>]

---



