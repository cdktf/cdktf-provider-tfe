# `dataTfeOrganization` Submodule <a name="`dataTfeOrganization` Submodule" id="@cdktf/provider-tfe.dataTfeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganization <a name="DataTfeOrganization" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization tfe_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganization;

DataTfeOrganization.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#id DataTfeOrganization#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#name DataTfeOrganization#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#id DataTfeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#name DataTfeOrganization#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganization;

DataTfeOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganization;

DataTfeOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganization;

DataTfeOrganization.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganization;

DataTfeOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataTfeOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataTfeOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataTfeOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataTfeOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.aggregatedCommitStatusEnabled">aggregatedCommitStatusEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.assessmentsEnforced">assessmentsEnforced</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.collaboratorAuthPolicy">collaboratorAuthPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.costEstimationEnabled">costEstimationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.defaultProjectId">defaultProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.ownersTeamSamlRoleId">ownersTeamSamlRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.sendPassingStatusesForUntriggeredSpeculativePlans">sendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.speculativePlanManagementEnabled">speculativePlanManagementEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.twoFactorConformant">twoFactorConformant</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aggregatedCommitStatusEnabled`<sup>Required</sup> <a name="aggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.aggregatedCommitStatusEnabled"></a>

```java
public IResolvable getAggregatedCommitStatusEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `assessmentsEnforced`<sup>Required</sup> <a name="assessmentsEnforced" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.assessmentsEnforced"></a>

```java
public IResolvable getAssessmentsEnforced();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `collaboratorAuthPolicy`<sup>Required</sup> <a name="collaboratorAuthPolicy" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.collaboratorAuthPolicy"></a>

```java
public java.lang.String getCollaboratorAuthPolicy();
```

- *Type:* java.lang.String

---

##### `costEstimationEnabled`<sup>Required</sup> <a name="costEstimationEnabled" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.costEstimationEnabled"></a>

```java
public IResolvable getCostEstimationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `defaultProjectId`<sup>Required</sup> <a name="defaultProjectId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.defaultProjectId"></a>

```java
public java.lang.String getDefaultProjectId();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `ownersTeamSamlRoleId`<sup>Required</sup> <a name="ownersTeamSamlRoleId" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.ownersTeamSamlRoleId"></a>

```java
public java.lang.String getOwnersTeamSamlRoleId();
```

- *Type:* java.lang.String

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="sendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```java
public IResolvable getSendPassingStatusesForUntriggeredSpeculativePlans();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `speculativePlanManagementEnabled`<sup>Required</sup> <a name="speculativePlanManagementEnabled" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.speculativePlanManagementEnabled"></a>

```java
public IResolvable getSpeculativePlanManagementEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `twoFactorConformant`<sup>Required</sup> <a name="twoFactorConformant" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.twoFactorConformant"></a>

```java
public IResolvable getTwoFactorConformant();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationConfig <a name="DataTfeOrganizationConfig" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization.DataTfeOrganizationConfig;

DataTfeOrganizationConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#id DataTfeOrganization#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#name DataTfeOrganization#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#id DataTfeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/data-sources/organization#name DataTfeOrganization#name}.

---



