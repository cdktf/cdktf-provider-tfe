# `vaultOidcConfiguration` Submodule <a name="`vaultOidcConfiguration` Submodule" id="@cdktf/provider-tfe.vaultOidcConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultOidcConfiguration <a name="VaultOidcConfiguration" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration tfe_vault_oidc_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new VaultOidcConfiguration(Construct Scope, string Id, VaultOidcConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig">VaultOidcConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig">VaultOidcConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath">ResetAuthPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert">ResetEncodedCacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthPath` <a name="ResetAuthPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath"></a>

```csharp
private void ResetAuthPath()
```

##### `ResetEncodedCacert` <a name="ResetEncodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert"></a>

```csharp
private void ResetEncodedCacert()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

VaultOidcConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

VaultOidcConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

VaultOidcConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

VaultOidcConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultOidcConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultOidcConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultOidcConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput">AuthPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput">EncodedCacertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath">AuthPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert">EncodedCacert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AuthPathInput`<sup>Optional</sup> <a name="AuthPathInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput"></a>

```csharp
public string AuthPathInput { get; }
```

- *Type:* string

---

##### `EncodedCacertInput`<sup>Optional</sup> <a name="EncodedCacertInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput"></a>

```csharp
public string EncodedCacertInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AuthPath`<sup>Required</sup> <a name="AuthPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath"></a>

```csharp
public string AuthPath { get; }
```

- *Type:* string

---

##### `EncodedCacert`<sup>Required</sup> <a name="EncodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert"></a>

```csharp
public string EncodedCacert { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultOidcConfigurationConfig <a name="VaultOidcConfigurationConfig" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new VaultOidcConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Address,
    string Namespace,
    string RoleName,
    string AuthPath = null,
    string EncodedCacert = null,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address">Address</a></code> | <code>string</code> | The full address of your Vault instance. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace your JWT auth path is mounted in. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName">RoleName</a></code> | <code>string</code> | The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath">AuthPath</a></code> | <code>string</code> | The mounting path of JWT auth path of JWT auth. Defaults to "jwt". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert">EncodedCacert</a></code> | <code>string</code> | A base64 encoded certificate which can be used to authenticate your Vault certificate. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization">Organization</a></code> | <code>string</code> | Name of the organization to which the TFE Vault OIDC configuration belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The full address of your Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#address VaultOidcConfiguration#address}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace your JWT auth path is mounted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#namespace VaultOidcConfiguration#namespace}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#role_name VaultOidcConfiguration#role_name}

---

##### `AuthPath`<sup>Optional</sup> <a name="AuthPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath"></a>

```csharp
public string AuthPath { get; set; }
```

- *Type:* string

The mounting path of JWT auth path of JWT auth. Defaults to "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#auth_path VaultOidcConfiguration#auth_path}

---

##### `EncodedCacert`<sup>Optional</sup> <a name="EncodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert"></a>

```csharp
public string EncodedCacert { get; set; }
```

- *Type:* string

A base64 encoded certificate which can be used to authenticate your Vault certificate.

Only needed for self-hosted Vault Enterprise instances with a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#encoded_cacert VaultOidcConfiguration#encoded_cacert}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Name of the organization to which the TFE Vault OIDC configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#organization VaultOidcConfiguration#organization}

---



