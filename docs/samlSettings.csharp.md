# `samlSettings` Submodule <a name="`samlSettings` Submodule" id="@cdktf/provider-tfe.samlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlSettings <a name="SamlSettings" id="@cdktf/provider-tfe.samlSettings.SamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new SamlSettings(Construct Scope, string Id, SamlSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups">ResetAttrGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin">ResetAttrSiteAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername">ResetAttrUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned">ResetAuthnRequestsSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug">ResetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod">ResetSignatureDigestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod">ResetSignatureSigningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole">ResetSiteAdminRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout">ResetSsoApiTokenSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled">ResetTeamManagementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned">ResetWantAssertionsSigned</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAttrGroups` <a name="ResetAttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups"></a>

```csharp
private void ResetAttrGroups()
```

##### `ResetAttrSiteAdmin` <a name="ResetAttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin"></a>

```csharp
private void ResetAttrSiteAdmin()
```

##### `ResetAttrUsername` <a name="ResetAttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername"></a>

```csharp
private void ResetAttrUsername()
```

##### `ResetAuthnRequestsSigned` <a name="ResetAuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned"></a>

```csharp
private void ResetAuthnRequestsSigned()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDebug` <a name="ResetDebug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug"></a>

```csharp
private void ResetDebug()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetSignatureDigestMethod` <a name="ResetSignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod"></a>

```csharp
private void ResetSignatureDigestMethod()
```

##### `ResetSignatureSigningMethod` <a name="ResetSignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod"></a>

```csharp
private void ResetSignatureSigningMethod()
```

##### `ResetSiteAdminRole` <a name="ResetSiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole"></a>

```csharp
private void ResetSiteAdminRole()
```

##### `ResetSsoApiTokenSessionTimeout` <a name="ResetSsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout"></a>

```csharp
private void ResetSsoApiTokenSessionTimeout()
```

##### `ResetTeamManagementEnabled` <a name="ResetTeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled"></a>

```csharp
private void ResetTeamManagementEnabled()
```

##### `ResetWantAssertionsSigned` <a name="ResetWantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned"></a>

```csharp
private void ResetWantAssertionsSigned()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SamlSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SamlSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SamlSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

SamlSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl">AcsConsumerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl">MetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert">OldIdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput">AttrGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput">AttrSiteAdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput">AttrUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput">AuthnRequestsSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput">DebugInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput">IdpCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput">SignatureDigestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput">SignatureSigningMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput">SiteAdminRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput">SloEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput">SsoApiTokenSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput">SsoEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput">TeamManagementEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput">WantAssertionsSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups">AttrGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin">AttrSiteAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername">AttrUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned">AuthnRequestsSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug">Debug</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert">IdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod">SignatureDigestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod">SignatureSigningMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole">SiteAdminRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl">SloEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout">SsoApiTokenSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl">SsoEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled">TeamManagementEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned">WantAssertionsSigned</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AcsConsumerUrl`<sup>Required</sup> <a name="AcsConsumerUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl"></a>

```csharp
public string AcsConsumerUrl { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl"></a>

```csharp
public string MetadataUrl { get; }
```

- *Type:* string

---

##### `OldIdpCert`<sup>Required</sup> <a name="OldIdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert"></a>

```csharp
public string OldIdpCert { get; }
```

- *Type:* string

---

##### `AttrGroupsInput`<sup>Optional</sup> <a name="AttrGroupsInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput"></a>

```csharp
public string AttrGroupsInput { get; }
```

- *Type:* string

---

##### `AttrSiteAdminInput`<sup>Optional</sup> <a name="AttrSiteAdminInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput"></a>

```csharp
public string AttrSiteAdminInput { get; }
```

- *Type:* string

---

##### `AttrUsernameInput`<sup>Optional</sup> <a name="AttrUsernameInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput"></a>

```csharp
public string AttrUsernameInput { get; }
```

- *Type:* string

---

##### `AuthnRequestsSignedInput`<sup>Optional</sup> <a name="AuthnRequestsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput"></a>

```csharp
public object AuthnRequestsSignedInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DebugInput`<sup>Optional</sup> <a name="DebugInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput"></a>

```csharp
public object DebugInput { get; }
```

- *Type:* object

---

##### `IdpCertInput`<sup>Optional</sup> <a name="IdpCertInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput"></a>

```csharp
public string IdpCertInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `SignatureDigestMethodInput`<sup>Optional</sup> <a name="SignatureDigestMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput"></a>

