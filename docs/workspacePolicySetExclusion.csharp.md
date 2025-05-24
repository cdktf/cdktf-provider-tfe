# `workspacePolicySetExclusion` Submodule <a name="`workspacePolicySetExclusion` Submodule" id="@cdktf/provider-tfe.workspacePolicySetExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacePolicySetExclusion <a name="WorkspacePolicySetExclusion" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion tfe_workspace_policy_set_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspacePolicySetExclusion(Construct Scope, string Id, WorkspacePolicySetExclusionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig">WorkspacePolicySetExclusionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig">WorkspacePolicySetExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspacePolicySetExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspacePolicySetExclusion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspacePolicySetExclusion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspacePolicySetExclusion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspacePolicySetExclusion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspacePolicySetExclusion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacePolicySetExclusion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacePolicySetExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspacePolicySetExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.policySetIdInput">PolicySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.policySetId">PolicySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicySetIdInput`<sup>Optional</sup> <a name="PolicySetIdInput" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.policySetIdInput"></a>

```csharp
public string PolicySetIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.policySetId"></a>

```csharp
public string PolicySetId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacePolicySetExclusionConfig <a name="WorkspacePolicySetExclusionConfig" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspacePolicySetExclusionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicySetId,
    string WorkspaceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.policySetId">PolicySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#policy_set_id WorkspacePolicySetExclusion#policy_set_id}. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#workspace_id WorkspacePolicySetExclusion#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#id WorkspacePolicySetExclusion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.policySetId"></a>

```csharp
public string PolicySetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#policy_set_id WorkspacePolicySetExclusion#policy_set_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#workspace_id WorkspacePolicySetExclusion#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspacePolicySetExclusion.WorkspacePolicySetExclusionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace_policy_set_exclusion#id WorkspacePolicySetExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



