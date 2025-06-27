# `dataTfeRegistryModule` Submodule <a name="`dataTfeRegistryModule` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryModule <a name="DataTfeRegistryModule" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModule(Construct Scope, string Id, DataTfeRegistryModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig">DataTfeRegistryModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig">DataTfeRegistryModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig">PutTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo">PutVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses">PutVersionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig">ResetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo">ResetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses">ResetVersionStatuses</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions"></a>

```csharp
private void PutPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions.parameter.value"></a>

- *Type:* object

---

##### `PutTestConfig` <a name="PutTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig"></a>

```csharp
private void PutTestConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig.parameter.value"></a>

- *Type:* object

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo"></a>

```csharp
private void PutVcsRepo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* object

---

##### `PutVersionStatuses` <a name="PutVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses"></a>

```csharp
private void PutVersionStatuses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses.parameter.value"></a>

- *Type:* object

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName"></a>

```csharp
private void ResetRegistryName()
```

##### `ResetTestConfig` <a name="ResetTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig"></a>

```csharp
private void ResetTestConfig()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo"></a>

```csharp
private void ResetVcsRepo()
```

##### `ResetVersionStatuses` <a name="ResetVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses"></a>

```csharp
private void ResetVersionStatuses()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryModule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeRegistryModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeRegistryModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeRegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode">NoCode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId">NoCodeModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource">NoCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism">PublishingMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig">TestConfig</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses">VersionStatuses</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput">ModuleProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput">PermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput">TestConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput">VcsRepoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput">VersionStatusesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider">ModuleProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NoCode`<sup>Required</sup> <a name="NoCode" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode"></a>

```csharp
public IResolvable NoCode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NoCodeModuleId`<sup>Required</sup> <a name="NoCodeModuleId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId"></a>

```csharp
public string NoCodeModuleId { get; }
```

- *Type:* string

---

##### `NoCodeModuleSource`<sup>Required</sup> <a name="NoCodeModuleSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource"></a>

```csharp
public string NoCodeModuleSource { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions"></a>

```csharp
public DataTfeRegistryModulePermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a>

---

##### `PublishingMechanism`<sup>Required</sup> <a name="PublishingMechanism" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism"></a>

```csharp
public string PublishingMechanism { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TestConfig`<sup>Required</sup> <a name="TestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig"></a>

```csharp
public DataTfeRegistryModuleTestConfigList TestConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo"></a>

```csharp
public DataTfeRegistryModuleVcsRepoList VcsRepo { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a>

---

##### `VersionStatuses`<sup>Required</sup> <a name="VersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses"></a>

```csharp
public DataTfeRegistryModuleVersionStatusesList VersionStatuses { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a>

---

##### `ModuleProviderInput`<sup>Optional</sup> <a name="ModuleProviderInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput"></a>

```csharp
public string ModuleProviderInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput"></a>

```csharp
public object PermissionsInput { get; }
```

- *Type:* object

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `TestConfigInput`<sup>Optional</sup> <a name="TestConfigInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput"></a>

```csharp
public object TestConfigInput { get; }
```

- *Type:* object

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput"></a>

```csharp
public object VcsRepoInput { get; }
```

- *Type:* object

---

##### `VersionStatusesInput`<sup>Optional</sup> <a name="VersionStatusesInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput"></a>

```csharp
public object VersionStatusesInput { get; }
```

- *Type:* object

---

##### `ModuleProvider`<sup>Required</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider"></a>

```csharp
public string ModuleProvider { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryModuleConfig <a name="DataTfeRegistryModuleConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ModuleProvider,
    string Name,
    string Organization,
    string Namespace = null,
    object Permissions = null,
    string RegistryName = null,
    object TestConfig = null,
    object VcsRepo = null,
    object VersionStatuses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider">ModuleProvider</a></code> | <code>string</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization">Organization</a></code> | <code>string</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions">Permissions</a></code> | <code>object</code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName">RegistryName</a></code> | <code>string</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig">TestConfig</a></code> | <code>object</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo">VcsRepo</a></code> | <code>object</code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses">VersionStatuses</a></code> | <code>object</code> | version_statuses block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ModuleProvider`<sup>Required</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider"></a>

```csharp
public string ModuleProvider { get; set; }
```

- *Type:* string

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions"></a>

```csharp
public object Permissions { get; set; }
```

- *Type:* object

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `TestConfig`<sup>Optional</sup> <a name="TestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig"></a>

```csharp
public object TestConfig { get; set; }
```

- *Type:* object

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo"></a>

```csharp
public object VcsRepo { get; set; }
```

- *Type:* object

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `VersionStatuses`<sup>Optional</sup> <a name="VersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses"></a>

```csharp
public object VersionStatuses { get; set; }
```

- *Type:* object

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

### DataTfeRegistryModulePermissions <a name="DataTfeRegistryModulePermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModulePermissions {

};
```


### DataTfeRegistryModuleTestConfig <a name="DataTfeRegistryModuleTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleTestConfig {

};
```


### DataTfeRegistryModuleVcsRepo <a name="DataTfeRegistryModuleVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVcsRepo {

};
```


### DataTfeRegistryModuleVersionStatuses <a name="DataTfeRegistryModuleVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVersionStatuses {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryModulePermissionsList <a name="DataTfeRegistryModulePermissionsList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModulePermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get"></a>

```csharp
private DataTfeRegistryModulePermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModulePermissionsOutputReference <a name="DataTfeRegistryModulePermissionsOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModulePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete">CanDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync">CanResync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry">CanRetry</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanDelete`<sup>Required</sup> <a name="CanDelete" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete"></a>

```csharp
public IResolvable CanDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CanResync`<sup>Required</sup> <a name="CanResync" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync"></a>

```csharp
public IResolvable CanResync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CanRetry`<sup>Required</sup> <a name="CanRetry" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry"></a>

```csharp
public IResolvable CanRetry { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleTestConfigList <a name="DataTfeRegistryModuleTestConfigList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleTestConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get"></a>

```csharp
private DataTfeRegistryModuleTestConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleTestConfigOutputReference <a name="DataTfeRegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleTestConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled">TestsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestsEnabled`<sup>Required</sup> <a name="TestsEnabled" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```csharp
public IResolvable TestsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleVcsRepoList <a name="DataTfeRegistryModuleVcsRepoList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVcsRepoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get"></a>

```csharp
private DataTfeRegistryModuleVcsRepoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleVcsRepoOutputReference <a name="DataTfeRegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVcsRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier">DisplayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules">IngressSubmodules</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl">RepositoryHttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider">ServiceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex">TagsRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `DisplayIdentifier`<sup>Required</sup> <a name="DisplayIdentifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```csharp
public string DisplayIdentifier { get; }
```

- *Type:* string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```csharp
public string GithubAppInstallationId { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IngressSubmodules`<sup>Required</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules"></a>

```csharp
public IResolvable IngressSubmodules { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; }
```

- *Type:* string

---

##### `RepositoryHttpUrl`<sup>Required</sup> <a name="RepositoryHttpUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl"></a>

```csharp
public string RepositoryHttpUrl { get; }
```

- *Type:* string

---

##### `ServiceProvider`<sup>Required</sup> <a name="ServiceProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider"></a>

```csharp
public string ServiceProvider { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags"></a>

```csharp
public IResolvable Tags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TagsRegex`<sup>Required</sup> <a name="TagsRegex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex"></a>

```csharp
public string TagsRegex { get; }
```

- *Type:* string

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl"></a>

```csharp
public string WebhookUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleVersionStatusesList <a name="DataTfeRegistryModuleVersionStatusesList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVersionStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get"></a>

```csharp
private DataTfeRegistryModuleVersionStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTfeRegistryModuleVersionStatusesOutputReference <a name="DataTfeRegistryModuleVersionStatusesOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeRegistryModuleVersionStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



