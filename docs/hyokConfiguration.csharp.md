# `hyokConfiguration` Submodule <a name="`hyokConfiguration` Submodule" id="@cdktf/provider-tfe.hyokConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyokConfiguration <a name="HyokConfiguration" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new HyokConfiguration(Construct Scope, string Id, HyokConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions">PutKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions">ResetKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsOptions` <a name="PutKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions"></a>

```csharp
private void PutKmsOptions(HyokConfigurationKmsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `ResetKmsOptions` <a name="ResetKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions"></a>

```csharp
private void ResetKmsOptions()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

HyokConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

HyokConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

HyokConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

HyokConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HyokConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HyokConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HyokConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions">KmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput">KekIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput">KmsOptionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput">OidcConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput">OidcConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId">KekId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId">OidcConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType">OidcConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsOptions`<sup>Required</sup> <a name="KmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions"></a>

```csharp
public HyokConfigurationKmsOptionsOutputReference KmsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a>

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput"></a>

```csharp
public string AgentPoolIdInput { get; }
```

- *Type:* string

---

##### `KekIdInput`<sup>Optional</sup> <a name="KekIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput"></a>

```csharp
public string KekIdInput { get; }
```

- *Type:* string

---

##### `KmsOptionsInput`<sup>Optional</sup> <a name="KmsOptionsInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput"></a>

```csharp
public IResolvable|HyokConfigurationKmsOptions KmsOptionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OidcConfigurationIdInput`<sup>Optional</sup> <a name="OidcConfigurationIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput"></a>

```csharp
public string OidcConfigurationIdInput { get; }
```

- *Type:* string

---

##### `OidcConfigurationTypeInput`<sup>Optional</sup> <a name="OidcConfigurationTypeInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput"></a>

```csharp
public string OidcConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; }
```

- *Type:* string

---

##### `KekId`<sup>Required</sup> <a name="KekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId"></a>

```csharp
public string KekId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OidcConfigurationId`<sup>Required</sup> <a name="OidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId"></a>

```csharp
public string OidcConfigurationId { get; }
```

- *Type:* string

---

##### `OidcConfigurationType`<sup>Required</sup> <a name="OidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType"></a>

```csharp
public string OidcConfigurationType { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HyokConfigurationConfig <a name="HyokConfigurationConfig" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new HyokConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentPoolId,
    string KekId,
    string Name,
    string OidcConfigurationId,
    string OidcConfigurationType,
    HyokConfigurationKmsOptions KmsOptions = null,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId">KekId</a></code> | <code>string</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId">OidcConfigurationId</a></code> | <code>string</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType">OidcConfigurationType</a></code> | <code>string</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions">KmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization">Organization</a></code> | <code>string</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; set; }
```

- *Type:* string

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `KekId`<sup>Required</sup> <a name="KekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId"></a>

```csharp
public string KekId { get; set; }
```

- *Type:* string

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `OidcConfigurationId`<sup>Required</sup> <a name="OidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId"></a>

```csharp
public string OidcConfigurationId { get; set; }
```

- *Type:* string

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `OidcConfigurationType`<sup>Required</sup> <a name="OidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType"></a>

```csharp
public string OidcConfigurationType { get; set; }
```

- *Type:* string

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `KmsOptions`<sup>Optional</sup> <a name="KmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions"></a>

```csharp
public HyokConfigurationKmsOptions KmsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

### HyokConfigurationKmsOptions <a name="HyokConfigurationKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new HyokConfigurationKmsOptions {
    string KeyLocation = null,
    string KeyRegion = null,
    string KeyRingId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation">KeyLocation</a></code> | <code>string</code> | The location in which the GCP key ring exists. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion">KeyRegion</a></code> | <code>string</code> | The AWS region where your key is located. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId">KeyRingId</a></code> | <code>string</code> | The root resource for Google Cloud KMS keys and key versions. |

---

##### `KeyLocation`<sup>Optional</sup> <a name="KeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation"></a>

```csharp
public string KeyLocation { get; set; }
```

- *Type:* string

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

##### `KeyRegion`<sup>Optional</sup> <a name="KeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion"></a>

```csharp
public string KeyRegion { get; set; }
```

- *Type:* string

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

##### `KeyRingId`<sup>Optional</sup> <a name="KeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId"></a>

```csharp
public string KeyRingId { get; set; }
```

- *Type:* string

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyokConfigurationKmsOptionsOutputReference <a name="HyokConfigurationKmsOptionsOutputReference" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new HyokConfigurationKmsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation">ResetKeyLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion">ResetKeyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId">ResetKeyRingId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyLocation` <a name="ResetKeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation"></a>

```csharp
private void ResetKeyLocation()
```

##### `ResetKeyRegion` <a name="ResetKeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion"></a>

```csharp
private void ResetKeyRegion()
```

##### `ResetKeyRingId` <a name="ResetKeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId"></a>

```csharp
private void ResetKeyRingId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput">KeyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput">KeyRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput">KeyRingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation">KeyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion">KeyRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId">KeyRingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyLocationInput`<sup>Optional</sup> <a name="KeyLocationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput"></a>

```csharp
public string KeyLocationInput { get; }
```

- *Type:* string

---

##### `KeyRegionInput`<sup>Optional</sup> <a name="KeyRegionInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput"></a>

```csharp
public string KeyRegionInput { get; }
```

- *Type:* string

---

##### `KeyRingIdInput`<sup>Optional</sup> <a name="KeyRingIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput"></a>

```csharp
public string KeyRingIdInput { get; }
```

- *Type:* string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation"></a>

```csharp
public string KeyLocation { get; }
```

- *Type:* string

---

##### `KeyRegion`<sup>Required</sup> <a name="KeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion"></a>

```csharp
public string KeyRegion { get; }
```

- *Type:* string

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId"></a>

```csharp
public string KeyRingId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HyokConfigurationKmsOptions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---



