# `organizationRunTaskGlobalSettings` Submodule <a name="`organizationRunTaskGlobalSettings` Submodule" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRunTaskGlobalSettings <a name="OrganizationRunTaskGlobalSettings" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings tfe_organization_run_task_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OrganizationRunTaskGlobalSettings(Construct Scope, string Id, OrganizationRunTaskGlobalSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig">OrganizationRunTaskGlobalSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig">OrganizationRunTaskGlobalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationRunTaskGlobalSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationRunTaskGlobalSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationRunTaskGlobalSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationRunTaskGlobalSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationRunTaskGlobalSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationRunTaskGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRunTaskGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevelInput">EnforcementLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stagesInput">StagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskIdInput">TaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevel">EnforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnforcementLevelInput`<sup>Optional</sup> <a name="EnforcementLevelInput" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevelInput"></a>

```csharp
public string EnforcementLevelInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stagesInput"></a>

```csharp
public string[] StagesInput { get; }
```

- *Type:* string[]

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskIdInput"></a>

```csharp
public string TaskIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.enforcementLevel"></a>

```csharp
public string EnforcementLevel { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRunTaskGlobalSettingsConfig <a name="OrganizationRunTaskGlobalSettingsConfig" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OrganizationRunTaskGlobalSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnforcementLevel,
    string[] Stages,
    string TaskId,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel">EnforcementLevel</a></code> | <code>string</code> | The enforcement level of the global task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.stages">Stages</a></code> | <code>string[]</code> | Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.taskId">TaskId</a></code> | <code>string</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the run task will be applied globally. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel"></a>

```csharp
public string EnforcementLevel { get; set; }
```

- *Type:* string

The enforcement level of the global task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enforcement_level OrganizationRunTaskGlobalSettings#enforcement_level}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.stages"></a>

```csharp
public string[] Stages { get; set; }
```

- *Type:* string[]

Which stages the task will run in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#stages OrganizationRunTaskGlobalSettings#stages}

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.taskId"></a>

```csharp
public string TaskId { get; set; }
```

- *Type:* string

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#task_id OrganizationRunTaskGlobalSettings#task_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.organizationRunTaskGlobalSettings.OrganizationRunTaskGlobalSettingsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the run task will be applied globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/organization_run_task_global_settings#enabled OrganizationRunTaskGlobalSettings#enabled}

---



