# `dataTfeRegistryProviders` Submodule <a name="`dataTfeRegistryProviders` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryProviders <a name="DataTfeRegistryProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_providers tfe_registry_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryProviders(Construct Scope, string Id, DataTfeRegistryProvidersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName"></a>

```csharp
private void ResetRegistryName()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryProviders.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryProviders.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryProviders.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryProviders.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeRegistryProviders to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeRegistryProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_providers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers">Providers</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search">Search</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Providers`<sup>Required</sup> <a name="Providers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers"></a>

```csharp
public DataTfeRegistryProvidersProvidersList Providers { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a>

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryProvidersConfig <a name="DataTfeRegistryProvidersConfig" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryProvidersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Organization = null,
    string RegistryName = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization">Organization</a></code> | <code>string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName">RegistryName</a></code> | <code>string</code> | Whether to list only public or private providers. Must be either `public` or `private`. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search">Search</a></code> | <code>string</code> | A query string to do a fuzzy search on provider name and namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_providers#organization DataTfeRegistryProviders#organization}

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

Whether to list only public or private providers. Must be either `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_providers#registry_name DataTfeRegistryProviders#registry_name}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

A query string to do a fuzzy search on provider name and namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/registry_providers#search DataTfeRegistryProviders#search}

---

### DataTfeRegistryProvidersProviders <a name="DataTfeRegistryProvidersProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryProvidersProviders {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryProvidersProvidersList <a name="DataTfeRegistryProvidersProvidersList" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryProvidersProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get"></a>

```csharp
private DataTfeRegistryProvidersProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataTfeRegistryProvidersProvidersOutputReference <a name="DataTfeRegistryProvidersProvidersOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryProvidersProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue"></a>

```csharp
public DataTfeRegistryProvidersProviders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a>

---



