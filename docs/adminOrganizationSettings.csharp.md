# `tfe_admin_organization_settings`

Refer to the Terraform Registory for docs: [`tfe_admin_organization_settings`](https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings).

# `adminOrganizationSettings` Submodule <a name="`adminOrganizationSettings` Submodule" id="@cdktf/provider-tfe.adminOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminOrganizationSettings <a name="AdminOrganizationSettings" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings tfe_admin_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new AdminOrganizationSettings(Construct Scope, string Id, AdminOrganizationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig">AdminOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig">AdminOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools">ResetAccessBetaTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing">ResetGlobalModuleSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations">ResetModuleSharingConsumerOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit">ResetWorkspaceLimit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessBetaTools` <a name="ResetAccessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools"></a>

```csharp
private void ResetAccessBetaTools()
```

##### `ResetGlobalModuleSharing` <a name="ResetGlobalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing"></a>

```csharp
private void ResetGlobalModuleSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModuleSharingConsumerOrganizations` <a name="ResetModuleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations"></a>

```csharp
private void ResetModuleSharingConsumerOrganizations()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetWorkspaceLimit` <a name="ResetWorkspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit"></a>

```csharp
private void ResetWorkspaceLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AdminOrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AdminOrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

AdminOrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled">SsoEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput">AccessBetaToolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput">GlobalModuleSharingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput">ModuleSharingConsumerOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput">WorkspaceLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools">AccessBetaTools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing">GlobalModuleSharing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations">ModuleSharingConsumerOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit">WorkspaceLimit</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SsoEnabled`<sup>Required</sup> <a name="SsoEnabled" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled"></a>

```csharp
public IResolvable SsoEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccessBetaToolsInput`<sup>Optional</sup> <a name="AccessBetaToolsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput"></a>

```csharp
public object AccessBetaToolsInput { get; }
```

- *Type:* object

---

##### `GlobalModuleSharingInput`<sup>Optional</sup> <a name="GlobalModuleSharingInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput"></a>

```csharp
public object GlobalModuleSharingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModuleSharingConsumerOrganizationsInput`<sup>Optional</sup> <a name="ModuleSharingConsumerOrganizationsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput"></a>

```csharp
public string[] ModuleSharingConsumerOrganizationsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `WorkspaceLimitInput`<sup>Optional</sup> <a name="WorkspaceLimitInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput"></a>

```csharp
public double WorkspaceLimitInput { get; }
```

- *Type:* double

---

##### `AccessBetaTools`<sup>Required</sup> <a name="AccessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools"></a>

```csharp
public object AccessBetaTools { get; }
```

- *Type:* object

---

##### `GlobalModuleSharing`<sup>Required</sup> <a name="GlobalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing"></a>

```csharp
public object GlobalModuleSharing { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModuleSharingConsumerOrganizations`<sup>Required</sup> <a name="ModuleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations"></a>

```csharp
public string[] ModuleSharingConsumerOrganizations { get; }
```

- *Type:* string[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `WorkspaceLimit`<sup>Required</sup> <a name="WorkspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit"></a>

```csharp
public double WorkspaceLimit { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminOrganizationSettingsConfig <a name="AdminOrganizationSettingsConfig" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new AdminOrganizationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AccessBetaTools = null,
    object GlobalModuleSharing = null,
    string Id = null,
    string[] ModuleSharingConsumerOrganizations = null,
    string Organization = null,
    double WorkspaceLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools">AccessBetaTools</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing">GlobalModuleSharing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations">ModuleSharingConsumerOrganizations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit">WorkspaceLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessBetaTools`<sup>Optional</sup> <a name="AccessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools"></a>

```csharp
public object AccessBetaTools { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}.

---

##### `GlobalModuleSharing`<sup>Optional</sup> <a name="GlobalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing"></a>

```csharp
public object GlobalModuleSharing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModuleSharingConsumerOrganizations`<sup>Optional</sup> <a name="ModuleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations"></a>

```csharp
public string[] ModuleSharingConsumerOrganizations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}.

---

##### `WorkspaceLimit`<sup>Optional</sup> <a name="WorkspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit"></a>

```csharp
public double WorkspaceLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}.

---