```csharp
public string SignatureDigestMethodInput { get; }
```

- *Type:* string

---

##### `SignatureSigningMethodInput`<sup>Optional</sup> <a name="SignatureSigningMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput"></a>

```csharp
public string SignatureSigningMethodInput { get; }
```

- *Type:* string

---

##### `SiteAdminRoleInput`<sup>Optional</sup> <a name="SiteAdminRoleInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput"></a>

```csharp
public string SiteAdminRoleInput { get; }
```

- *Type:* string

---

##### `SloEndpointUrlInput`<sup>Optional</sup> <a name="SloEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput"></a>

```csharp
public string SloEndpointUrlInput { get; }
```

- *Type:* string

---

##### `SsoApiTokenSessionTimeoutInput`<sup>Optional</sup> <a name="SsoApiTokenSessionTimeoutInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput"></a>

```csharp
public double SsoApiTokenSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `SsoEndpointUrlInput`<sup>Optional</sup> <a name="SsoEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput"></a>

```csharp
public string SsoEndpointUrlInput { get; }
```

- *Type:* string

---

##### `TeamManagementEnabledInput`<sup>Optional</sup> <a name="TeamManagementEnabledInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput"></a>

```csharp
public object TeamManagementEnabledInput { get; }
```

- *Type:* object

---

##### `WantAssertionsSignedInput`<sup>Optional</sup> <a name="WantAssertionsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput"></a>

```csharp
public object WantAssertionsSignedInput { get; }
```

- *Type:* object

---

##### `AttrGroups`<sup>Required</sup> <a name="AttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups"></a>

```csharp
public string AttrGroups { get; }
```

- *Type:* string

---

##### `AttrSiteAdmin`<sup>Required</sup> <a name="AttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin"></a>

```csharp
public string AttrSiteAdmin { get; }
```

- *Type:* string

---

##### `AttrUsername`<sup>Required</sup> <a name="AttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername"></a>

```csharp
public string AttrUsername { get; }
```

- *Type:* string

---

##### `AuthnRequestsSigned`<sup>Required</sup> <a name="AuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned"></a>

```csharp
public object AuthnRequestsSigned { get; }
```

- *Type:* object

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Debug`<sup>Required</sup> <a name="Debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug"></a>

```csharp
public object Debug { get; }
```

- *Type:* object

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert"></a>

