# `hyokConfiguration` Submodule <a name="`hyokConfiguration` Submodule" id="@cdktf/provider-tfe.hyokConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyokConfiguration <a name="HyokConfiguration" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfiguration;

HyokConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentPoolId(java.lang.String)
    .kekId(java.lang.String)
    .name(java.lang.String)
    .oidcConfigurationId(java.lang.String)
    .oidcConfigurationType(java.lang.String)
//  .kmsOptions(HyokConfigurationKmsOptions)
//  .organization(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kekId">kekId</a></code> | <code>java.lang.String</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationId">oidcConfigurationId</a></code> | <code>java.lang.String</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationType">oidcConfigurationType</a></code> | <code>java.lang.String</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kmsOptions">kmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.agentPoolId"></a>

- *Type:* java.lang.String

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `kekId`<sup>Required</sup> <a name="kekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kekId"></a>

- *Type:* java.lang.String

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `oidcConfigurationId`<sup>Required</sup> <a name="oidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationId"></a>

- *Type:* java.lang.String

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `oidcConfigurationType`<sup>Required</sup> <a name="oidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.oidcConfigurationType"></a>

- *Type:* java.lang.String

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `kmsOptions`<sup>Optional</sup> <a name="kmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.kmsOptions"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions">putKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions">resetKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsOptions` <a name="putKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions"></a>

```java
public void putKmsOptions(HyokConfigurationKmsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `resetKmsOptions` <a name="resetKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions"></a>

```java
public void resetKmsOptions()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization"></a>

```java
public void resetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfiguration;

HyokConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfiguration;

HyokConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfiguration;

HyokConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfiguration;

HyokConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HyokConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HyokConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HyokConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HyokConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions">kmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput">agentPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput">kekIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput">kmsOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput">oidcConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput">oidcConfigurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId">kekId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId">oidcConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType">oidcConfigurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsOptions`<sup>Required</sup> <a name="kmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions"></a>

```java
public HyokConfigurationKmsOptionsOutputReference getKmsOptions();
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a>

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="agentPoolIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput"></a>

```java
public java.lang.String getAgentPoolIdInput();
```

- *Type:* java.lang.String

---

##### `kekIdInput`<sup>Optional</sup> <a name="kekIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput"></a>

```java
public java.lang.String getKekIdInput();
```

- *Type:* java.lang.String

---

##### `kmsOptionsInput`<sup>Optional</sup> <a name="kmsOptionsInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput"></a>

```java
public IResolvable|HyokConfigurationKmsOptions getKmsOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oidcConfigurationIdInput`<sup>Optional</sup> <a name="oidcConfigurationIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput"></a>

```java
public java.lang.String getOidcConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `oidcConfigurationTypeInput`<sup>Optional</sup> <a name="oidcConfigurationTypeInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput"></a>

```java
public java.lang.String getOidcConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId"></a>

```java
public java.lang.String getAgentPoolId();
```

- *Type:* java.lang.String

---

##### `kekId`<sup>Required</sup> <a name="kekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId"></a>

```java
public java.lang.String getKekId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidcConfigurationId`<sup>Required</sup> <a name="oidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId"></a>

```java
public java.lang.String getOidcConfigurationId();
```

- *Type:* java.lang.String

---

##### `oidcConfigurationType`<sup>Required</sup> <a name="oidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType"></a>

```java
public java.lang.String getOidcConfigurationType();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HyokConfigurationConfig <a name="HyokConfigurationConfig" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfigurationConfig;

HyokConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentPoolId(java.lang.String)
    .kekId(java.lang.String)
    .name(java.lang.String)
    .oidcConfigurationId(java.lang.String)
    .oidcConfigurationType(java.lang.String)
//  .kmsOptions(HyokConfigurationKmsOptions)
//  .organization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId">kekId</a></code> | <code>java.lang.String</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId">oidcConfigurationId</a></code> | <code>java.lang.String</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType">oidcConfigurationType</a></code> | <code>java.lang.String</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions">kmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId"></a>

```java
public java.lang.String getAgentPoolId();
```

- *Type:* java.lang.String

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `kekId`<sup>Required</sup> <a name="kekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId"></a>

```java
public java.lang.String getKekId();
```

- *Type:* java.lang.String

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `oidcConfigurationId`<sup>Required</sup> <a name="oidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId"></a>

```java
public java.lang.String getOidcConfigurationId();
```

- *Type:* java.lang.String

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `oidcConfigurationType`<sup>Required</sup> <a name="oidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType"></a>

```java
public java.lang.String getOidcConfigurationType();
```

- *Type:* java.lang.String

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `kmsOptions`<sup>Optional</sup> <a name="kmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions"></a>

```java
public HyokConfigurationKmsOptions getKmsOptions();
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

### HyokConfigurationKmsOptions <a name="HyokConfigurationKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfigurationKmsOptions;

HyokConfigurationKmsOptions.builder()
//  .keyLocation(java.lang.String)
//  .keyRegion(java.lang.String)
//  .keyRingId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation">keyLocation</a></code> | <code>java.lang.String</code> | The location in which the GCP key ring exists. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion">keyRegion</a></code> | <code>java.lang.String</code> | The AWS region where your key is located. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId">keyRingId</a></code> | <code>java.lang.String</code> | The root resource for Google Cloud KMS keys and key versions. |

---

##### `keyLocation`<sup>Optional</sup> <a name="keyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation"></a>

```java
public java.lang.String getKeyLocation();
```

- *Type:* java.lang.String

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

##### `keyRegion`<sup>Optional</sup> <a name="keyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion"></a>

```java
public java.lang.String getKeyRegion();
```

- *Type:* java.lang.String

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

##### `keyRingId`<sup>Optional</sup> <a name="keyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId"></a>

```java
public java.lang.String getKeyRingId();
```

- *Type:* java.lang.String

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyokConfigurationKmsOptionsOutputReference <a name="HyokConfigurationKmsOptionsOutputReference" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.hyok_configuration.HyokConfigurationKmsOptionsOutputReference;

new HyokConfigurationKmsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation">resetKeyLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion">resetKeyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId">resetKeyRingId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyLocation` <a name="resetKeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation"></a>

```java
public void resetKeyLocation()
```

##### `resetKeyRegion` <a name="resetKeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion"></a>

```java
public void resetKeyRegion()
```

##### `resetKeyRingId` <a name="resetKeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId"></a>

```java
public void resetKeyRingId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput">keyLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput">keyRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput">keyRingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation">keyLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion">keyRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId">keyRingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyLocationInput`<sup>Optional</sup> <a name="keyLocationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput"></a>

```java
public java.lang.String getKeyLocationInput();
```

- *Type:* java.lang.String

---

##### `keyRegionInput`<sup>Optional</sup> <a name="keyRegionInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput"></a>

```java
public java.lang.String getKeyRegionInput();
```

- *Type:* java.lang.String

---

##### `keyRingIdInput`<sup>Optional</sup> <a name="keyRingIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput"></a>

```java
public java.lang.String getKeyRingIdInput();
```

- *Type:* java.lang.String

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation"></a>

```java
public java.lang.String getKeyLocation();
```

- *Type:* java.lang.String

---

##### `keyRegion`<sup>Required</sup> <a name="keyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion"></a>

```java
public java.lang.String getKeyRegion();
```

- *Type:* java.lang.String

---

##### `keyRingId`<sup>Required</sup> <a name="keyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId"></a>

```java
public java.lang.String getKeyRingId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|HyokConfigurationKmsOptions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---



