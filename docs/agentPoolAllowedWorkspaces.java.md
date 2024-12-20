# `agentPoolAllowedWorkspaces` Submodule <a name="`agentPoolAllowedWorkspaces` Submodule" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentPoolAllowedWorkspaces <a name="AgentPoolAllowedWorkspaces" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces tfe_agent_pool_allowed_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspaces;

AgentPoolAllowedWorkspaces.Builder.create(Construct scope, java.lang.String id)
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
    .agentPoolId(java.lang.String)
    .allowedWorkspaceIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.allowedWorkspaceIds">allowedWorkspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.agentPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}.

---

##### `allowedWorkspaceIds`<sup>Required</sup> <a name="allowedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.allowedWorkspaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AgentPoolAllowedWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspaces;

AgentPoolAllowedWorkspaces.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspaces;

AgentPoolAllowedWorkspaces.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspaces;

AgentPoolAllowedWorkspaces.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspaces;

AgentPoolAllowedWorkspaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AgentPoolAllowedWorkspaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AgentPoolAllowedWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AgentPoolAllowedWorkspaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AgentPoolAllowedWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AgentPoolAllowedWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput">agentPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput">allowedWorkspaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds">allowedWorkspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="agentPoolIdInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput"></a>

```java
public java.lang.String getAgentPoolIdInput();
```

- *Type:* java.lang.String

---

##### `allowedWorkspaceIdsInput`<sup>Optional</sup> <a name="allowedWorkspaceIdsInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedWorkspaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId"></a>

```java
public java.lang.String getAgentPoolId();
```

- *Type:* java.lang.String

---

##### `allowedWorkspaceIds`<sup>Required</sup> <a name="allowedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds"></a>

```java
public java.util.List<java.lang.String> getAllowedWorkspaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AgentPoolAllowedWorkspacesConfig <a name="AgentPoolAllowedWorkspacesConfig" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.agent_pool_allowed_workspaces.AgentPoolAllowedWorkspacesConfig;

AgentPoolAllowedWorkspacesConfig.builder()
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
    .agentPoolId(java.lang.String)
    .allowedWorkspaceIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId">agentPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds">allowedWorkspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId"></a>

```java
public java.lang.String getAgentPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}.

---

##### `allowedWorkspaceIds`<sup>Required</sup> <a name="allowedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds"></a>

```java
public java.util.List<java.lang.String> getAllowedWorkspaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



