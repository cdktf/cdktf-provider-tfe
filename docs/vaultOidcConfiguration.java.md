# `vaultOidcConfiguration` Submodule <a name="`vaultOidcConfiguration` Submodule" id="@cdktf/provider-tfe.vaultOidcConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultOidcConfiguration <a name="VaultOidcConfiguration" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration tfe_vault_oidc_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfiguration;

VaultOidcConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .namespace(java.lang.String)
    .roleName(java.lang.String)
//  .authPath(java.lang.String)
//  .encodedCacert(java.lang.String)
//  .organization(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The full address of your Vault instance. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace your JWT auth path is mounted in. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.authPath">authPath</a></code> | <code>java.lang.String</code> | The mounting path of JWT auth path of JWT auth. Defaults to "jwt". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.encodedCacert">encodedCacert</a></code> | <code>java.lang.String</code> | A base64 encoded certificate which can be used to authenticate your Vault certificate. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization to which the TFE Vault OIDC configuration belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The full address of your Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#address VaultOidcConfiguration#address}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace your JWT auth path is mounted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#namespace VaultOidcConfiguration#namespace}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#role_name VaultOidcConfiguration#role_name}

---

##### `authPath`<sup>Optional</sup> <a name="authPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.authPath"></a>

- *Type:* java.lang.String

The mounting path of JWT auth path of JWT auth. Defaults to "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#auth_path VaultOidcConfiguration#auth_path}

---

##### `encodedCacert`<sup>Optional</sup> <a name="encodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.encodedCacert"></a>

- *Type:* java.lang.String

A base64 encoded certificate which can be used to authenticate your Vault certificate.

Only needed for self-hosted Vault Enterprise instances with a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#encoded_cacert VaultOidcConfiguration#encoded_cacert}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Name of the organization to which the TFE Vault OIDC configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#organization VaultOidcConfiguration#organization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath">resetAuthPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert">resetEncodedCacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthPath` <a name="resetAuthPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath"></a>

```java
public void resetAuthPath()
```

##### `resetEncodedCacert` <a name="resetEncodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert"></a>

```java
public void resetEncodedCacert()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization"></a>

```java
public void resetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfiguration;

VaultOidcConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfiguration;

VaultOidcConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfiguration;

VaultOidcConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfiguration;

VaultOidcConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultOidcConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultOidcConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultOidcConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultOidcConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput">authPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput">encodedCacertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath">authPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert">encodedCacert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `authPathInput`<sup>Optional</sup> <a name="authPathInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput"></a>

```java
public java.lang.String getAuthPathInput();
```

- *Type:* java.lang.String

---

##### `encodedCacertInput`<sup>Optional</sup> <a name="encodedCacertInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput"></a>

```java
public java.lang.String getEncodedCacertInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `authPath`<sup>Required</sup> <a name="authPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath"></a>

```java
public java.lang.String getAuthPath();
```

- *Type:* java.lang.String

---

##### `encodedCacert`<sup>Required</sup> <a name="encodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert"></a>

```java
public java.lang.String getEncodedCacert();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultOidcConfigurationConfig <a name="VaultOidcConfigurationConfig" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.vault_oidc_configuration.VaultOidcConfigurationConfig;

VaultOidcConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .namespace(java.lang.String)
    .roleName(java.lang.String)
//  .authPath(java.lang.String)
//  .encodedCacert(java.lang.String)
//  .organization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address">address</a></code> | <code>java.lang.String</code> | The full address of your Vault instance. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace your JWT auth path is mounted in. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath">authPath</a></code> | <code>java.lang.String</code> | The mounting path of JWT auth path of JWT auth. Defaults to "jwt". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert">encodedCacert</a></code> | <code>java.lang.String</code> | A base64 encoded certificate which can be used to authenticate your Vault certificate. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization to which the TFE Vault OIDC configuration belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The full address of your Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#address VaultOidcConfiguration#address}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace your JWT auth path is mounted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#namespace VaultOidcConfiguration#namespace}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#role_name VaultOidcConfiguration#role_name}

---

##### `authPath`<sup>Optional</sup> <a name="authPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath"></a>

```java
public java.lang.String getAuthPath();
```

- *Type:* java.lang.String

The mounting path of JWT auth path of JWT auth. Defaults to "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#auth_path VaultOidcConfiguration#auth_path}

---

##### `encodedCacert`<sup>Optional</sup> <a name="encodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert"></a>

```java
public java.lang.String getEncodedCacert();
```

- *Type:* java.lang.String

A base64 encoded certificate which can be used to authenticate your Vault certificate.

Only needed for self-hosted Vault Enterprise instances with a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#encoded_cacert VaultOidcConfiguration#encoded_cacert}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Name of the organization to which the TFE Vault OIDC configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#organization VaultOidcConfiguration#organization}

---



