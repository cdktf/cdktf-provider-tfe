# `agentPoolExcludedWorkspaces` Submodule <a name="`agentPoolExcludedWorkspaces` Submodule" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentPoolExcludedWorkspaces <a name="AgentPoolExcludedWorkspaces" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces tfe_agent_pool_excluded_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new AgentPoolExcludedWorkspaces(Construct Scope, string Id, AgentPoolExcludedWorkspacesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig">AgentPoolExcludedWorkspacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig">AgentPoolExcludedWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AgentPoolExcludedWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AgentPoolExcludedWorkspaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AgentPoolExcludedWorkspaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AgentPoolExcludedWorkspaces.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AgentPoolExcludedWorkspaces.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AgentPoolExcludedWorkspaces resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentPoolExcludedWorkspaces to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentPoolExcludedWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AgentPoolExcludedWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.excludedWorkspaceIdsInput">ExcludedWorkspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.excludedWorkspaceIds">ExcludedWorkspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.agentPoolIdInput"></a>

```csharp
public string AgentPoolIdInput { get; }
```

- *Type:* string

---

##### `ExcludedWorkspaceIdsInput`<sup>Optional</sup> <a name="ExcludedWorkspaceIdsInput" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.excludedWorkspaceIdsInput"></a>

```csharp
public string[] ExcludedWorkspaceIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; }
```

- *Type:* string

---

##### `ExcludedWorkspaceIds`<sup>Required</sup> <a name="ExcludedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.excludedWorkspaceIds"></a>

```csharp
public string[] ExcludedWorkspaceIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentPoolExcludedWorkspacesConfig <a name="AgentPoolExcludedWorkspacesConfig" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new AgentPoolExcludedWorkspacesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentPoolId,
    string[] ExcludedWorkspaceIds,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#agent_pool_id AgentPoolExcludedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.excludedWorkspaceIds">ExcludedWorkspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#excluded_workspace_ids AgentPoolExcludedWorkspaces#excluded_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#id AgentPoolExcludedWorkspaces#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#agent_pool_id AgentPoolExcludedWorkspaces#agent_pool_id}.

---

##### `ExcludedWorkspaceIds`<sup>Required</sup> <a name="ExcludedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.excludedWorkspaceIds"></a>

```csharp
public string[] ExcludedWorkspaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#excluded_workspace_ids AgentPoolExcludedWorkspaces#excluded_workspace_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolExcludedWorkspaces.AgentPoolExcludedWorkspacesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/agent_pool_excluded_workspaces#id AgentPoolExcludedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



