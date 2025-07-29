# `teamNotificationConfiguration` Submodule <a name="`teamNotificationConfiguration` Submodule" id="@cdktf/provider-tfe.teamNotificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationConfiguration <a name="TeamNotificationConfiguration" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration tfe_team_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfiguration(
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
  team_id: str,
  email_addresses: typing.List[str] = None,
  email_user_ids: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  token: str = None,
  token_wo: str = None,
  triggers: typing.List[str] = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.token">token</a></code> | <code>str</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.tokenWo">token_wo</a></code> | <code>str</code> | A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.triggers">triggers</a></code> | <code>typing.List[str]</code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.url">url</a></code> | <code>str</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.destinationType"></a>

- *Type:* str

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.teamId"></a>

- *Type:* str

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `email_user_ids`<sup>Optional</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailUserIds"></a>

- *Type:* typing.List[str]

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.token"></a>

- *Type:* str

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value *must not* be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `token_wo`<sup>Optional</sup> <a name="token_wo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.tokenWo"></a>

- *Type:* str

A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#token_wo TeamNotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.triggers"></a>

- *Type:* typing.List[str]

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.url"></a>

- *Type:* str

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds">reset_email_user_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo">reset_token_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers">reset_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_email_user_ids` <a name="reset_email_user_ids" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds"></a>

```python
def reset_email_user_ids() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_token_wo` <a name="reset_token_wo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo"></a>

```python
def reset_token_wo() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers"></a>

```python
def reset_triggers() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamNotificationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamNotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamNotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput">email_user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput">token_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput">triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo">token_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers">triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_user_ids_input`<sup>Optional</sup> <a name="email_user_ids_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput"></a>

```python
email_user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token_wo_input`<sup>Optional</sup> <a name="token_wo_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput"></a>

```python
token_wo_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput"></a>

```python
triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_user_ids`<sup>Required</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds"></a>

```python
email_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_wo`<sup>Required</sup> <a name="token_wo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo"></a>

```python
token_wo: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers"></a>

```python
triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationConfigurationConfig <a name="TeamNotificationConfigurationConfig" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team_notification_configuration

teamNotificationConfiguration.TeamNotificationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_type: str,
  name: str,
  team_id: str,
  email_addresses: typing.List[str] = None,
  email_user_ids: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  token: str = None,
  token_wo: str = None,
  triggers: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType">destination_type</a></code> | <code>str</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name">name</a></code> | <code>str</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId">team_id</a></code> | <code>str</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds">email_user_ids</a></code> | <code>typing.List[str]</code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token">token</a></code> | <code>str</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo">token_wo</a></code> | <code>str</code> | A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers">triggers</a></code> | <code>typing.List[str]</code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url">url</a></code> | <code>str</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `email_user_ids`<sup>Optional</sup> <a name="email_user_ids" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds"></a>

```python
email_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token"></a>

```python
token: str
```

- *Type:* str

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value *must not* be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `token_wo`<sup>Optional</sup> <a name="token_wo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo"></a>

```python
token_wo: str
```

- *Type:* str

A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#token_wo TeamNotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers"></a>

```python
triggers: typing.List[str]
```

- *Type:* typing.List[str]

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---



