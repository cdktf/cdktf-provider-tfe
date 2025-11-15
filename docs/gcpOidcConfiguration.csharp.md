# `gcpOidcConfiguration` Submodule <a name="`gcpOidcConfiguration` Submodule" id="@cdktf/provider-tfe.gcpOidcConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpOidcConfiguration <a name="GcpOidcConfiguration" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration tfe_gcp_oidc_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new GcpOidcConfiguration(Construct Scope, string Id, GcpOidcConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig">GcpOidcConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig">GcpOidcConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GcpOidcConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

GcpOidcConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

GcpOidcConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

GcpOidcConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

GcpOidcConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GcpOidcConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpOidcConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpOidcConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GcpOidcConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.projectNumberInput">ProjectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.workloadProviderNameInput">WorkloadProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.workloadProviderName">WorkloadProviderName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.projectNumberInput"></a>

```csharp
public string ProjectNumberInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `WorkloadProviderNameInput`<sup>Optional</sup> <a name="WorkloadProviderNameInput" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.workloadProviderNameInput"></a>

```csharp
public string WorkloadProviderNameInput { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `WorkloadProviderName`<sup>Required</sup> <a name="WorkloadProviderName" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.workloadProviderName"></a>

```csharp
public string WorkloadProviderName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpOidcConfigurationConfig <a name="GcpOidcConfigurationConfig" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new GcpOidcConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProjectNumber,
    string ServiceAccountEmail,
    string WorkloadProviderName,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | The GCP Project containing the workload provider and service account. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The email of your GCP service account, with permissions to encrypt and decrypt using a Cloud KMS key. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.workloadProviderName">WorkloadProviderName</a></code> | <code>string</code> | The fully qualified workload provider path. |
| <code><a href="#@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.organization">Organization</a></code> | <code>string</code> | Name of the organization to which the TFE GCP OIDC configuration belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; set; }
```

- *Type:* string

The GCP Project containing the workload provider and service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#project_number GcpOidcConfiguration#project_number}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The email of your GCP service account, with permissions to encrypt and decrypt using a Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#service_account_email GcpOidcConfiguration#service_account_email}

---

##### `WorkloadProviderName`<sup>Required</sup> <a name="WorkloadProviderName" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.workloadProviderName"></a>

```csharp
public string WorkloadProviderName { get; set; }
```

- *Type:* string

The fully qualified workload provider path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#workload_provider_name GcpOidcConfiguration#workload_provider_name}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.gcpOidcConfiguration.GcpOidcConfigurationConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Name of the organization to which the TFE GCP OIDC configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#organization GcpOidcConfiguration#organization}

---



