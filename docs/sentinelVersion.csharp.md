# `sentinelVersion` Submodule <a name="`sentinelVersion` Submodule" id="@cdktf/provider-tfe.sentinelVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelVersion <a name="SentinelVersion" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version tfe_sentinel_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new SentinelVersion(Construct Scope, string Id, SentinelVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta">ResetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated">ResetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason">ResetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial">ResetOfficial</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBeta` <a name="ResetBeta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta"></a>

```csharp
private void ResetBeta()
```

##### `ResetDeprecated` <a name="ResetDeprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated"></a>

```csharp
private void ResetDeprecated()
```

##### `ResetDeprecatedReason` <a name="ResetDeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason"></a>

```csharp
private void ResetDeprecatedReason()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOfficial` <a name="ResetOfficial" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial"></a>

```csharp
private void ResetOfficial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SentinelVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SentinelVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SentinelVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SentinelVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput">BetaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput">DeprecatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput">DeprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput">OfficialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput">ShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta">Beta</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated">Deprecated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason">DeprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official">Official</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha">Sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BetaInput`<sup>Optional</sup> <a name="BetaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput"></a>

```csharp
public object BetaInput { get; }
```

- *Type:* object

---

##### `DeprecatedInput`<sup>Optional</sup> <a name="DeprecatedInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput"></a>

```csharp
public object DeprecatedInput { get; }
```

- *Type:* object

---

##### `DeprecatedReasonInput`<sup>Optional</sup> <a name="DeprecatedReasonInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput"></a>

```csharp
public string DeprecatedReasonInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OfficialInput`<sup>Optional</sup> <a name="OfficialInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput"></a>

```csharp
public object OfficialInput { get; }
```

- *Type:* object

---

##### `ShaInput`<sup>Optional</sup> <a name="ShaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput"></a>

```csharp
public string ShaInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Beta`<sup>Required</sup> <a name="Beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta"></a>

```csharp
public object Beta { get; }
```

- *Type:* object

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated"></a>

```csharp
public object Deprecated { get; }
```

- *Type:* object

---

##### `DeprecatedReason`<sup>Required</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason"></a>

```csharp
public string DeprecatedReason { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Official`<sup>Required</sup> <a name="Official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official"></a>

```csharp
public object Official { get; }
```

- *Type:* object

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha"></a>

```csharp
public string Sha { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelVersionConfig <a name="SentinelVersionConfig" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new SentinelVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Sha,
    string Url,
    string Version,
    object Beta = null,
    object Deprecated = null,
    string DeprecatedReason = null,
    object Enabled = null,
    string Id = null,
    object Official = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha">Sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#url SentinelVersion#url}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#version SentinelVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta">Beta</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#beta SentinelVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated">Deprecated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason">DeprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#id SentinelVersion#id}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official">Official</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#official SentinelVersion#official}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha"></a>

```csharp
public string Sha { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#version SentinelVersion#version}.

---

##### `Beta`<sup>Optional</sup> <a name="Beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta"></a>

```csharp
public object Beta { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#beta SentinelVersion#beta}.

---

##### `Deprecated`<sup>Optional</sup> <a name="Deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated"></a>

```csharp
public object Deprecated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}.

---

##### `DeprecatedReason`<sup>Optional</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason"></a>

```csharp
public string DeprecatedReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#id SentinelVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Official`<sup>Optional</sup> <a name="Official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official"></a>

```csharp
public object Official { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.0/docs/resources/sentinel_version#official SentinelVersion#official}.

---