```csharp
public string IdpCert { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `SignatureDigestMethod`<sup>Required</sup> <a name="SignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod"></a>

```csharp
public string SignatureDigestMethod { get; }
```

- *Type:* string

---

##### `SignatureSigningMethod`<sup>Required</sup> <a name="SignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod"></a>

```csharp
public string SignatureSigningMethod { get; }
```

- *Type:* string

---

##### `SiteAdminRole`<sup>Required</sup> <a name="SiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole"></a>

```csharp
public string SiteAdminRole { get; }
```

- *Type:* string

---

##### `SloEndpointUrl`<sup>Required</sup> <a name="SloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl"></a>

```csharp
public string SloEndpointUrl { get; }
```

- *Type:* string

---

##### `SsoApiTokenSessionTimeout`<sup>Required</sup> <a name="SsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout"></a>

```csharp
public double SsoApiTokenSessionTimeout { get; }
```

- *Type:* double

---

##### `SsoEndpointUrl`<sup>Required</sup> <a name="SsoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl"></a>

```csharp
public string SsoEndpointUrl { get; }
```

- *Type:* string

---

##### `TeamManagementEnabled`<sup>Required</sup> <a name="TeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled"></a>

```csharp
public object TeamManagementEnabled { get; }
```

- *Type:* object

---

##### `WantAssertionsSigned`<sup>Required</sup> <a name="WantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned"></a>

```csharp
public object WantAssertionsSigned { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlSettingsConfig <a name="SamlSettingsConfig" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new SamlSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdpCert,
    string SloEndpointUrl,
    string SsoEndpointUrl,
    string AttrGroups = null,
    string AttrSiteAdmin = null,
    string AttrUsername = null,
    object AuthnRequestsSigned = null,
    string Certificate = null,
    object Debug = null,
    string PrivateKey = null,
    string SignatureDigestMethod = null,
    string SignatureSigningMethod = null,
    string SiteAdminRole = null,
    double SsoApiTokenSessionTimeout = null,
    object TeamManagementEnabled = null,
    object WantAssertionsSigned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert">IdpCert</a></code> | <code>string</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl">SloEndpointUrl</a></code> | <code>string</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl">SsoEndpointUrl</a></code> | <code>string</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups">AttrGroups</a></code> | <code>string</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin">AttrSiteAdmin</a></code> | <code>string</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername">AttrUsername</a></code> | <code>string</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned">AuthnRequestsSigned</a></code> | <code>object</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate">Certificate</a></code> | <code>string</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug">Debug</a></code> | <code>object</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod">SignatureDigestMethod</a></code> | <code>string</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod">SignatureSigningMethod</a></code> | <code>string</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole">SiteAdminRole</a></code> | <code>string</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout">SsoApiTokenSessionTimeout</a></code> | <code>double</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled">TeamManagementEnabled</a></code> | <code>object</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned">WantAssertionsSigned</a></code> | <code>object</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert"></a>

```csharp
public string IdpCert { get; set; }
```

- *Type:* string

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `SloEndpointUrl`<sup>Required</sup> <a name="SloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl"></a>

```csharp
public string SloEndpointUrl { get; set; }
```

- *Type:* string

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `SsoEndpointUrl`<sup>Required</sup> <a name="SsoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl"></a>

```csharp
public string SsoEndpointUrl { get; set; }
```

- *Type:* string

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `AttrGroups`<sup>Optional</sup> <a name="AttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups"></a>

```csharp
public string AttrGroups { get; set; }
```

- *Type:* string

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `AttrSiteAdmin`<sup>Optional</sup> <a name="AttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin"></a>

```csharp
public string AttrSiteAdmin { get; set; }
```

- *Type:* string

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `AttrUsername`<sup>Optional</sup> <a name="AttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername"></a>

```csharp
public string AttrUsername { get; set; }
```

- *Type:* string

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `AuthnRequestsSigned`<sup>Optional</sup> <a name="AuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned"></a>

```csharp
public object AuthnRequestsSigned { get; set; }
```

- *Type:* object

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug"></a>

```csharp
public object Debug { get; set; }
```

- *Type:* object

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `SignatureDigestMethod`<sup>Optional</sup> <a name="SignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod"></a>

```csharp
public string SignatureDigestMethod { get; set; }
```

- *Type:* string

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `SignatureSigningMethod`<sup>Optional</sup> <a name="SignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod"></a>

```csharp
public string SignatureSigningMethod { get; set; }
```

- *Type:* string

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `SiteAdminRole`<sup>Optional</sup> <a name="SiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole"></a>

```csharp
public string SiteAdminRole { get; set; }
```

- *Type:* string

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `SsoApiTokenSessionTimeout`<sup>Optional</sup> <a name="SsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout"></a>

```csharp
public double SsoApiTokenSessionTimeout { get; set; }
```

- *Type:* double

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `TeamManagementEnabled`<sup>Optional</sup> <a name="TeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled"></a>

```csharp
public object TeamManagementEnabled { get; set; }
```

- *Type:* object

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `WantAssertionsSigned`<sup>Optional</sup> <a name="WantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned"></a>

```csharp
public object WantAssertionsSigned { get; set; }
```

- *Type:* object

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---



