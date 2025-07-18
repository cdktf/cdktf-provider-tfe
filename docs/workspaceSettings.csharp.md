# `workspaceSettings` Submodule <a name="`workspaceSettings` Submodule" id="@cdktf/provider-tfe.workspaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettings <a name="WorkspaceSettings" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings tfe_workspace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceSettings(Construct Scope, string Id, WorkspaceSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig">WorkspaceSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig">WorkspaceSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId">ResetAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled">ResetAssessmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply">ResetAutoApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags">ResetEffectiveTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode">ResetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState">ResetGlobalRemoteState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds">ResetRemoteStateConsumerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAgentPoolId` <a name="ResetAgentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId"></a>

```csharp
private void ResetAgentPoolId()
```

##### `ResetAssessmentsEnabled` <a name="ResetAssessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled"></a>

```csharp
private void ResetAssessmentsEnabled()
```

##### `ResetAutoApply` <a name="ResetAutoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply"></a>

```csharp
private void ResetAutoApply()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEffectiveTags` <a name="ResetEffectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags"></a>

```csharp
private void ResetEffectiveTags()
```

##### `ResetExecutionMode` <a name="ResetExecutionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode"></a>

```csharp
private void ResetExecutionMode()
```

##### `ResetGlobalRemoteState` <a name="ResetGlobalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState"></a>

```csharp
private void ResetGlobalRemoteState()
```

##### `ResetRemoteStateConsumerIds` <a name="ResetRemoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds"></a>

```csharp
private void ResetRemoteStateConsumerIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

WorkspaceSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites">Overwrites</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput">AssessmentsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput">AutoApplyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput">EffectiveTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput">ExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput">GlobalRemoteStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput">RemoteStateConsumerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply">AutoApply</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags">EffectiveTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode">ExecutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState">GlobalRemoteState</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Overwrites`<sup>Required</sup> <a name="Overwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites"></a>

```csharp
public WorkspaceSettingsOverwritesList Overwrites { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a>

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput"></a>

```csharp
public string AgentPoolIdInput { get; }
```

- *Type:* string

---

##### `AssessmentsEnabledInput`<sup>Optional</sup> <a name="AssessmentsEnabledInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput"></a>

```csharp
public object AssessmentsEnabledInput { get; }
```

- *Type:* object

---

##### `AutoApplyInput`<sup>Optional</sup> <a name="AutoApplyInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput"></a>

```csharp
public object AutoApplyInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectiveTagsInput`<sup>Optional</sup> <a name="EffectiveTagsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EffectiveTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionModeInput`<sup>Optional</sup> <a name="ExecutionModeInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput"></a>

```csharp
public string ExecutionModeInput { get; }
```

- *Type:* string

---

##### `GlobalRemoteStateInput`<sup>Optional</sup> <a name="GlobalRemoteStateInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput"></a>

```csharp
public object GlobalRemoteStateInput { get; }
```

- *Type:* object

---

##### `RemoteStateConsumerIdsInput`<sup>Optional</sup> <a name="RemoteStateConsumerIdsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput"></a>

```csharp
public string[] RemoteStateConsumerIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; }
```

- *Type:* string

---

##### `AssessmentsEnabled`<sup>Required</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled"></a>

```csharp
public object AssessmentsEnabled { get; }
```

- *Type:* object

---

##### `AutoApply`<sup>Required</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply"></a>

```csharp
public object AutoApply { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveTags`<sup>Required</sup> <a name="EffectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EffectiveTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionMode`<sup>Required</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode"></a>

```csharp
public string ExecutionMode { get; }
```

- *Type:* string

---

##### `GlobalRemoteState`<sup>Required</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState"></a>

```csharp
public object GlobalRemoteState { get; }
```

- *Type:* object

---

##### `RemoteStateConsumerIds`<sup>Required</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds"></a>

```csharp
public string[] RemoteStateConsumerIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingsConfig <a name="WorkspaceSettingsConfig" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkspaceId,
    string AgentPoolId = null,
    object AssessmentsEnabled = null,
    object AutoApply = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> EffectiveTags = null,
    string ExecutionMode = null,
    object GlobalRemoteState = null,
    string[] RemoteStateConsumerIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>object</code> | If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply">AutoApply</a></code> | <code>object</code> | If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description">Description</a></code> | <code>string</code> | A description of the workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags">EffectiveTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of all key-value tags set on the workspace (includes inheritted tags). |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode">ExecutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState">GlobalRemoteState</a></code> | <code>object</code> | Whether the workspace allows all workspaces in the organization to access its state data during runs. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>string[]</code> | The set of workspace IDs set as explicit remote state consumers for the given workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key-value tags to add to the workspace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}.

---

##### `AgentPoolId`<sup>Optional</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}.

---

##### `AssessmentsEnabled`<sup>Optional</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled"></a>

```csharp
public object AssessmentsEnabled { get; set; }
```

- *Type:* object

If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#assessments_enabled WorkspaceSettings#assessments_enabled}

---

##### `AutoApply`<sup>Optional</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply"></a>

```csharp
public object AutoApply { get; set; }
```

- *Type:* object

If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply.

If set to true, this resource will be automatically applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#auto_apply WorkspaceSettings#auto_apply}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#description WorkspaceSettings#description}

---

##### `EffectiveTags`<sup>Optional</sup> <a name="EffectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EffectiveTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of all key-value tags set on the workspace (includes inheritted tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#effective_tags WorkspaceSettings#effective_tags}

---

##### `ExecutionMode`<sup>Optional</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode"></a>

```csharp
public string ExecutionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}.

---

##### `GlobalRemoteState`<sup>Optional</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState"></a>

```csharp
public object GlobalRemoteState { get; set; }
```

- *Type:* object

Whether the workspace allows all workspaces in the organization to access its state data during runs.

If false, then only workspaces defined in `remote_state_consumer_ids` can access its state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#global_remote_state WorkspaceSettings#global_remote_state}

---

##### `RemoteStateConsumerIds`<sup>Optional</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds"></a>

```csharp
public string[] RemoteStateConsumerIds { get; set; }
```

- *Type:* string[]

The set of workspace IDs set as explicit remote state consumers for the given workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#remote_state_consumer_ids WorkspaceSettings#remote_state_consumer_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key-value tags to add to the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.0/docs/resources/workspace_settings#tags WorkspaceSettings#tags}

---

### WorkspaceSettingsOverwrites <a name="WorkspaceSettingsOverwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceSettingsOverwrites {

};
```


## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingsOverwritesList <a name="WorkspaceSettingsOverwritesList" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceSettingsOverwritesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get"></a>

```csharp
private WorkspaceSettingsOverwritesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkspaceSettingsOverwritesOutputReference <a name="WorkspaceSettingsOverwritesOutputReference" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceSettingsOverwritesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool">AgentPool</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode">ExecutionMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentPool`<sup>Required</sup> <a name="AgentPool" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool"></a>

```csharp
public IResolvable AgentPool { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExecutionMode`<sup>Required</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode"></a>

```csharp
public IResolvable ExecutionMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue"></a>

```csharp
public WorkspaceSettingsOverwrites InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a>

---



