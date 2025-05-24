# `teamNotificationConfiguration` Submodule <a name="`teamNotificationConfiguration` Submodule" id="@cdktf/provider-tfe.teamNotificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationConfiguration <a name="TeamNotificationConfiguration" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration tfe_team_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfiguration;

TeamNotificationConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .destinationType(java.lang.String)
    .name(java.lang.String)
    .teamId(java.lang.String)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .emailUserIds(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .token(java.lang.String)
//  .tokenWo(java.lang.String)
//  .triggers(java.util.List<java.lang.String>)
//  .url(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.destinationType">destinationType</a></code> | <code>java.lang.String</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailUserIds">emailUserIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.destinationType"></a>

- *Type:* java.lang.String

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `emailUserIds`<sup>Optional</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.emailUserIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.token"></a>

- *Type:* java.lang.String

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value *must not* be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.tokenWo"></a>

- *Type:* java.lang.String

A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#token_wo TeamNotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.triggers"></a>

- *Type:* java.util.List<java.lang.String>

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds">resetEmailUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetEmailUserIds` <a name="resetEmailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds"></a>

```java
public void resetEmailUserIds()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo"></a>

```java
public void resetTokenWo()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers"></a>

```java
public void resetTriggers()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl"></a>

```java
public void resetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfiguration;

TeamNotificationConfiguration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfiguration;

TeamNotificationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfiguration;

TeamNotificationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfiguration;

TeamNotificationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamNotificationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamNotificationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamNotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TeamNotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput">emailUserIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput">tokenWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput">triggersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds">emailUserIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailUserIdsInput`<sup>Optional</sup> <a name="emailUserIdsInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput"></a>

```java
public java.util.List<java.lang.String> getEmailUserIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput"></a>

```java
public java.lang.String getTokenWoInput();
```

- *Type:* java.lang.String

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput"></a>

```java
public java.util.List<java.lang.String> getTriggersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailUserIds`<sup>Required</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds"></a>

```java
public java.util.List<java.lang.String> getEmailUserIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenWo`<sup>Required</sup> <a name="tokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo"></a>

```java
public java.lang.String getTokenWo();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers"></a>

```java
public java.util.List<java.lang.String> getTriggers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationConfigurationConfig <a name="TeamNotificationConfigurationConfig" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_notification_configuration.TeamNotificationConfigurationConfig;

TeamNotificationConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .destinationType(java.lang.String)
    .name(java.lang.String)
    .teamId(java.lang.String)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .emailUserIds(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .token(java.lang.String)
//  .tokenWo(java.lang.String)
//  .triggers(java.util.List<java.lang.String>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds">emailUserIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token">token</a></code> | <code>java.lang.String</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url">url</a></code> | <code>java.lang.String</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `emailUserIds`<sup>Optional</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds"></a>

```java
public java.util.List<java.lang.String> getEmailUserIds();
```

- *Type:* java.util.List<java.lang.String>

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value *must not* be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo"></a>

```java
public java.lang.String getTokenWo();
```

- *Type:* java.lang.String

A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#token_wo TeamNotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers"></a>

```java
public java.util.List<java.lang.String> getTriggers();
```

- *Type:* java.util.List<java.lang.String>

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---



