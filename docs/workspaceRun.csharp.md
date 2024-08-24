# `workspaceRun` Submodule <a name="`workspaceRun` Submodule" id="@cdktf/provider-tfe.workspaceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRun <a name="WorkspaceRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run tfe_workspace_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRun(Construct Scope, string Id, WorkspaceRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply">PutApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy">PutDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply">ResetApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy">ResetDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApply` <a name="PutApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply"></a>

```csharp
private void PutApply(WorkspaceRunApply Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `PutDestroy` <a name="PutDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy"></a>

```csharp
private void PutDestroy(WorkspaceRunDestroy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `ResetApply` <a name="ResetApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply"></a>

```csharp
private void ResetApply()
```

##### `ResetDestroy` <a name="ResetDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy"></a>

```csharp
private void ResetDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply">Apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy">Destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput">ApplyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput">DestroyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Apply`<sup>Required</sup> <a name="Apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply"></a>

```csharp
public WorkspaceRunApplyOutputReference Apply { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a>

---

##### `Destroy`<sup>Required</sup> <a name="Destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy"></a>

```csharp
public WorkspaceRunDestroyOutputReference Destroy { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a>

---

##### `ApplyInput`<sup>Optional</sup> <a name="ApplyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput"></a>

```csharp
public WorkspaceRunApply ApplyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `DestroyInput`<sup>Optional</sup> <a name="DestroyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput"></a>

```csharp
public WorkspaceRunDestroy DestroyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunApply <a name="WorkspaceRunApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunApply {
    object ManualConfirm,
    object Retry = null,
    double RetryAttempts = null,
    double RetryBackoffMax = null,
    double RetryBackoffMin = null,
    object WaitForRun = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm">ManualConfirm</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry">Retry</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun">WaitForRun</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm"></a>

```csharp
public object ManualConfirm { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry"></a>

```csharp
public object Retry { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `RetryAttempts`<sup>Optional</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `RetryBackoffMax`<sup>Optional</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax"></a>

```csharp
public double RetryBackoffMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `RetryBackoffMin`<sup>Optional</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin"></a>

```csharp
public double RetryBackoffMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `WaitForRun`<sup>Optional</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun"></a>

```csharp
public object WaitForRun { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

### WorkspaceRunConfig <a name="WorkspaceRunConfig" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkspaceId,
    WorkspaceRunApply Apply = null,
    WorkspaceRunDestroy Destroy = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply">Apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy">Destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `Apply`<sup>Optional</sup> <a name="Apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply"></a>

```csharp
public WorkspaceRunApply Apply { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `Destroy`<sup>Optional</sup> <a name="Destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy"></a>

```csharp
public WorkspaceRunDestroy Destroy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceRunDestroy <a name="WorkspaceRunDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunDestroy {
    object ManualConfirm,
    object Retry = null,
    double RetryAttempts = null,
    double RetryBackoffMax = null,
    double RetryBackoffMin = null,
    object WaitForRun = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm">ManualConfirm</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry">Retry</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun">WaitForRun</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm"></a>

```csharp
public object ManualConfirm { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry"></a>

```csharp
public object Retry { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `RetryAttempts`<sup>Optional</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `RetryBackoffMax`<sup>Optional</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax"></a>

```csharp
public double RetryBackoffMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `RetryBackoffMin`<sup>Optional</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin"></a>

```csharp
public double RetryBackoffMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `WaitForRun`<sup>Optional</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun"></a>

```csharp
public object WaitForRun { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceRunApplyOutputReference <a name="WorkspaceRunApplyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunApplyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts">ResetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax">ResetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin">ResetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun">ResetWaitForRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetRetryAttempts` <a name="ResetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts"></a>

```csharp
private void ResetRetryAttempts()
```

##### `ResetRetryBackoffMax` <a name="ResetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax"></a>

```csharp
private void ResetRetryBackoffMax()
```

##### `ResetRetryBackoffMin` <a name="ResetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin"></a>

```csharp
private void ResetRetryBackoffMin()
```

##### `ResetWaitForRun` <a name="ResetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun"></a>

```csharp
private void ResetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput">ManualConfirmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput">RetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput">RetryBackoffMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput">RetryBackoffMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput">RetryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput">WaitForRunInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm">ManualConfirm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry">Retry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun">WaitForRun</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualConfirmInput`<sup>Optional</sup> <a name="ManualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput"></a>

```csharp
public object ManualConfirmInput { get; }
```

- *Type:* object

---

##### `RetryAttemptsInput`<sup>Optional</sup> <a name="RetryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput"></a>

```csharp
public double RetryAttemptsInput { get; }
```

- *Type:* double

---

##### `RetryBackoffMaxInput`<sup>Optional</sup> <a name="RetryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput"></a>

```csharp
public double RetryBackoffMaxInput { get; }
```

- *Type:* double

---

##### `RetryBackoffMinInput`<sup>Optional</sup> <a name="RetryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput"></a>

```csharp
public double RetryBackoffMinInput { get; }
```

- *Type:* double

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput"></a>

```csharp
public object RetryInput { get; }
```

- *Type:* object

---

##### `WaitForRunInput`<sup>Optional</sup> <a name="WaitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput"></a>

```csharp
public object WaitForRunInput { get; }
```

- *Type:* object

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm"></a>

```csharp
public object ManualConfirm { get; }
```

- *Type:* object

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry"></a>

```csharp
public object Retry { get; }
```

- *Type:* object

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; }
```

- *Type:* double

---

##### `RetryBackoffMax`<sup>Required</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax"></a>

```csharp
public double RetryBackoffMax { get; }
```

- *Type:* double

---

##### `RetryBackoffMin`<sup>Required</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin"></a>

```csharp
public double RetryBackoffMin { get; }
```

- *Type:* double

---

##### `WaitForRun`<sup>Required</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun"></a>

```csharp
public object WaitForRun { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue"></a>

```csharp
public WorkspaceRunApply InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---


### WorkspaceRunDestroyOutputReference <a name="WorkspaceRunDestroyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceRunDestroyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts">ResetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax">ResetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin">ResetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun">ResetWaitForRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetRetryAttempts` <a name="ResetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts"></a>

```csharp
private void ResetRetryAttempts()
```

##### `ResetRetryBackoffMax` <a name="ResetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax"></a>

```csharp
private void ResetRetryBackoffMax()
```

##### `ResetRetryBackoffMin` <a name="ResetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin"></a>

```csharp
private void ResetRetryBackoffMin()
```

##### `ResetWaitForRun` <a name="ResetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun"></a>

```csharp
private void ResetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput">ManualConfirmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput">RetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput">RetryBackoffMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput">RetryBackoffMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput">RetryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput">WaitForRunInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm">ManualConfirm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry">Retry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun">WaitForRun</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualConfirmInput`<sup>Optional</sup> <a name="ManualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput"></a>

```csharp
public object ManualConfirmInput { get; }
```

- *Type:* object

---

##### `RetryAttemptsInput`<sup>Optional</sup> <a name="RetryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput"></a>

```csharp
public double RetryAttemptsInput { get; }
```

- *Type:* double

---

##### `RetryBackoffMaxInput`<sup>Optional</sup> <a name="RetryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput"></a>

```csharp
public double RetryBackoffMaxInput { get; }
```

- *Type:* double

---

##### `RetryBackoffMinInput`<sup>Optional</sup> <a name="RetryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput"></a>

```csharp
public double RetryBackoffMinInput { get; }
```

- *Type:* double

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput"></a>

```csharp
public object RetryInput { get; }
```

- *Type:* object

---

##### `WaitForRunInput`<sup>Optional</sup> <a name="WaitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput"></a>

```csharp
public object WaitForRunInput { get; }
```

- *Type:* object

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm"></a>

```csharp
public object ManualConfirm { get; }
```

- *Type:* object

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry"></a>

```csharp
public object Retry { get; }
```

- *Type:* object

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; }
```

- *Type:* double

---

##### `RetryBackoffMax`<sup>Required</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax"></a>

```csharp
public double RetryBackoffMax { get; }
```

- *Type:* double

---

##### `RetryBackoffMin`<sup>Required</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin"></a>

```csharp
public double RetryBackoffMin { get; }
```

- *Type:* double

---

##### `WaitForRun`<sup>Required</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun"></a>

```csharp
public object WaitForRun { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue"></a>

```csharp
public WorkspaceRunDestroy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---



