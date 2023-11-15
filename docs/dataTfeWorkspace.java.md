# `data_tfe_workspace`

Refer to the Terraform Registory for docs: [`data_tfe_workspace`](https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace).

# `dataTfeWorkspace` Submodule <a name="`dataTfeWorkspace` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspace <a name="DataTfeWorkspace" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspace;

DataTfeWorkspace.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .organization(java.lang.String)
//  .tagNames(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#name DataTfeWorkspace#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#id DataTfeWorkspace#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#name DataTfeWorkspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.tagNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames">resetTagNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetTagNames` <a name="resetTagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames"></a>

```java
public void resetTagNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspace;

DataTfeWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspace;

DataTfeWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspace;

DataTfeWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspace;

DataTfeWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataTfeWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataTfeWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataTfeWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan">allowDestroyPlan</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply">autoApply</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger">autoApplyRunTrigger</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode">executionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled">fileTriggersEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState">globalRemoteState</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures">policyCheckFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns">queueAllRuns</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount">resourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures">runFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount">runsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl">sourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled">speculativeEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId">sshKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled">structuredRunOutputEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion">terraformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns">triggerPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes">triggerPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput">tagNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowDestroyPlan`<sup>Required</sup> <a name="allowDestroyPlan" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan"></a>

```java
public IResolvable getAllowDestroyPlan();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `assessmentsEnabled`<sup>Required</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled"></a>

```java
public IResolvable getAssessmentsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoApply`<sup>Required</sup> <a name="autoApply" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply"></a>

```java
public IResolvable getAutoApply();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoApplyRunTrigger`<sup>Required</sup> <a name="autoApplyRunTrigger" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger"></a>

```java
public IResolvable getAutoApplyRunTrigger();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode"></a>

```java
public java.lang.String getExecutionMode();
```

- *Type:* java.lang.String

---

##### `fileTriggersEnabled`<sup>Required</sup> <a name="fileTriggersEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled"></a>

```java
public IResolvable getFileTriggersEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `globalRemoteState`<sup>Required</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState"></a>

```java
public IResolvable getGlobalRemoteState();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations"></a>

```java
public IResolvable getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `policyCheckFailures`<sup>Required</sup> <a name="policyCheckFailures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures"></a>

```java
public java.lang.Number getPolicyCheckFailures();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `queueAllRuns`<sup>Required</sup> <a name="queueAllRuns" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns"></a>

```java
public IResolvable getQueueAllRuns();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds"></a>

```java
public java.util.List<java.lang.String> getRemoteStateConsumerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount"></a>

```java
public java.lang.Number getResourceCount();
```

- *Type:* java.lang.Number

---

##### `runFailures`<sup>Required</sup> <a name="runFailures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures"></a>

```java
public java.lang.Number getRunFailures();
```

- *Type:* java.lang.Number

---

##### `runsCount`<sup>Required</sup> <a name="runsCount" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount"></a>

```java
public java.lang.Number getRunsCount();
```

- *Type:* java.lang.Number

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl"></a>

```java
public java.lang.String getSourceUrl();
```

- *Type:* java.lang.String

---

##### `speculativeEnabled`<sup>Required</sup> <a name="speculativeEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled"></a>

```java
public IResolvable getSpeculativeEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sshKeyId`<sup>Required</sup> <a name="sshKeyId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId"></a>

```java
public java.lang.String getSshKeyId();
```

- *Type:* java.lang.String

---

##### `structuredRunOutputEnabled`<sup>Required</sup> <a name="structuredRunOutputEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled"></a>

```java
public IResolvable getStructuredRunOutputEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `terraformVersion`<sup>Required</sup> <a name="terraformVersion" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion"></a>

```java
public java.lang.String getTerraformVersion();
```

- *Type:* java.lang.String

---

##### `triggerPatterns`<sup>Required</sup> <a name="triggerPatterns" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns"></a>

```java
public java.util.List<java.lang.String> getTriggerPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerPrefixes`<sup>Required</sup> <a name="triggerPrefixes" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes"></a>

```java
public java.util.List<java.lang.String> getTriggerPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo"></a>

```java
public DataTfeWorkspaceVcsRepoList getVcsRepo();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `tagNamesInput`<sup>Optional</sup> <a name="tagNamesInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput"></a>

```java
public java.util.List<java.lang.String> getTagNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames"></a>

```java
public java.util.List<java.lang.String> getTagNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceConfig <a name="DataTfeWorkspaceConfig" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspaceConfig;

DataTfeWorkspaceConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .organization(java.lang.String)
//  .tagNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#name DataTfeWorkspace#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#id DataTfeWorkspace#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames">tagNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#name DataTfeWorkspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames"></a>

```java
public java.util.List<java.lang.String> getTagNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}.

---

### DataTfeWorkspaceVcsRepo <a name="DataTfeWorkspaceVcsRepo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspaceVcsRepo;

DataTfeWorkspaceVcsRepo.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeWorkspaceVcsRepoList <a name="DataTfeWorkspaceVcsRepoList" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspaceVcsRepoList;

new DataTfeWorkspaceVcsRepoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get"></a>

```java
public DataTfeWorkspaceVcsRepoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataTfeWorkspaceVcsRepoOutputReference <a name="DataTfeWorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_workspace.DataTfeWorkspaceVcsRepoOutputReference;

new DataTfeWorkspaceVcsRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex">tagsRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```java
public java.lang.String getGithubAppInstallationId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```java
public IResolvable getIngressSubmodules();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```java
public java.lang.String getOauthTokenId();
```

- *Type:* java.lang.String

---

##### `tagsRegex`<sup>Required</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```java
public java.lang.String getTagsRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue"></a>

```java
public DataTfeWorkspaceVcsRepo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a>

---



