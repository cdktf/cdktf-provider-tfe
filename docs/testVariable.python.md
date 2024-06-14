# `testVariable` Submodule <a name="`testVariable` Submodule" id="@cdktf/provider-tfe.testVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TestVariable <a name="TestVariable" id="@cdktf/provider-tfe.testVariable.TestVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable tfe_test_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  key: str,
  module_name: str,
  module_provider: str,
  organization: str,
  description: str = None,
  hcl: typing.Union[bool, IResolvable] = None,
  sensitive: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.category">category</a></code> | <code>str</code> | Whether this is a Terraform or environment variable. Valid values are "terraform" or "env". |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.key">key</a></code> | <code>str</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_name TestVariable#module_name}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.moduleProvider">module_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_provider TestVariable#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#organization TestVariable#organization}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#description TestVariable#description}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.hcl">hcl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#hcl TestVariable#hcl}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.sensitive">sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#sensitive TestVariable#sensitive}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.value">value</a></code> | <code>str</code> | Value of the variable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.category"></a>

- *Type:* str

Whether this is a Terraform or environment variable. Valid values are "terraform" or "env".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#category TestVariable#category}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.key"></a>

- *Type:* str

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#key TestVariable#key}

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_name TestVariable#module_name}.

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.moduleProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_provider TestVariable#module_provider}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#organization TestVariable#organization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#description TestVariable#description}.

---

##### `hcl`<sup>Optional</sup> <a name="hcl" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.hcl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#hcl TestVariable#hcl}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.sensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#sensitive TestVariable#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.value"></a>

- *Type:* str

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#value TestVariable#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetHcl">reset_hcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetSensitive">reset_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.testVariable.TestVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.testVariable.TestVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.testVariable.TestVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.testVariable.TestVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.testVariable.TestVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.testVariable.TestVariable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.testVariable.TestVariable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hcl` <a name="reset_hcl" id="@cdktf/provider-tfe.testVariable.TestVariable.resetHcl"></a>

```python
def reset_hcl() -> None
```

##### `reset_sensitive` <a name="reset_sensitive" id="@cdktf/provider-tfe.testVariable.TestVariable.resetSensitive"></a>

```python
def reset_sensitive() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-tfe.testVariable.TestVariable.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TestVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.testVariable.TestVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TestVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TestVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TestVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TestVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.readableValue">readable_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.hclInput">hcl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProviderInput">module_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.sensitiveInput">sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.hcl">hcl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProvider">module_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.sensitive">sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.testVariable.TestVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.testVariable.TestVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.testVariable.TestVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.testVariable.TestVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.testVariable.TestVariable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.testVariable.TestVariable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.testVariable.TestVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.testVariable.TestVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.testVariable.TestVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.testVariable.TestVariable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `readable_value`<sup>Required</sup> <a name="readable_value" id="@cdktf/provider-tfe.testVariable.TestVariable.property.readableValue"></a>

```python
readable_value: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hcl_input`<sup>Optional</sup> <a name="hcl_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.hclInput"></a>

```python
hcl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `module_provider_input`<sup>Optional</sup> <a name="module_provider_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProviderInput"></a>

```python
module_provider_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `sensitive_input`<sup>Optional</sup> <a name="sensitive_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.sensitiveInput"></a>

```python
sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-tfe.testVariable.TestVariable.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.testVariable.TestVariable.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.testVariable.TestVariable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-tfe.testVariable.TestVariable.property.hcl"></a>

```python
hcl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.testVariable.TestVariable.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.testVariable.TestVariable.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.testVariable.TestVariable.property.sensitive"></a>

```python
sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.testVariable.TestVariable.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.testVariable.TestVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TestVariableConfig <a name="TestVariableConfig" id="@cdktf/provider-tfe.testVariable.TestVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import test_variable

testVariable.TestVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  key: str,
  module_name: str,
  module_provider: str,
  organization: str,
  description: str = None,
  hcl: typing.Union[bool, IResolvable] = None,
  sensitive: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.category">category</a></code> | <code>str</code> | Whether this is a Terraform or environment variable. Valid values are "terraform" or "env". |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.key">key</a></code> | <code>str</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_name TestVariable#module_name}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleProvider">module_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_provider TestVariable#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#organization TestVariable#organization}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#description TestVariable#description}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.hcl">hcl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#hcl TestVariable#hcl}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.sensitive">sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#sensitive TestVariable#sensitive}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.value">value</a></code> | <code>str</code> | Value of the variable. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Whether this is a Terraform or environment variable. Valid values are "terraform" or "env".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#category TestVariable#category}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#key TestVariable#key}

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_name TestVariable#module_name}.

---

##### `module_provider`<sup>Required</sup> <a name="module_provider" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleProvider"></a>

```python
module_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#module_provider TestVariable#module_provider}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#organization TestVariable#organization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#description TestVariable#description}.

---

##### `hcl`<sup>Optional</sup> <a name="hcl" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.hcl"></a>

```python
hcl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#hcl TestVariable#hcl}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.sensitive"></a>

```python
sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#sensitive TestVariable#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.56.0/docs/resources/test_variable#value TestVariable#value}

---



