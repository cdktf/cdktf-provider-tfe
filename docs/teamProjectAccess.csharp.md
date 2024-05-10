# `teamProjectAccess` Submodule <a name="`teamProjectAccess` Submodule" id="@cdktf/provider-tfe.teamProjectAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamProjectAccess <a name="TeamProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access tfe_team_project_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccess(Construct Scope, string Id, TeamProjectAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig">TeamProjectAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig">TeamProjectAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess">PutProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess">PutWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess">ResetProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProjectAccess` <a name="PutProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess"></a>

```csharp
private void PutProjectAccess(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess.parameter.value"></a>

- *Type:* object

---

##### `PutWorkspaceAccess` <a name="PutWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess"></a>

```csharp
private void PutWorkspaceAccess(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectAccess` <a name="ResetProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess"></a>

```csharp
private void ResetProjectAccess()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess"></a>

```csharp
private void ResetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamProjectAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamProjectAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamProjectAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamProjectAccess.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamProjectAccess to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamProjectAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TeamProjectAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess">ProjectAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess">WorkspaceAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput">ProjectAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ProjectAccess`<sup>Required</sup> <a name="ProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess"></a>

```csharp
public TeamProjectAccessProjectAccessList ProjectAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a>

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess"></a>

```csharp
public TeamProjectAccessWorkspaceAccessList WorkspaceAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectAccessInput`<sup>Optional</sup> <a name="ProjectAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput"></a>

```csharp
public object ProjectAccessInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput"></a>

```csharp
public object WorkspaceAccessInput { get; }
```

- *Type:* object

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamProjectAccessConfig <a name="TeamProjectAccessConfig" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Access,
    string ProjectId,
    string TeamId,
    string Id = null,
    object ProjectAccess = null,
    object WorkspaceAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess">ProjectAccess</a></code> | <code>object</code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>object</code> | workspace_access block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectAccess`<sup>Optional</sup> <a name="ProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess"></a>

```csharp
public object ProjectAccess { get; set; }
```

- *Type:* object

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess"></a>

```csharp
public object WorkspaceAccess { get; set; }
```

- *Type:* object

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

### TeamProjectAccessProjectAccess <a name="TeamProjectAccessProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessProjectAccess {
    string Settings = null,
    string Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams">Teams</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams"></a>

```csharp
public string Teams { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}.

---

### TeamProjectAccessWorkspaceAccess <a name="TeamProjectAccessWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessWorkspaceAccess {
    object Create = null,
    object Delete = null,
    object Locking = null,
    object Move = null,
    string Runs = null,
    object RunTasks = null,
    string SentinelMocks = null,
    string StateVersions = null,
    string Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create">Create</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#create TeamProjectAccess#create}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete">Delete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking">Locking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move">Move</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#move TeamProjectAccess#move}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs">Runs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks">RunTasks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks">SentinelMocks</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions">StateVersions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables">Variables</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create"></a>

```csharp
public object Create { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#create TeamProjectAccess#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}.

---

##### `Locking`<sup>Optional</sup> <a name="Locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking"></a>

```csharp
public object Locking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}.

---

##### `Move`<sup>Optional</sup> <a name="Move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move"></a>

```csharp
public object Move { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#move TeamProjectAccess#move}.

---

##### `Runs`<sup>Optional</sup> <a name="Runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs"></a>

```csharp
public string Runs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}.

---

##### `RunTasks`<sup>Optional</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks"></a>

```csharp
public object RunTasks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}.

---

##### `SentinelMocks`<sup>Optional</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks"></a>

```csharp
public string SentinelMocks { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}.

---

##### `StateVersions`<sup>Optional</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions"></a>

```csharp
public string StateVersions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables"></a>

```csharp
public string Variables { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamProjectAccessProjectAccessList <a name="TeamProjectAccessProjectAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessProjectAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get"></a>

```csharp
private TeamProjectAccessProjectAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamProjectAccessProjectAccessOutputReference <a name="TeamProjectAccessProjectAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessProjectAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams">Teams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput"></a>

```csharp
public string TeamsInput { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams"></a>

```csharp
public string Teams { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamProjectAccessWorkspaceAccessList <a name="TeamProjectAccessWorkspaceAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessWorkspaceAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get"></a>

```csharp
private TeamProjectAccessWorkspaceAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamProjectAccessWorkspaceAccessOutputReference <a name="TeamProjectAccessWorkspaceAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamProjectAccessWorkspaceAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking">ResetLocking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove">ResetMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns">ResetRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks">ResetRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks">ResetSentinelMocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions">ResetStateVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetLocking` <a name="ResetLocking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking"></a>

```csharp
private void ResetLocking()
```

##### `ResetMove` <a name="ResetMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove"></a>

```csharp
private void ResetMove()
```

##### `ResetRuns` <a name="ResetRuns" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns"></a>

```csharp
private void ResetRuns()
```

##### `ResetRunTasks` <a name="ResetRunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks"></a>

```csharp
private void ResetRunTasks()
```

##### `ResetSentinelMocks` <a name="ResetSentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks"></a>

```csharp
private void ResetSentinelMocks()
```

##### `ResetStateVersions` <a name="ResetStateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions"></a>

```csharp
private void ResetStateVersions()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput">CreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput">LockingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput">MoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput">RunsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput">RunTasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput">SentinelMocksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput">StateVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput">VariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create">Create</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete">Delete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking">Locking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move">Move</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs">Runs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks">RunTasks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks">SentinelMocks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions">StateVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables">Variables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput"></a>

```csharp
public object CreateInput { get; }
```

- *Type:* object

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `LockingInput`<sup>Optional</sup> <a name="LockingInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput"></a>

```csharp
public object LockingInput { get; }
```

- *Type:* object

---

##### `MoveInput`<sup>Optional</sup> <a name="MoveInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput"></a>

```csharp
public object MoveInput { get; }
```

- *Type:* object

---

##### `RunsInput`<sup>Optional</sup> <a name="RunsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput"></a>

```csharp
public string RunsInput { get; }
```

- *Type:* string

---

##### `RunTasksInput`<sup>Optional</sup> <a name="RunTasksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput"></a>

```csharp
public object RunTasksInput { get; }
```

- *Type:* object

---

##### `SentinelMocksInput`<sup>Optional</sup> <a name="SentinelMocksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput"></a>

```csharp
public string SentinelMocksInput { get; }
```

- *Type:* string

---

##### `StateVersionsInput`<sup>Optional</sup> <a name="StateVersionsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput"></a>

```csharp
public string StateVersionsInput { get; }
```

- *Type:* string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput"></a>

```csharp
public string VariablesInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create"></a>

```csharp
public object Create { get; }
```

- *Type:* object

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete"></a>

```csharp
public object Delete { get; }
```

- *Type:* object

---

##### `Locking`<sup>Required</sup> <a name="Locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking"></a>

```csharp
public object Locking { get; }
```

- *Type:* object

---

##### `Move`<sup>Required</sup> <a name="Move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move"></a>

```csharp
public object Move { get; }
```

- *Type:* object

---

##### `Runs`<sup>Required</sup> <a name="Runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs"></a>

```csharp
public string Runs { get; }
```

- *Type:* string

---

##### `RunTasks`<sup>Required</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks"></a>

```csharp
public object RunTasks { get; }
```

- *Type:* object

---

##### `SentinelMocks`<sup>Required</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks"></a>

```csharp
public string SentinelMocks { get; }
```

- *Type:* string

---

##### `StateVersions`<sup>Required</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions"></a>

```csharp
public string StateVersions { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables"></a>

```csharp
public string Variables { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



