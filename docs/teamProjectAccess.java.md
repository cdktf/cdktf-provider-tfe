# `teamProjectAccess` Submodule <a name="`teamProjectAccess` Submodule" id="@cdktf/provider-tfe.teamProjectAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamProjectAccess <a name="TeamProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access tfe_team_project_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccess;

TeamProjectAccess.Builder.create(Construct scope, java.lang.String id)
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
    .access(java.lang.String)
    .projectId(java.lang.String)
    .teamId(java.lang.String)
//  .id(java.lang.String)
//  .projectAccess(IResolvable)
//  .projectAccess(java.util.List<TeamProjectAccessProjectAccess>)
//  .workspaceAccess(IResolvable)
//  .workspaceAccess(java.util.List<TeamProjectAccessWorkspaceAccess>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectAccess">projectAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>></code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.workspaceAccess">workspaceAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>></code> | workspace_access block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectAccess`<sup>Optional</sup> <a name="projectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.projectAccess"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>>

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.workspaceAccess"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>>

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess">putProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess">putWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess">resetProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProjectAccess` <a name="putProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess"></a>

```java
public void putProjectAccess(IResolvable OR java.util.List<TeamProjectAccessProjectAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>>

---

##### `putWorkspaceAccess` <a name="putWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess"></a>

```java
public void putWorkspaceAccess(IResolvable OR java.util.List<TeamProjectAccessWorkspaceAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId"></a>

```java
public void resetId()
```

##### `resetProjectAccess` <a name="resetProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess"></a>

```java
public void resetProjectAccess()
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess"></a>

```java
public void resetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccess;

TeamProjectAccess.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccess;

TeamProjectAccess.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccess;

TeamProjectAccess.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccess;

TeamProjectAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamProjectAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamProjectAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamProjectAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TeamProjectAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess">projectAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess">workspaceAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput">projectAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess"></a>

```java
public TeamProjectAccessProjectAccessList getProjectAccess();
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a>

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess"></a>

```java
public TeamProjectAccessWorkspaceAccessList getWorkspaceAccess();
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectAccessInput`<sup>Optional</sup> <a name="projectAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput"></a>

```java
public java.lang.Object getProjectAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput"></a>

```java
public java.lang.Object getWorkspaceAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamProjectAccessConfig <a name="TeamProjectAccessConfig" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessConfig;

TeamProjectAccessConfig.builder()
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
    .access(java.lang.String)
    .projectId(java.lang.String)
    .teamId(java.lang.String)
//  .id(java.lang.String)
//  .projectAccess(IResolvable)
//  .projectAccess(java.util.List<TeamProjectAccessProjectAccess>)
//  .workspaceAccess(IResolvable)
//  .workspaceAccess(java.util.List<TeamProjectAccessWorkspaceAccess>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess">projectAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>></code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>></code> | workspace_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectAccess`<sup>Optional</sup> <a name="projectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess"></a>

```java
public java.lang.Object getProjectAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>>

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess"></a>

```java
public java.lang.Object getWorkspaceAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>>

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

### TeamProjectAccessProjectAccess <a name="TeamProjectAccessProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessProjectAccess;

TeamProjectAccessProjectAccess.builder()
//  .settings(java.lang.String)
//  .teams(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams">teams</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams"></a>

```java
public java.lang.String getTeams();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}.

---

### TeamProjectAccessWorkspaceAccess <a name="TeamProjectAccessWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessWorkspaceAccess;

TeamProjectAccessWorkspaceAccess.builder()
//  .create(java.lang.Boolean)
//  .create(IResolvable)
//  .delete(java.lang.Boolean)
//  .delete(IResolvable)
//  .locking(java.lang.Boolean)
//  .locking(IResolvable)
//  .move(java.lang.Boolean)
//  .move(IResolvable)
//  .runs(java.lang.String)
//  .runTasks(java.lang.Boolean)
//  .runTasks(IResolvable)
//  .sentinelMocks(java.lang.String)
//  .stateVersions(java.lang.String)
//  .variables(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#create TeamProjectAccess#create}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking">locking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move">move</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#move TeamProjectAccess#move}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs">runs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks">runTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks">sentinelMocks</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions">stateVersions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables">variables</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#create TeamProjectAccess#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}.

---

##### `locking`<sup>Optional</sup> <a name="locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking"></a>

```java
public java.lang.Object getLocking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}.

---

##### `move`<sup>Optional</sup> <a name="move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move"></a>

```java
public java.lang.Object getMove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#move TeamProjectAccess#move}.

---

##### `runs`<sup>Optional</sup> <a name="runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs"></a>

```java
public java.lang.String getRuns();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}.

