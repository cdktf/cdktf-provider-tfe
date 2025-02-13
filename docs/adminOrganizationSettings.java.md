# `adminOrganizationSettings` Submodule <a name="`adminOrganizationSettings` Submodule" id="@cdktf/provider-tfe.adminOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminOrganizationSettings <a name="AdminOrganizationSettings" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings tfe_admin_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettings;

AdminOrganizationSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .accessBetaTools(java.lang.Boolean)
//  .accessBetaTools(IResolvable)
//  .globalModuleSharing(java.lang.Boolean)
//  .globalModuleSharing(IResolvable)
//  .id(java.lang.String)
//  .moduleSharingConsumerOrganizations(java.util.List<java.lang.String>)
//  .organization(java.lang.String)
//  .workspaceLimit(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.accessBetaTools">accessBetaTools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.globalModuleSharing">globalModuleSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.moduleSharingConsumerOrganizations">moduleSharingConsumerOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.workspaceLimit">workspaceLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessBetaTools`<sup>Optional</sup> <a name="accessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.accessBetaTools"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}.

---

##### `globalModuleSharing`<sup>Optional</sup> <a name="globalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.globalModuleSharing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleSharingConsumerOrganizations`<sup>Optional</sup> <a name="moduleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.moduleSharingConsumerOrganizations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}.

---

##### `workspaceLimit`<sup>Optional</sup> <a name="workspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.workspaceLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools">resetAccessBetaTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing">resetGlobalModuleSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations">resetModuleSharingConsumerOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit">resetWorkspaceLimit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessBetaTools` <a name="resetAccessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools"></a>

```java
public void resetAccessBetaTools()
```

##### `resetGlobalModuleSharing` <a name="resetGlobalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing"></a>

```java
public void resetGlobalModuleSharing()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId"></a>

```java
public void resetId()
```

##### `resetModuleSharingConsumerOrganizations` <a name="resetModuleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations"></a>

```java
public void resetModuleSharingConsumerOrganizations()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetWorkspaceLimit` <a name="resetWorkspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit"></a>

```java
public void resetWorkspaceLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdminOrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettings;

AdminOrganizationSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettings;

AdminOrganizationSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettings;

AdminOrganizationSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettings;

AdminOrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AdminOrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AdminOrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AdminOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AdminOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AdminOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled">ssoEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput">accessBetaToolsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput">globalModuleSharingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput">moduleSharingConsumerOrganizationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput">workspaceLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools">accessBetaTools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing">globalModuleSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations">moduleSharingConsumerOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit">workspaceLimit</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ssoEnabled`<sup>Required</sup> <a name="ssoEnabled" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled"></a>

```java
public IResolvable getSsoEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `accessBetaToolsInput`<sup>Optional</sup> <a name="accessBetaToolsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput"></a>

```java
public java.lang.Object getAccessBetaToolsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalModuleSharingInput`<sup>Optional</sup> <a name="globalModuleSharingInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput"></a>

```java
public java.lang.Object getGlobalModuleSharingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `moduleSharingConsumerOrganizationsInput`<sup>Optional</sup> <a name="moduleSharingConsumerOrganizationsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput"></a>

```java
public java.util.List<java.lang.String> getModuleSharingConsumerOrganizationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `workspaceLimitInput`<sup>Optional</sup> <a name="workspaceLimitInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput"></a>

```java
public java.lang.Number getWorkspaceLimitInput();
```

- *Type:* java.lang.Number

---

##### `accessBetaTools`<sup>Required</sup> <a name="accessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools"></a>

```java
public java.lang.Object getAccessBetaTools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalModuleSharing`<sup>Required</sup> <a name="globalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing"></a>

```java
public java.lang.Object getGlobalModuleSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `moduleSharingConsumerOrganizations`<sup>Required</sup> <a name="moduleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations"></a>

```java
public java.util.List<java.lang.String> getModuleSharingConsumerOrganizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `workspaceLimit`<sup>Required</sup> <a name="workspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit"></a>

```java
public java.lang.Number getWorkspaceLimit();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdminOrganizationSettingsConfig <a name="AdminOrganizationSettingsConfig" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.admin_organization_settings.AdminOrganizationSettingsConfig;

AdminOrganizationSettingsConfig.builder()
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
//  .accessBetaTools(java.lang.Boolean)
//  .accessBetaTools(IResolvable)
//  .globalModuleSharing(java.lang.Boolean)
//  .globalModuleSharing(IResolvable)
//  .id(java.lang.String)
//  .moduleSharingConsumerOrganizations(java.util.List<java.lang.String>)
//  .organization(java.lang.String)
//  .workspaceLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools">accessBetaTools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing">globalModuleSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations">moduleSharingConsumerOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit">workspaceLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessBetaTools`<sup>Optional</sup> <a name="accessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools"></a>

```java
public java.lang.Object getAccessBetaTools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}.

---

##### `globalModuleSharing`<sup>Optional</sup> <a name="globalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing"></a>

```java
public java.lang.Object getGlobalModuleSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleSharingConsumerOrganizations`<sup>Optional</sup> <a name="moduleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations"></a>

```java
public java.util.List<java.lang.String> getModuleSharingConsumerOrganizations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}.

---

##### `workspaceLimit`<sup>Optional</sup> <a name="workspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit"></a>

```java
public java.lang.Number getWorkspaceLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}.

---



