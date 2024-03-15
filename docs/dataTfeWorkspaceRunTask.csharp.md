# `dataTfeWorkspaceRunTask` Submodule <a name="`dataTfeWorkspaceRunTask` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspaceRunTask <a name="DataTfeWorkspaceRunTask" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceRunTask(Construct Scope, string Id, DataTfeWorkspaceRunTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig">DataTfeWorkspaceRunTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig">DataTfeWorkspaceRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspaceRunTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceRunTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceRunTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceRunTask.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeWorkspaceRunTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTfeWorkspaceRunTask resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeWorkspaceRunTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeWorkspaceRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspaceRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.enforcementLevel">EnforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.taskIdInput">TaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.enforcementLevel"></a>

```csharp
public string EnforcementLevel { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.taskIdInput"></a>

```csharp
public string TaskIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceRunTaskConfig <a name="DataTfeWorkspaceRunTaskConfig" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeWorkspaceRunTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TaskId,
    string WorkspaceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.taskId">TaskId</a></code> | <code>string</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | The id of the workspace. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task#id DataTfeWorkspaceRunTask#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.taskId"></a>

```csharp
public string TaskId { get; set; }
```

- *Type:* string

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task#task_id DataTfeWorkspaceRunTask#task_id}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

The id of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task#workspace_id DataTfeWorkspaceRunTask#workspace_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeWorkspaceRunTask.DataTfeWorkspaceRunTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_run_task#id DataTfeWorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



