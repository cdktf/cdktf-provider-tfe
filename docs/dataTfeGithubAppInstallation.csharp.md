# `dataTfeGithubAppInstallation` Submodule <a name="`dataTfeGithubAppInstallation` Submodule" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeGithubAppInstallation <a name="DataTfeGithubAppInstallation" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation tfe_github_app_installation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeGithubAppInstallation(Construct Scope, string Id, DataTfeGithubAppInstallationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeGithubAppInstallation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeGithubAppInstallation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeGithubAppInstallation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeGithubAppInstallation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeGithubAppInstallation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeGithubAppInstallation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeGithubAppInstallation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput">InstallationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId">InstallationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput"></a>

```csharp
public double InstallationIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId"></a>

```csharp
public double InstallationId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeGithubAppInstallationConfig <a name="DataTfeGithubAppInstallationConfig" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeGithubAppInstallationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double InstallationId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId">InstallationId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId"></a>

```csharp
public double InstallationId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}.

---



