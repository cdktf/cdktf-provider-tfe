# `variable` Submodule <a name="`variable` Submodule" id="@cdktf/provider-tfe.variable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Variable <a name="Variable" id="@cdktf/provider-tfe.variable.Variable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable tfe_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.variable.Variable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.Variable;

Variable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .key(java.lang.String)
//  .description(java.lang.String)
//  .hcl(java.lang.Boolean|IResolvable)
//  .sensitive(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
//  .valueWo(java.lang.String)
//  .variableSetId(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Whether this is a Terraform or environment variable. Valid values are "terraform" or "env". |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#description Variable#description}. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.hcl">hcl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#hcl Variable#hcl}. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#sensitive Variable#sensitive}. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.valueWo">valueWo</a></code> | <code>java.lang.String</code> | Value of the variable in write-only mode. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.variableSetId">variableSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#variable_set_id Variable#variable_set_id}. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#workspace_id Variable#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Whether this is a Terraform or environment variable. Valid values are "terraform" or "env".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#category Variable#category}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#key Variable#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#description Variable#description}.

---

##### `hcl`<sup>Optional</sup> <a name="hcl" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.hcl"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#hcl Variable#hcl}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.sensitive"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#sensitive Variable#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#value Variable#value}

---

##### `valueWo`<sup>Optional</sup> <a name="valueWo" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.valueWo"></a>

- *Type:* java.lang.String

Value of the variable in write-only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#value_wo Variable#value_wo}

---

##### `variableSetId`<sup>Optional</sup> <a name="variableSetId" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.variableSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#variable_set_id Variable#variable_set_id}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-tfe.variable.Variable.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#workspace_id Variable#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetHcl">resetHcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetSensitive">resetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetValueWo">resetValueWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetVariableSetId">resetVariableSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.variable.Variable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.variable.Variable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.variable.Variable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.variable.Variable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.variable.Variable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.variable.Variable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.variable.Variable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.variable.Variable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.variable.Variable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.variable.Variable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.variable.Variable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.variable.Variable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.variable.Variable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.variable.Variable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.variable.Variable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.variable.Variable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.variable.Variable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.variable.Variable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.variable.Variable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.variable.Variable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variable.Variable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variable.Variable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.variable.Variable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variable.Variable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.variable.Variable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variable.Variable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.variable.Variable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.variable.Variable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.variable.Variable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.variable.Variable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variable.Variable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-tfe.variable.Variable.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHcl` <a name="resetHcl" id="@cdktf/provider-tfe.variable.Variable.resetHcl"></a>

```java
public void resetHcl()
```

##### `resetSensitive` <a name="resetSensitive" id="@cdktf/provider-tfe.variable.Variable.resetSensitive"></a>

```java
public void resetSensitive()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-tfe.variable.Variable.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueWo` <a name="resetValueWo" id="@cdktf/provider-tfe.variable.Variable.resetValueWo"></a>

```java
public void resetValueWo()
```

##### `resetVariableSetId` <a name="resetVariableSetId" id="@cdktf/provider-tfe.variable.Variable.resetVariableSetId"></a>

```java
public void resetVariableSetId()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-tfe.variable.Variable.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Variable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.variable.Variable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.Variable;

Variable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variable.Variable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.variable.Variable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.Variable;

Variable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variable.Variable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.variable.Variable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.Variable;

Variable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variable.Variable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.variable.Variable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.Variable;

Variable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Variable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Variable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.variable.Variable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.variable.Variable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Variable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.variable.Variable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Variable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variable.Variable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Variable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.readableValue">readableValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.hclInput">hclInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.sensitiveInput">sensitiveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.valueWoInput">valueWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.variableSetIdInput">variableSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.hcl">hcl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.valueWo">valueWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.variableSetId">variableSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.variable.Variable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.variable.Variable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.variable.Variable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.variable.Variable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.variable.Variable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.variable.Variable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.variable.Variable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.variable.Variable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.variable.Variable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.variable.Variable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.variable.Variable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.variable.Variable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variable.Variable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.variable.Variable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variable.Variable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `readableValue`<sup>Required</sup> <a name="readableValue" id="@cdktf/provider-tfe.variable.Variable.property.readableValue"></a>

```java
public java.lang.String getReadableValue();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-tfe.variable.Variable.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-tfe.variable.Variable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hclInput`<sup>Optional</sup> <a name="hclInput" id="@cdktf/provider-tfe.variable.Variable.property.hclInput"></a>

```java
public java.lang.Boolean|IResolvable getHclInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-tfe.variable.Variable.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `sensitiveInput`<sup>Optional</sup> <a name="sensitiveInput" id="@cdktf/provider-tfe.variable.Variable.property.sensitiveInput"></a>

