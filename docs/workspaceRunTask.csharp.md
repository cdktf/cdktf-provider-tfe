# `workspaceRunTask` Submodule <a name="`workspaceRunTask` Submodule" id="@cdktf/provider-tfe.workspaceRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRunTask <a name="WorkspaceRunTask" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunTask(Construct Scope, string Id, WorkspaceRunTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetStages` <a name="ResetStages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStages"></a>

```csharp
private void ResetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceRunTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRunTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRunTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRunTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRunTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceRunTask resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceRunTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput">EnforcementLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stagesInput">StagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput">TaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel">EnforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnforcementLevelInput`<sup>Optional</sup> <a name="EnforcementLevelInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput"></a>

```csharp
public string EnforcementLevelInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stagesInput"></a>

```csharp
public string[] StagesInput { get; }
```

- *Type:* string[]

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput"></a>

```csharp
public string TaskIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel"></a>

```csharp
public string EnforcementLevel { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunTaskConfig <a name="WorkspaceRunTaskConfig" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnforcementLevel,
    string TaskId,
    string WorkspaceId,
    string Stage = null,
    string[] Stages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel">EnforcementLevel</a></code> | <code>string</code> | The enforcement level of the task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId">TaskId</a></code> | <code>string</code> | The id of the Run task to associate to the Workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | The id of the workspace to associate the Run task to. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage">Stage</a></code> | <code>string</code> | The stage to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stages">Stages</a></code> | <code>string[]</code> | The stages to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel"></a>

```csharp
public string EnforcementLevel { get; set; }
```

- *Type:* string

The enforcement level of the task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId"></a>

```csharp
public string TaskId { get; set; }
```

- *Type:* string

The id of the Run task to associate to the Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#task_id WorkspaceRunTask#task_id}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

The id of the workspace to associate the Run task to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

The stage to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#stage WorkspaceRunTask#stage}

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stages"></a>

```csharp
public string[] Stages { get; set; }
```

- *Type:* string[]

The stages to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#stages WorkspaceRunTask#stages}

---



