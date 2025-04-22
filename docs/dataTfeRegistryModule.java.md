# `dataTfeRegistryModule` Submodule <a name="`dataTfeRegistryModule` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryModule <a name="DataTfeRegistryModule" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModule;

DataTfeRegistryModule.Builder.create(Construct scope, java.lang.String id)
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
    .moduleProvider(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
//  .namespace(java.lang.String)
//  .permissions(IResolvable)
//  .permissions(java.util.List<DataTfeRegistryModulePermissions>)
//  .registryName(java.lang.String)
//  .testConfig(IResolvable)
//  .testConfig(java.util.List<DataTfeRegistryModuleTestConfig>)
//  .vcsRepo(IResolvable)
//  .vcsRepo(java.util.List<DataTfeRegistryModuleVcsRepo>)
//  .versionStatuses(IResolvable)
//  .versionStatuses(java.util.List<DataTfeRegistryModuleVersionStatuses>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.moduleProvider">moduleProvider</a></code> | <code>java.lang.String</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.registryName">registryName</a></code> | <code>java.lang.String</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.testConfig">testConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>></code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.vcsRepo">vcsRepo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.versionStatuses">versionStatuses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>></code> | version_statuses block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.moduleProvider"></a>

- *Type:* java.lang.String

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.permissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.registryName"></a>

- *Type:* java.lang.String

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.testConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.vcsRepo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `versionStatuses`<sup>Optional</sup> <a name="versionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.versionStatuses"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>>

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses">putVersionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses">resetVersionStatuses</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions"></a>

```java
public void putPermissions(IResolvable OR java.util.List<DataTfeRegistryModulePermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>>

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig"></a>

```java
public void putTestConfig(IResolvable OR java.util.List<DataTfeRegistryModuleTestConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>>

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo"></a>

```java
public void putVcsRepo(IResolvable OR java.util.List<DataTfeRegistryModuleVcsRepo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>>

---

##### `putVersionStatuses` <a name="putVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses"></a>

```java
public void putVersionStatuses(IResolvable OR java.util.List<DataTfeRegistryModuleVersionStatuses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>>

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName"></a>

```java
public void resetRegistryName()
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig"></a>

```java
public void resetTestConfig()
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo"></a>

```java
public void resetVcsRepo()
```

##### `resetVersionStatuses` <a name="resetVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses"></a>

```java
public void resetVersionStatuses()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModule;

DataTfeRegistryModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModule;

DataTfeRegistryModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModule;

DataTfeRegistryModule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModule;

DataTfeRegistryModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataTfeRegistryModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataTfeRegistryModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataTfeRegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode">noCode</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId">noCodeModuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource">noCodeModuleSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism">publishingMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses">versionStatuses</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput">moduleProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput">permissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput">registryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput">testConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput">vcsRepoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput">versionStatusesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider">moduleProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName">registryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `noCode`<sup>Required</sup> <a name="noCode" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode"></a>

```java
public IResolvable getNoCode();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `noCodeModuleId`<sup>Required</sup> <a name="noCodeModuleId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId"></a>

```java
public java.lang.String getNoCodeModuleId();
```

- *Type:* java.lang.String

---

##### `noCodeModuleSource`<sup>Required</sup> <a name="noCodeModuleSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource"></a>

```java
public java.lang.String getNoCodeModuleSource();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions"></a>

```java
public DataTfeRegistryModulePermissionsList getPermissions();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a>

---

##### `publishingMechanism`<sup>Required</sup> <a name="publishingMechanism" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism"></a>

```java
public java.lang.String getPublishingMechanism();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig"></a>

```java
public DataTfeRegistryModuleTestConfigList getTestConfig();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo"></a>

```java
public DataTfeRegistryModuleVcsRepoList getVcsRepo();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a>

---

##### `versionStatuses`<sup>Required</sup> <a name="versionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses"></a>

```java
public DataTfeRegistryModuleVersionStatusesList getVersionStatuses();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a>

---

##### `moduleProviderInput`<sup>Optional</sup> <a name="moduleProviderInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput"></a>

```java
public java.lang.String getModuleProviderInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput"></a>

```java
public java.lang.Object getPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>>

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput"></a>

```java
public java.lang.String getRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput"></a>

```java
public java.lang.Object getTestConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>>

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput"></a>

```java
public java.lang.Object getVcsRepoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>>

---

##### `versionStatusesInput`<sup>Optional</sup> <a name="versionStatusesInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput"></a>

```java
public java.lang.Object getVersionStatusesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>>

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider"></a>

```java
public java.lang.String getModuleProvider();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryModuleConfig <a name="DataTfeRegistryModuleConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleConfig;

DataTfeRegistryModuleConfig.builder()
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
    .moduleProvider(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
//  .namespace(java.lang.String)
//  .permissions(IResolvable)
//  .permissions(java.util.List<DataTfeRegistryModulePermissions>)
//  .registryName(java.lang.String)
//  .testConfig(IResolvable)
//  .testConfig(java.util.List<DataTfeRegistryModuleTestConfig>)
//  .vcsRepo(IResolvable)
//  .vcsRepo(java.util.List<DataTfeRegistryModuleVcsRepo>)
//  .versionStatuses(IResolvable)
//  .versionStatuses(java.util.List<DataTfeRegistryModuleVersionStatuses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider">moduleProvider</a></code> | <code>java.lang.String</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName">registryName</a></code> | <code>java.lang.String</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig">testConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>></code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo">vcsRepo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses">versionStatuses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>></code> | version_statuses block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider"></a>

```java
public java.lang.String getModuleProvider();
```

- *Type:* java.lang.String

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions"></a>

```java
public java.lang.Object getPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig"></a>

```java
public java.lang.Object getTestConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo"></a>

```java
public java.lang.Object getVcsRepo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `versionStatuses`<sup>Optional</sup> <a name="versionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses"></a>

```java
public java.lang.Object getVersionStatuses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>>

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

### DataTfeRegistryModulePermissions <a name="DataTfeRegistryModulePermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModulePermissions;

DataTfeRegistryModulePermissions.builder()
    .build();
```


### DataTfeRegistryModuleTestConfig <a name="DataTfeRegistryModuleTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleTestConfig;

DataTfeRegistryModuleTestConfig.builder()
    .build();
```


### DataTfeRegistryModuleVcsRepo <a name="DataTfeRegistryModuleVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVcsRepo;

DataTfeRegistryModuleVcsRepo.builder()
    .build();
```


### DataTfeRegistryModuleVersionStatuses <a name="DataTfeRegistryModuleVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVersionStatuses;

DataTfeRegistryModuleVersionStatuses.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryModulePermissionsList <a name="DataTfeRegistryModulePermissionsList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModulePermissionsList;

new DataTfeRegistryModulePermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get"></a>

```java
public DataTfeRegistryModulePermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>>

---


### DataTfeRegistryModulePermissionsOutputReference <a name="DataTfeRegistryModulePermissionsOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModulePermissionsOutputReference;

new DataTfeRegistryModulePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete">canDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync">canResync</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry">canRetry</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canDelete`<sup>Required</sup> <a name="canDelete" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete"></a>

```java
public IResolvable getCanDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `canResync`<sup>Required</sup> <a name="canResync" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync"></a>

```java
public IResolvable getCanResync();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `canRetry`<sup>Required</sup> <a name="canRetry" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry"></a>

```java
public IResolvable getCanRetry();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>

---


### DataTfeRegistryModuleTestConfigList <a name="DataTfeRegistryModuleTestConfigList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleTestConfigList;

new DataTfeRegistryModuleTestConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get"></a>

```java
public DataTfeRegistryModuleTestConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>>

---


### DataTfeRegistryModuleTestConfigOutputReference <a name="DataTfeRegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleTestConfigOutputReference;

new DataTfeRegistryModuleTestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled">testsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testsEnabled`<sup>Required</sup> <a name="testsEnabled" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```java
public IResolvable getTestsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>

---


### DataTfeRegistryModuleVcsRepoList <a name="DataTfeRegistryModuleVcsRepoList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVcsRepoList;

new DataTfeRegistryModuleVcsRepoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get"></a>

```java
public DataTfeRegistryModuleVcsRepoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>>

---


### DataTfeRegistryModuleVcsRepoOutputReference <a name="DataTfeRegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVcsRepoOutputReference;

new DataTfeRegistryModuleVcsRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier">displayIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl">repositoryHttpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider">serviceProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex">tagsRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `displayIdentifier`<sup>Required</sup> <a name="displayIdentifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```java
public java.lang.String getDisplayIdentifier();
```

- *Type:* java.lang.String

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```java
public java.lang.String getGithubAppInstallationId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules"></a>

```java
public IResolvable getIngressSubmodules();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```java
public java.lang.String getOauthTokenId();
```

- *Type:* java.lang.String

---

##### `repositoryHttpUrl`<sup>Required</sup> <a name="repositoryHttpUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl"></a>

```java
public java.lang.String getRepositoryHttpUrl();
```

- *Type:* java.lang.String

---

##### `serviceProvider`<sup>Required</sup> <a name="serviceProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider"></a>

```java
public java.lang.String getServiceProvider();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags"></a>

```java
public IResolvable getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tagsRegex`<sup>Required</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex"></a>

```java
public java.lang.String getTagsRegex();
```

- *Type:* java.lang.String

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>

---


### DataTfeRegistryModuleVersionStatusesList <a name="DataTfeRegistryModuleVersionStatusesList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVersionStatusesList;

new DataTfeRegistryModuleVersionStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get"></a>

```java
public DataTfeRegistryModuleVersionStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>>

---


### DataTfeRegistryModuleVersionStatusesOutputReference <a name="DataTfeRegistryModuleVersionStatusesOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_registry_module.DataTfeRegistryModuleVersionStatusesOutputReference;

new DataTfeRegistryModuleVersionStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error">error</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error"></a>

```java
public java.lang.String getError();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>

---