```java
public java.lang.Boolean|IResolvable getSensitiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-tfe.variable.Variable.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueWoInput`<sup>Optional</sup> <a name="valueWoInput" id="@cdktf/provider-tfe.variable.Variable.property.valueWoInput"></a>

```java
public java.lang.String getValueWoInput();
```

- *Type:* java.lang.String

---

##### `variableSetIdInput`<sup>Optional</sup> <a name="variableSetIdInput" id="@cdktf/provider-tfe.variable.Variable.property.variableSetIdInput"></a>

```java
public java.lang.String getVariableSetIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.variable.Variable.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.variable.Variable.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.variable.Variable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-tfe.variable.Variable.property.hcl"></a>

```java
public java.lang.Boolean|IResolvable getHcl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.variable.Variable.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.variable.Variable.property.sensitive"></a>

```java
public java.lang.Boolean|IResolvable getSensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.variable.Variable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueWo`<sup>Required</sup> <a name="valueWo" id="@cdktf/provider-tfe.variable.Variable.property.valueWo"></a>

```java
public java.lang.String getValueWo();
```

- *Type:* java.lang.String

---

##### `variableSetId`<sup>Required</sup> <a name="variableSetId" id="@cdktf/provider-tfe.variable.Variable.property.variableSetId"></a>

```java
public java.lang.String getVariableSetId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.variable.Variable.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.Variable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.variable.Variable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VariableConfig <a name="VariableConfig" id="@cdktf/provider-tfe.variable.VariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.variable.VariableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.variable.VariableConfig;

VariableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .key(java.lang.String)
//  .description(java.lang.String)
//  .hcl(java.lang.Boolean|IResolvable)
//  .sensitive(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
//  .valueWo(java.lang.String)
//  .variableSetId(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.category">category</a></code> | <code>java.lang.String</code> | Whether this is a Terraform or environment variable. Valid values are "terraform" or "env". |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.key">key</a></code> | <code>java.lang.String</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#description Variable#description}. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.hcl">hcl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#hcl Variable#hcl}. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#sensitive Variable#sensitive}. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.value">value</a></code> | <code>java.lang.String</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.valueWo">valueWo</a></code> | <code>java.lang.String</code> | Value of the variable in write-only mode. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.variableSetId">variableSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#variable_set_id Variable#variable_set_id}. |
| <code><a href="#@cdktf/provider-tfe.variable.VariableConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#workspace_id Variable#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.variable.VariableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.variable.VariableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.variable.VariableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.variable.VariableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.variable.VariableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variable.VariableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.variable.VariableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-tfe.variable.VariableConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Whether this is a Terraform or environment variable. Valid values are "terraform" or "env".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#category Variable#category}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.variable.VariableConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#key Variable#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.variable.VariableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#description Variable#description}.

---

##### `hcl`<sup>Optional</sup> <a name="hcl" id="@cdktf/provider-tfe.variable.VariableConfig.property.hcl"></a>

```java
public java.lang.Boolean|IResolvable getHcl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#hcl Variable#hcl}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.variable.VariableConfig.property.sensitive"></a>

```java
public java.lang.Boolean|IResolvable getSensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#sensitive Variable#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.variable.VariableConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#value Variable#value}

---

##### `valueWo`<sup>Optional</sup> <a name="valueWo" id="@cdktf/provider-tfe.variable.VariableConfig.property.valueWo"></a>

```java
public java.lang.String getValueWo();
```

- *Type:* java.lang.String

Value of the variable in write-only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#value_wo Variable#value_wo}

---

##### `variableSetId`<sup>Optional</sup> <a name="variableSetId" id="@cdktf/provider-tfe.variable.VariableConfig.property.variableSetId"></a>

```java
public java.lang.String getVariableSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#variable_set_id Variable#variable_set_id}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-tfe.variable.VariableConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/variable#workspace_id Variable#workspace_id}.

---



