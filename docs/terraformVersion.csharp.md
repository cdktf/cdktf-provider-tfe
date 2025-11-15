# `terraformVersion` Submodule <a name="`terraformVersion` Submodule" id="@cdktf/provider-tfe.terraformVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformVersion <a name="TerraformVersion" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version tfe_terraform_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TerraformVersion(Construct Scope, string Id, TerraformVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig">TerraformVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig">TerraformVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.putArchs">PutArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetArchs">ResetArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta">ResetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated">ResetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason">ResetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial">ResetOfficial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetSha">ResetSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArchs` <a name="PutArchs" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.putArchs"></a>

```csharp
private void PutArchs(IResolvable|TerraformVersionArchs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.putArchs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]

---

##### `ResetArchs` <a name="ResetArchs" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetArchs"></a>

```csharp
private void ResetArchs()
```

##### `ResetBeta` <a name="ResetBeta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta"></a>

```csharp
private void ResetBeta()
```

##### `ResetDeprecated` <a name="ResetDeprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated"></a>

```csharp
private void ResetDeprecated()
```

##### `ResetDeprecatedReason` <a name="ResetDeprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason"></a>

```csharp
private void ResetDeprecatedReason()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetOfficial` <a name="ResetOfficial" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial"></a>

```csharp
private void ResetOfficial()
```

##### `ResetSha` <a name="ResetSha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetSha"></a>

```csharp
private void ResetSha()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TerraformVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TerraformVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TerraformVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TerraformVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TerraformVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TerraformVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TerraformVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TerraformVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TerraformVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.archs">Archs</a></code> | <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList">TerraformVersionArchsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.archsInput">ArchsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput">BetaInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput">DeprecatedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput">DeprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput">OfficialInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput">ShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta">Beta</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated">Deprecated</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason">DeprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official">Official</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha">Sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Archs`<sup>Required</sup> <a name="Archs" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.archs"></a>

```csharp
public TerraformVersionArchsList Archs { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList">TerraformVersionArchsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ArchsInput`<sup>Optional</sup> <a name="ArchsInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.archsInput"></a>

```csharp
public IResolvable|TerraformVersionArchs[] ArchsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]

---

##### `BetaInput`<sup>Optional</sup> <a name="BetaInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput"></a>

```csharp
public bool|IResolvable BetaInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DeprecatedInput`<sup>Optional</sup> <a name="DeprecatedInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput"></a>

```csharp
public bool|IResolvable DeprecatedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DeprecatedReasonInput`<sup>Optional</sup> <a name="DeprecatedReasonInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput"></a>

```csharp
public string DeprecatedReasonInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OfficialInput`<sup>Optional</sup> <a name="OfficialInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput"></a>

```csharp
public bool|IResolvable OfficialInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ShaInput`<sup>Optional</sup> <a name="ShaInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput"></a>

```csharp
public string ShaInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Beta`<sup>Required</sup> <a name="Beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta"></a>

```csharp
public bool|IResolvable Beta { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated"></a>

```csharp
public bool|IResolvable Deprecated { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DeprecatedReason`<sup>Required</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason"></a>

```csharp
public string DeprecatedReason { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Official`<sup>Required</sup> <a name="Official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official"></a>

```csharp
public bool|IResolvable Official { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha"></a>

```csharp
public string Sha { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformVersionArchs <a name="TerraformVersionArchs" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TerraformVersionArchs {
    string Arch,
    string Os,
    string Sha,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.arch">Arch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#arch TerraformVersion#arch}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.os">Os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#os TerraformVersion#os}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.sha">Sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#sha TerraformVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#url TerraformVersion#url}. |

---

##### `Arch`<sup>Required</sup> <a name="Arch" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.arch"></a>

```csharp
public string Arch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#arch TerraformVersion#arch}.

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#os TerraformVersion#os}.

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.sha"></a>

```csharp
public string Sha { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#sha TerraformVersion#sha}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#url TerraformVersion#url}.

---

### TerraformVersionConfig <a name="TerraformVersionConfig" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TerraformVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Version,
    IResolvable|TerraformVersionArchs[] Archs = null,
    bool|IResolvable Beta = null,
    bool|IResolvable Deprecated = null,
    string DeprecatedReason = null,
    bool|IResolvable Enabled = null,
    bool|IResolvable Official = null,
    string Sha = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#version TerraformVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.archs">Archs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#archs TerraformVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta">Beta</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#beta TerraformVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated">Deprecated</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason">DeprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official">Official</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#official TerraformVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha">Sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#sha TerraformVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#url TerraformVersion#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#version TerraformVersion#version}.

---

##### `Archs`<sup>Optional</sup> <a name="Archs" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.archs"></a>

```csharp
public IResolvable|TerraformVersionArchs[] Archs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#archs TerraformVersion#archs}.

---

##### `Beta`<sup>Optional</sup> <a name="Beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta"></a>

```csharp
public bool|IResolvable Beta { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#beta TerraformVersion#beta}.

---

##### `Deprecated`<sup>Optional</sup> <a name="Deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated"></a>

```csharp
public bool|IResolvable Deprecated { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}.

---

##### `DeprecatedReason`<sup>Optional</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason"></a>

```csharp
public string DeprecatedReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}.

---

##### `Official`<sup>Optional</sup> <a name="Official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official"></a>

```csharp
public bool|IResolvable Official { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#official TerraformVersion#official}.

---

##### `Sha`<sup>Optional</sup> <a name="Sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha"></a>

```csharp
public string Sha { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#sha TerraformVersion#sha}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/terraform_version#url TerraformVersion#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### TerraformVersionArchsList <a name="TerraformVersionArchsList" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TerraformVersionArchsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.get"></a>

```csharp
private TerraformVersionArchsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsList.property.internalValue"></a>

```csharp
public IResolvable|TerraformVersionArchs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>[]

---


### TerraformVersionArchsOutputReference <a name="TerraformVersionArchsOutputReference" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TerraformVersionArchsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.archInput">ArchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.shaInput">ShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.arch">Arch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.sha">Sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchInput`<sup>Optional</sup> <a name="ArchInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.archInput"></a>

```csharp
public string ArchInput { get; }
```

- *Type:* string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `ShaInput`<sup>Optional</sup> <a name="ShaInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.shaInput"></a>

```csharp
public string ShaInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Arch`<sup>Required</sup> <a name="Arch" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.arch"></a>

```csharp
public string Arch { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.sha"></a>

```csharp
public string Sha { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionArchsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TerraformVersionArchs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionArchs">TerraformVersionArchs</a>

---



