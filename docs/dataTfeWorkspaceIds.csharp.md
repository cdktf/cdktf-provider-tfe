# `dataTfeWorkspaceIds` Submodule <a name="`dataTfeWorkspaceIds` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspaceIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspaceIds <a name="DataTfeWorkspaceIds" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids tfe_workspace_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceIds(Construct Scope, string Id, DataTfeWorkspaceIdsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig">DataTfeWorkspaceIdsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig">DataTfeWorkspaceIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters">PutTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags">ResetExcludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames">ResetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagFilters">ResetTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames">ResetTagNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTagFilters` <a name="PutTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters"></a>

```csharp
private void PutTagFilters(DataTfeWorkspaceIdsTagFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.putTagFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---

##### `ResetExcludeTags` <a name="ResetExcludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags"></a>

```csharp
private void ResetExcludeTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNames` <a name="ResetNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames"></a>

```csharp
private void ResetNames()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetTagFilters` <a name="ResetTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagFilters"></a>

```csharp
private void ResetTagFilters()
```

##### `ResetTagNames` <a name="ResetTagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames"></a>

```csharp
private void ResetTagNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceIds.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceIds.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceIds.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceIds.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeWorkspaceIds to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeWorkspaceIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspaceIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames">FullNames</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids">Ids</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference">DataTfeWorkspaceIdsTagFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput">ExcludeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput">NamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFiltersInput">TagFiltersInput</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput">TagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags">ExcludeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames">TagNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FullNames`<sup>Required</sup> <a name="FullNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames"></a>

```csharp
public StringMap FullNames { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids"></a>

```csharp
public StringMap Ids { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TagFilters`<sup>Required</sup> <a name="TagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFilters"></a>

```csharp
public DataTfeWorkspaceIdsTagFiltersOutputReference TagFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference">DataTfeWorkspaceIdsTagFiltersOutputReference</a>

---

##### `ExcludeTagsInput`<sup>Optional</sup> <a name="ExcludeTagsInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput"></a>

```csharp
public string[] ExcludeTagsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput"></a>

```csharp
public string[] NamesInput { get; }
```

- *Type:* string[]

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TagFiltersInput`<sup>Optional</sup> <a name="TagFiltersInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagFiltersInput"></a>

```csharp
public DataTfeWorkspaceIdsTagFilters TagFiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---

##### `TagNamesInput`<sup>Optional</sup> <a name="TagNamesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput"></a>

```csharp
public string[] TagNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeTags`<sup>Required</sup> <a name="ExcludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags"></a>

```csharp
public string[] ExcludeTags { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames"></a>

```csharp
public string[] TagNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceIdsConfig <a name="DataTfeWorkspaceIdsConfig" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceIdsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ExcludeTags = null,
    string Id = null,
    string[] Names = null,
    string Organization = null,
    DataTfeWorkspaceIdsTagFilters TagFilters = null,
    string[] TagNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags">ExcludeTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names">Names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | tag_filters block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames">TagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ExcludeTags`<sup>Optional</sup> <a name="ExcludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags"></a>

```csharp
public string[] ExcludeTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Names`<sup>Optional</sup> <a name="Names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names"></a>

```csharp
public string[] Names { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}.

---

##### `TagFilters`<sup>Optional</sup> <a name="TagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagFilters"></a>

```csharp
public DataTfeWorkspaceIdsTagFilters TagFilters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_filters DataTfeWorkspaceIds#tag_filters}

---

##### `TagNames`<sup>Optional</sup> <a name="TagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames"></a>

```csharp
public string[] TagNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}.

---

### DataTfeWorkspaceIdsTagFilters <a name="DataTfeWorkspaceIdsTagFilters" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceIdsTagFilters {
    System.Collections.Generic.IDictionary<string, string> Exclude = null,
    System.Collections.Generic.IDictionary<string, string> Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.exclude">Exclude</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude DataTfeWorkspaceIds#exclude}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.include">Include</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#include DataTfeWorkspaceIds#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.exclude"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Exclude { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#exclude DataTfeWorkspaceIds#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters.property.include"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Include { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/workspace_ids#include DataTfeWorkspaceIds#include}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTfeWorkspaceIdsTagFiltersOutputReference <a name="DataTfeWorkspaceIdsTagFiltersOutputReference" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceIdsTagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.includeInput">IncludeInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.exclude">Exclude</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.include">Include</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.excludeInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.includeInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.exclude"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Exclude { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.include"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Include { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFiltersOutputReference.property.internalValue"></a>

```csharp
public DataTfeWorkspaceIdsTagFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsTagFilters">DataTfeWorkspaceIdsTagFilters</a>

---