---

##### `runTasks`<sup>Optional</sup> <a name="runTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks"></a>

```java
public java.lang.Object getRunTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}.

---

##### `sentinelMocks`<sup>Optional</sup> <a name="sentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks"></a>

```java
public java.lang.String getSentinelMocks();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}.

---

##### `stateVersions`<sup>Optional</sup> <a name="stateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions"></a>

```java
public java.lang.String getStateVersions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables"></a>

```java
public java.lang.String getVariables();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamProjectAccessProjectAccessList <a name="TeamProjectAccessProjectAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessProjectAccessList;

new TeamProjectAccessProjectAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get"></a>

```java
public TeamProjectAccessProjectAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>>

---


### TeamProjectAccessProjectAccessOutputReference <a name="TeamProjectAccessProjectAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessProjectAccessOutputReference;

new TeamProjectAccessProjectAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams">teams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput"></a>

```java
public java.lang.String getTeamsInput();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams"></a>

```java
public java.lang.String getTeams();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess">TeamProjectAccessProjectAccess</a>

---


### TeamProjectAccessWorkspaceAccessList <a name="TeamProjectAccessWorkspaceAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessWorkspaceAccessList;

new TeamProjectAccessWorkspaceAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get"></a>

```java
public TeamProjectAccessWorkspaceAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>>

---


### TeamProjectAccessWorkspaceAccessOutputReference <a name="TeamProjectAccessWorkspaceAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.team_project_access.TeamProjectAccessWorkspaceAccessOutputReference;

new TeamProjectAccessWorkspaceAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking">resetLocking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove">resetMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns">resetRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks">resetRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks">resetSentinelMocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions">resetStateVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetLocking` <a name="resetLocking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking"></a>

```java
public void resetLocking()
```

##### `resetMove` <a name="resetMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove"></a>

```java
public void resetMove()
```

##### `resetRuns` <a name="resetRuns" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns"></a>

```java
public void resetRuns()
```

##### `resetRunTasks` <a name="resetRunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks"></a>

```java
public void resetRunTasks()
```

##### `resetSentinelMocks` <a name="resetSentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks"></a>

```java
public void resetSentinelMocks()
```

##### `resetStateVersions` <a name="resetStateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions"></a>

```java
public void resetStateVersions()
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables"></a>

```java
public void resetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput">createInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput">lockingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput">moveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput">runsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput">runTasksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput">sentinelMocksInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput">stateVersionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput">variablesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking">locking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move">move</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs">runs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks">runTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks">sentinelMocks</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions">stateVersions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables">variables</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput"></a>

```java
public java.lang.Object getCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lockingInput`<sup>Optional</sup> <a name="lockingInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput"></a>

```java
public java.lang.Object getLockingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `moveInput`<sup>Optional</sup> <a name="moveInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput"></a>

```java
public java.lang.Object getMoveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runsInput`<sup>Optional</sup> <a name="runsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput"></a>

```java
public java.lang.String getRunsInput();
```

- *Type:* java.lang.String

---

##### `runTasksInput`<sup>Optional</sup> <a name="runTasksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput"></a>

```java
public java.lang.Object getRunTasksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sentinelMocksInput`<sup>Optional</sup> <a name="sentinelMocksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput"></a>

```java
public java.lang.String getSentinelMocksInput();
```

- *Type:* java.lang.String

---

##### `stateVersionsInput`<sup>Optional</sup> <a name="stateVersionsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput"></a>

```java
public java.lang.String getStateVersionsInput();
```

- *Type:* java.lang.String

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput"></a>

```java
public java.lang.String getVariablesInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locking`<sup>Required</sup> <a name="locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking"></a>

```java
public java.lang.Object getLocking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `move`<sup>Required</sup> <a name="move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move"></a>

```java
public java.lang.Object getMove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runs`<sup>Required</sup> <a name="runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs"></a>

```java
public java.lang.String getRuns();
```

- *Type:* java.lang.String

---

##### `runTasks`<sup>Required</sup> <a name="runTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks"></a>

```java
public java.lang.Object getRunTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sentinelMocks`<sup>Required</sup> <a name="sentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks"></a>

```java
public java.lang.String getSentinelMocks();
```

- *Type:* java.lang.String

---

##### `stateVersions`<sup>Required</sup> <a name="stateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions"></a>

```java
public java.lang.String getStateVersions();
```

- *Type:* java.lang.String

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables"></a>

```java
public java.lang.String getVariables();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess">TeamProjectAccessWorkspaceAccess</a>

---



