# `tfe_notification_configuration`

Refer to the Terraform Registory for docs: [`tfe_notification_configuration`](https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration).

# `notificationConfiguration` Submodule <a name="`notificationConfiguration` Submodule" id="@cdktf/provider-tfe.notificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationConfiguration <a name="NotificationConfiguration" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration tfe_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_type: str,
  name: str,
  workspace_id: str,
  email_addresses: typing.List[str] = None,
  email_user_ids: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  token: str = None,
  triggers: typing.List[str] = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#destination_type NotificationConfiguration#destination_type}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#name NotificationConfiguration#name}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#workspace_id NotificationConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_addresses NotificationConfiguration#email_addresses}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#enabled NotificationConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#id NotificationConfiguration#id}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#token NotificationConfiguration#token}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.triggers">triggers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#triggers NotificationConfiguration#triggers}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#url NotificationConfiguration#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.destinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#destination_type NotificationConfiguration#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#name NotificationConfiguration#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#workspace_id NotificationConfiguration#workspace_id}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_addresses NotificationConfiguration#email_addresses}.

---

##### `email_user_ids`<sup>Optional</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.emailUserIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#enabled NotificationConfiguration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#id NotificationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#token NotificationConfiguration#token}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.triggers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#triggers NotificationConfiguration#triggers}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#url NotificationConfiguration#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailUserIds">reset_email_user_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTriggers">reset_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_email_user_ids` <a name="reset_email_user_ids" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailUserIds"></a>

```python
def reset_email_user_ids() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTriggers"></a>

```python
def reset_triggers() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIdsInput">email_user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggersInput">triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggers">triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_user_ids_input`<sup>Optional</sup> <a name="email_user_ids_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIdsInput"></a>

```python
email_user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggersInput"></a>

```python
triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_user_ids`<sup>Required</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIds"></a>

```python
email_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggers"></a>

```python
triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationConfigurationConfig <a name="NotificationConfigurationConfig" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import notification_configuration

notificationConfiguration.NotificationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_type: str,
  name: str,
  workspace_id: str,
  email_addresses: typing.List[str] = None,
  email_user_ids: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  token: str = None,
  triggers: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#destination_type NotificationConfiguration#destination_type}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#name NotificationConfiguration#name}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#workspace_id NotificationConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_addresses NotificationConfiguration#email_addresses}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#enabled NotificationConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#id NotificationConfiguration#id}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#token NotificationConfiguration#token}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.triggers">triggers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#triggers NotificationConfiguration#triggers}. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#url NotificationConfiguration#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#destination_type NotificationConfiguration#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#name NotificationConfiguration#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#workspace_id NotificationConfiguration#workspace_id}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_addresses NotificationConfiguration#email_addresses}.

---

##### `email_user_ids`<sup>Optional</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailUserIds"></a>

```python
email_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#enabled NotificationConfiguration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#id NotificationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#token NotificationConfiguration#token}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.triggers"></a>

```python
triggers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#triggers NotificationConfiguration#triggers}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/notification_configuration#url NotificationConfiguration#url}.

---



