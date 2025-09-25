# `dataTfeWorkspaceIds` Submodule <a name="`dataTfeWorkspaceIds` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspaceIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspaceIds <a name="DataTfeWorkspaceIds" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids tfe_workspace_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIds;

DataTfeWorkspaceIds.Builder.create(Construct scope, java.lang.String id)
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
//  .excludeTags(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .names(java.util.List<java.lang.String>)
//  .organization(java.lang.String)
//  .tagFilters(DataTfeWorkspaceIdsTagFilters)
//  .tagNames(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.excludeTags">excludeTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | tag_filters block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `excludeTags`<sup>Optional</sup> <a name="excludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.excludeTags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.names"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.tagFilters"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_filters DataTfeWorkspaceIds#tag_filters}

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.tagNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags">resetExcludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames">resetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagFilters">resetTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames">resetTagNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters"></a>

```java
public void putTagFilters(DataTfeWorkspaceIdsTagFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---

##### `resetExcludeTags` <a name="resetExcludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags"></a>

```java
public void resetExcludeTags()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId"></a>

```java
public void resetId()
```

##### `resetNames` <a name="resetNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames"></a>

```java
public void resetNames()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagFilters"></a>

```java
public void resetTagFilters()
```

##### `resetTagNames` <a name="resetTagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames"></a>

```java
public void resetTagNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIds;

DataTfeWorkspaceIds.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIds;

DataTfeWorkspaceIds.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIds;

DataTfeWorkspaceIds.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIds;

DataTfeWorkspaceIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataTfeWorkspaceIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataTfeWorkspaceIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataTfeWorkspaceIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspaceIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames">fullNames</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids">ids</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference">DataTfeWorkspaceIdsTagFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput">excludeTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput">namesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFiltersInput">tagFiltersInput</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput">tagNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags">excludeTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `fullNames`<sup>Required</sup> <a name="fullNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames"></a>

```java
public StringMap getFullNames();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids"></a>

```java
public StringMap getIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFilters"></a>

```java
public DataTfeWorkspaceIdsTagFiltersOutputReference getTagFilters();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference">DataTfeWorkspaceIdsTagFiltersOutputReference</a>

---

##### `excludeTagsInput`<sup>Optional</sup> <a name="excludeTagsInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput"></a>

```java
public java.util.List<java.lang.String> getNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFiltersInput"></a>

```java
public DataTfeWorkspaceIdsTagFilters getTagFiltersInput();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---

##### `tagNamesInput`<sup>Optional</sup> <a name="tagNamesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput"></a>

```java
public java.util.List<java.lang.String> getTagNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeTags`<sup>Required</sup> <a name="excludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags"></a>

```java
public java.util.List<java.lang.String> getExcludeTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames"></a>

```java
public java.util.List<java.lang.String> getTagNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceIdsConfig <a name="DataTfeWorkspaceIdsConfig" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIdsConfig;

DataTfeWorkspaceIdsConfig.builder()
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
//  .excludeTags(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .names(java.util.List<java.lang.String>)
//  .organization(java.lang.String)
//  .tagFilters(DataTfeWorkspaceIdsTagFilters)
//  .tagNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags">excludeTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | tag_filters block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `excludeTags`<sup>Optional</sup> <a name="excludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags"></a>

```java
public java.util.List<java.lang.String> getExcludeTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagFilters"></a>

```java
public DataTfeWorkspaceIdsTagFilters getTagFilters();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_filters DataTfeWorkspaceIds#tag_filters}

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames"></a>

```java
public java.util.List<java.lang.String> getTagNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}.

---

### DataTfeWorkspaceIdsTagFilters <a name="DataTfeWorkspaceIdsTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIdsTagFilters;

DataTfeWorkspaceIdsTagFilters.builder()
//  .exclude(java.util.Map<java.lang.String, java.lang.String>)
//  .include(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.exclude">exclude</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude DataTfeWorkspaceIds#exclude}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.include">include</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#include DataTfeWorkspaceIds#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.exclude"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExclude();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude DataTfeWorkspaceIds#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.include"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInclude();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#include DataTfeWorkspaceIds#include}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTfeWorkspaceIdsTagFiltersOutputReference <a name="DataTfeWorkspaceIdsTagFiltersOutputReference" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace_ids.DataTfeWorkspaceIdsTagFiltersOutputReference;

new DataTfeWorkspaceIdsTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.exclude">exclude</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.include">include</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.excludeInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.includeInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.exclude"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExclude();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.include"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInclude();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.internalValue"></a>

```java
public DataTfeWorkspaceIdsTagFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---



