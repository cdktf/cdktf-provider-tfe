# `data_tfe_organization_run_task`

Refer to the Terraform Registory for docs: [`data_tfe_organization_run_task`](https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task).

# `dataTfeOrganizationRunTask` Submodule <a name="`dataTfeOrganizationRunTask` Submodule" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganizationRunTask <a name="DataTfeOrganizationRunTask" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task tfe_organization_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeOrganizationRunTask(Construct Scope, string Id, DataTfeOrganizationRunTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig">DataTfeOrganizationRunTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig">DataTfeOrganizationRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeOrganizationRunTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeOrganizationRunTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

DataTfeOrganizationRunTask.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationRunTaskConfig <a name="DataTfeOrganizationRunTaskConfig" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new DataTfeOrganizationRunTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Category = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    string Organization = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#name DataTfeOrganizationRunTask#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#category DataTfeOrganizationRunTask#category}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#description DataTfeOrganizationRunTask#description}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#id DataTfeOrganizationRunTask#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#organization DataTfeOrganizationRunTask#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#url DataTfeOrganizationRunTask#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#name DataTfeOrganizationRunTask#name}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#category DataTfeOrganizationRunTask#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#description DataTfeOrganizationRunTask#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#id DataTfeOrganizationRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#organization DataTfeOrganizationRunTask#organization}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/data-sources/organization_run_task#url DataTfeOrganizationRunTask#url}.

---



