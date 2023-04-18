# `tfe_workspace_run_task`

Refer to the Terraform Registory for docs: [`tfe_workspace_run_task`](https://www.terraform.io/docs/providers/tfe/r/workspace_run_task).

# `workspaceRunTask` Submodule <a name="`workspaceRunTask` Submodule" id="@cdktf/provider-tfe.workspaceRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRunTask <a name="WorkspaceRunTask" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run_task.WorkspaceRunTask;

WorkspaceRunTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enforcementLevel(java.lang.String)
    .taskId(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .stage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.enforcementLevel">enforcementLevel</a></code> | <code>java.lang.String</code> | The enforcement level of the task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.taskId">taskId</a></code> | <code>java.lang.String</code> | The id of the Run task to associate to the Workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | The id of the workspace to associate the Run task to. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.stage">stage</a></code> | <code>java.lang.String</code> | The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.enforcementLevel"></a>

- *Type:* java.lang.String

The enforcement level of the task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.taskId"></a>

- *Type:* java.lang.String

The id of the Run task to associate to the Workspace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#task_id WorkspaceRunTask#task_id}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

The id of the workspace to associate the Run task to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.stage"></a>

- *Type:* java.lang.String

The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#stage WorkspaceRunTask#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage">resetStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetId"></a>

```java
public void resetId()
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage"></a>

```java
public void resetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run_task.WorkspaceRunTask;

WorkspaceRunTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run_task.WorkspaceRunTask;

WorkspaceRunTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run_task.WorkspaceRunTask;

WorkspaceRunTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput">enforcementLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput">taskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel">enforcementLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId">taskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enforcementLevelInput`<sup>Optional</sup> <a name="enforcementLevelInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput"></a>

```java
public java.lang.String getEnforcementLevelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `taskIdInput`<sup>Optional</sup> <a name="taskIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput"></a>

```java
public java.lang.String getTaskIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel"></a>

```java
public java.lang.String getEnforcementLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId"></a>

```java
public java.lang.String getTaskId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunTaskConfig <a name="WorkspaceRunTaskConfig" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.workspace_run_task.WorkspaceRunTaskConfig;

WorkspaceRunTaskConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enforcementLevel(java.lang.String)
    .taskId(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .stage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel">enforcementLevel</a></code> | <code>java.lang.String</code> | The enforcement level of the task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId">taskId</a></code> | <code>java.lang.String</code> | The id of the Run task to associate to the Workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | The id of the workspace to associate the Run task to. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage">stage</a></code> | <code>java.lang.String</code> | The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel"></a>

```java
public java.lang.String getEnforcementLevel();
```

- *Type:* java.lang.String

The enforcement level of the task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId"></a>

```java
public java.lang.String getTaskId();
```

- *Type:* java.lang.String

The id of the Run task to associate to the Workspace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#task_id WorkspaceRunTask#task_id}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

The id of the workspace to associate the Run task to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#stage WorkspaceRunTask#stage}

---



