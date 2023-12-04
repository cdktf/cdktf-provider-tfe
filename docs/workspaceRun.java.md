# `workspaceRun` Submodule <a name="`workspaceRun` Submodule" id="@cdktf/provider-tfe.workspaceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRun <a name="WorkspaceRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run tfe_workspace_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRun;

WorkspaceRun.Builder.create(Construct scope, java.lang.String id)
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
    .workspaceId(java.lang.String)
//  .apply(WorkspaceRunApply)
//  .destroy(WorkspaceRunDestroy)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `apply`<sup>Optional</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.apply"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `destroy`<sup>Optional</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.destroy"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply">putApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy">putDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply">resetApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy">resetDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApply` <a name="putApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply"></a>

```java
public void putApply(WorkspaceRunApply value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `putDestroy` <a name="putDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy"></a>

```java
public void putDestroy(WorkspaceRunDestroy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `resetApply` <a name="resetApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply"></a>

```java
public void resetApply()
```

##### `resetDestroy` <a name="resetDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy"></a>

```java
public void resetDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRun;

WorkspaceRun.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRun;

WorkspaceRun.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRun;

WorkspaceRun.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRun;

WorkspaceRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput">applyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput">destroyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apply`<sup>Required</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply"></a>

```java
public WorkspaceRunApplyOutputReference getApply();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a>

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy"></a>

```java
public WorkspaceRunDestroyOutputReference getDestroy();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a>

---

##### `applyInput`<sup>Optional</sup> <a name="applyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput"></a>

```java
public WorkspaceRunApply getApplyInput();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `destroyInput`<sup>Optional</sup> <a name="destroyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput"></a>

```java
public WorkspaceRunDestroy getDestroyInput();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunApply <a name="WorkspaceRunApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRunApply;

WorkspaceRunApply.builder()
    .manualConfirm(java.lang.Boolean)
    .manualConfirm(IResolvable)
//  .retry(java.lang.Boolean)
//  .retry(IResolvable)
//  .retryAttempts(java.lang.Number)
//  .retryBackoffMax(java.lang.Number)
//  .retryBackoffMin(java.lang.Number)
//  .waitForRun(java.lang.Boolean)
//  .waitForRun(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm">manualConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax">retryBackoffMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin">retryBackoffMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun">waitForRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm"></a>

```java
public java.lang.Object getManualConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retryBackoffMax`<sup>Optional</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax"></a>

```java
public java.lang.Number getRetryBackoffMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retryBackoffMin`<sup>Optional</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin"></a>

```java
public java.lang.Number getRetryBackoffMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `waitForRun`<sup>Optional</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun"></a>

```java
public java.lang.Object getWaitForRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

### WorkspaceRunConfig <a name="WorkspaceRunConfig" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRunConfig;

WorkspaceRunConfig.builder()
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
    .workspaceId(java.lang.String)
//  .apply(WorkspaceRunApply)
//  .destroy(WorkspaceRunDestroy)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `apply`<sup>Optional</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply"></a>

```java
public WorkspaceRunApply getApply();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `destroy`<sup>Optional</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy"></a>

```java
public WorkspaceRunDestroy getDestroy();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceRunDestroy <a name="WorkspaceRunDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRunDestroy;

WorkspaceRunDestroy.builder()
    .manualConfirm(java.lang.Boolean)
    .manualConfirm(IResolvable)
//  .retry(java.lang.Boolean)
//  .retry(IResolvable)
//  .retryAttempts(java.lang.Number)
//  .retryBackoffMax(java.lang.Number)
//  .retryBackoffMin(java.lang.Number)
//  .waitForRun(java.lang.Boolean)
//  .waitForRun(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm">manualConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax">retryBackoffMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin">retryBackoffMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun">waitForRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm"></a>

```java
public java.lang.Object getManualConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retryBackoffMax`<sup>Optional</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax"></a>

```java
public java.lang.Number getRetryBackoffMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retryBackoffMin`<sup>Optional</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin"></a>

```java
public java.lang.Number getRetryBackoffMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `waitForRun`<sup>Optional</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun"></a>

```java
public java.lang.Object getWaitForRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceRunApplyOutputReference <a name="WorkspaceRunApplyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRunApplyOutputReference;

new WorkspaceRunApplyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax">resetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin">resetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun">resetWaitForRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts"></a>

```java
public void resetRetryAttempts()
```

##### `resetRetryBackoffMax` <a name="resetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax"></a>

```java
public void resetRetryBackoffMax()
```

##### `resetRetryBackoffMin` <a name="resetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin"></a>

```java
public void resetRetryBackoffMin()
```

##### `resetWaitForRun` <a name="resetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun"></a>

```java
public void resetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput">manualConfirmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput">retryBackoffMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput">retryBackoffMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput">waitForRunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm">manualConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax">retryBackoffMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin">retryBackoffMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun">waitForRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualConfirmInput`<sup>Optional</sup> <a name="manualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput"></a>

```java
public java.lang.Object getManualConfirmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput"></a>

```java
public java.lang.Number getRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMaxInput`<sup>Optional</sup> <a name="retryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput"></a>

```java
public java.lang.Number getRetryBackoffMaxInput();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMinInput`<sup>Optional</sup> <a name="retryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput"></a>

```java
public java.lang.Number getRetryBackoffMinInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput"></a>

```java
public java.lang.Object getRetryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForRunInput`<sup>Optional</sup> <a name="waitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput"></a>

```java
public java.lang.Object getWaitForRunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm"></a>

```java
public java.lang.Object getManualConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMax`<sup>Required</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax"></a>

```java
public java.lang.Number getRetryBackoffMax();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMin`<sup>Required</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin"></a>

```java
public java.lang.Number getRetryBackoffMin();
```

- *Type:* java.lang.Number

---

##### `waitForRun`<sup>Required</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun"></a>

```java
public java.lang.Object getWaitForRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue"></a>

```java
public WorkspaceRunApply getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---


### WorkspaceRunDestroyOutputReference <a name="WorkspaceRunDestroyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run.WorkspaceRunDestroyOutputReference;

new WorkspaceRunDestroyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax">resetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin">resetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun">resetWaitForRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts"></a>

```java
public void resetRetryAttempts()
```

##### `resetRetryBackoffMax` <a name="resetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax"></a>

```java
public void resetRetryBackoffMax()
```

##### `resetRetryBackoffMin` <a name="resetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin"></a>

```java
public void resetRetryBackoffMin()
```

##### `resetWaitForRun` <a name="resetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun"></a>

```java
public void resetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput">manualConfirmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput">retryBackoffMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput">retryBackoffMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput">waitForRunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm">manualConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax">retryBackoffMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin">retryBackoffMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun">waitForRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualConfirmInput`<sup>Optional</sup> <a name="manualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput"></a>

```java
public java.lang.Object getManualConfirmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput"></a>

```java
public java.lang.Number getRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMaxInput`<sup>Optional</sup> <a name="retryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput"></a>

```java
public java.lang.Number getRetryBackoffMaxInput();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMinInput`<sup>Optional</sup> <a name="retryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput"></a>

```java
public java.lang.Number getRetryBackoffMinInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput"></a>

```java
public java.lang.Object getRetryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForRunInput`<sup>Optional</sup> <a name="waitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput"></a>

```java
public java.lang.Object getWaitForRunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm"></a>

```java
public java.lang.Object getManualConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMax`<sup>Required</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax"></a>

```java
public java.lang.Number getRetryBackoffMax();
```

- *Type:* java.lang.Number

---

##### `retryBackoffMin`<sup>Required</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin"></a>

```java
public java.lang.Number getRetryBackoffMin();
```

- *Type:* java.lang.Number

---

##### `waitForRun`<sup>Required</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun"></a>

```java
public java.lang.Object getWaitForRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue"></a>

```java
public WorkspaceRunDestroy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---



