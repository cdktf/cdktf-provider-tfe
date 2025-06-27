# `dataTfeOrganizationMembers` Submodule <a name="`dataTfeOrganizationMembers` Submodule" id="@cdktf/provider-tfe.dataTfeOrganizationMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganizationMembers <a name="DataTfeOrganizationMembers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members tfe_organization_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembers;

DataTfeOrganizationMembers.Builder.create(Construct scope, java.lang.String id)
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
//  .organization(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#id DataTfeOrganizationMembers#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#organization DataTfeOrganizationMembers#organization}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#id DataTfeOrganizationMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#organization DataTfeOrganizationMembers#organization}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetId"></a>

```java
public void resetId()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.resetOrganization"></a>

```java
public void resetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeOrganizationMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembers;

DataTfeOrganizationMembers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembers;

DataTfeOrganizationMembers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembers;

DataTfeOrganizationMembers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembers;

DataTfeOrganizationMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataTfeOrganizationMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataTfeOrganizationMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataTfeOrganizationMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataTfeOrganizationMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOrganizationMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.members">members</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList">DataTfeOrganizationMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.membersWaiting">membersWaiting</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList">DataTfeOrganizationMembersMembersWaitingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.members"></a>

```java
public DataTfeOrganizationMembersMembersList getMembers();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList">DataTfeOrganizationMembersMembersList</a>

---

##### `membersWaiting`<sup>Required</sup> <a name="membersWaiting" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.membersWaiting"></a>

```java
public DataTfeOrganizationMembersMembersWaitingList getMembersWaiting();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList">DataTfeOrganizationMembersMembersWaitingList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationMembersConfig <a name="DataTfeOrganizationMembersConfig" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersConfig;

DataTfeOrganizationMembersConfig.builder()
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
//  .organization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#id DataTfeOrganizationMembers#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#organization DataTfeOrganizationMembers#organization}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#id DataTfeOrganizationMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/organization_members#organization DataTfeOrganizationMembers#organization}.

---

### DataTfeOrganizationMembersMembers <a name="DataTfeOrganizationMembersMembers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembers;

DataTfeOrganizationMembersMembers.builder()
    .build();
```


### DataTfeOrganizationMembersMembersWaiting <a name="DataTfeOrganizationMembersMembersWaiting" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaiting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembersWaiting;

DataTfeOrganizationMembersMembersWaiting.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeOrganizationMembersMembersList <a name="DataTfeOrganizationMembersMembersList" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembersList;

new DataTfeOrganizationMembersMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.get"></a>

```java
public DataTfeOrganizationMembersMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataTfeOrganizationMembersMembersOutputReference <a name="DataTfeOrganizationMembersMembersOutputReference" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembersOutputReference;

new DataTfeOrganizationMembersMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.organizationMembershipId">organizationMembershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembers">DataTfeOrganizationMembersMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationMembershipId`<sup>Required</sup> <a name="organizationMembershipId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.organizationMembershipId"></a>

```java
public java.lang.String getOrganizationMembershipId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersOutputReference.property.internalValue"></a>

```java
public DataTfeOrganizationMembersMembers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembers">DataTfeOrganizationMembersMembers</a>

---


### DataTfeOrganizationMembersMembersWaitingList <a name="DataTfeOrganizationMembersMembersWaitingList" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembersWaitingList;

new DataTfeOrganizationMembersMembersWaitingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.get"></a>

```java
public DataTfeOrganizationMembersMembersWaitingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataTfeOrganizationMembersMembersWaitingOutputReference <a name="DataTfeOrganizationMembersMembersWaitingOutputReference" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.data_tfe_organization_members.DataTfeOrganizationMembersMembersWaitingOutputReference;

new DataTfeOrganizationMembersMembersWaitingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.organizationMembershipId">organizationMembershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaiting">DataTfeOrganizationMembersMembersWaiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationMembershipId`<sup>Required</sup> <a name="organizationMembershipId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.organizationMembershipId"></a>

```java
public java.lang.String getOrganizationMembershipId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaitingOutputReference.property.internalValue"></a>

```java
public DataTfeOrganizationMembersMembersWaiting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationMembers.DataTfeOrganizationMembersMembersWaiting">DataTfeOrganizationMembersMembersWaiting</a>

---



