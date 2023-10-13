# `tfe_team_access`

Refer to the Terraform Registory for docs: [`tfe_team_access`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access).

# `teamAccess` Submodule <a name="`teamAccess` Submodule" id="@cdktf/provider-tfe.teamAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamAccess <a name="TeamAccess" id="@cdktf/provider-tfe.teamAccess.TeamAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access tfe_team_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamAccess(Construct Scope, string Id, TeamAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig">TeamAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.teamAccess.TeamAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig">TeamAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.teamAccess.TeamAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.teamAccess.TeamAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions"></a>

```csharp
private void PutPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.teamAccess.TeamAccess.putPermissions.parameter.value"></a>

- *Type:* object

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TeamAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.teamAccess.TeamAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList">TeamAccessPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissionsInput">PermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissions"></a>

```csharp
public TeamAccessPermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList">TeamAccessPermissionsList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.permissionsInput"></a>

```csharp
public object PermissionsInput { get; }
```

- *Type:* object

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.teamAccess.TeamAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamAccessConfig <a name="TeamAccessConfig" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamAccessConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TeamId,
    string WorkspaceId,
    string Access = null,
    string Id = null,
    object Permissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#team_id TeamAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#workspace_id TeamAccess#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#access TeamAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#id TeamAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.permissions">Permissions</a></code> | <code>object</code> | permissions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#team_id TeamAccess#team_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#workspace_id TeamAccess#workspace_id}.

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#access TeamAccess#access}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#id TeamAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-tfe.teamAccess.TeamAccessConfig.property.permissions"></a>

```csharp
public object Permissions { get; set; }
```

- *Type:* object

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#permissions TeamAccess#permissions}

---

### TeamAccessPermissions <a name="TeamAccessPermissions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamAccessPermissions {
    string Runs,
    object RunTasks,
    string SentinelMocks,
    string StateVersions,
    string Variables,
    object WorkspaceLocking
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runs">Runs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#runs TeamAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runTasks">RunTasks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#run_tasks TeamAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.sentinelMocks">SentinelMocks</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#sentinel_mocks TeamAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.stateVersions">StateVersions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#state_versions TeamAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.variables">Variables</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#variables TeamAccess#variables}. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.workspaceLocking">WorkspaceLocking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#workspace_locking TeamAccess#workspace_locking}. |

---

##### `Runs`<sup>Required</sup> <a name="Runs" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runs"></a>

```csharp
public string Runs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#runs TeamAccess#runs}.

---

##### `RunTasks`<sup>Required</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.runTasks"></a>

```csharp
public object RunTasks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#run_tasks TeamAccess#run_tasks}.

---

##### `SentinelMocks`<sup>Required</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.sentinelMocks"></a>

```csharp
public string SentinelMocks { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#sentinel_mocks TeamAccess#sentinel_mocks}.

---

##### `StateVersions`<sup>Required</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.stateVersions"></a>

```csharp
public string StateVersions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#state_versions TeamAccess#state_versions}.

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.variables"></a>

```csharp
public string Variables { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#variables TeamAccess#variables}.

---

##### `WorkspaceLocking`<sup>Required</sup> <a name="WorkspaceLocking" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissions.property.workspaceLocking"></a>

```csharp
public object WorkspaceLocking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team_access#workspace_locking TeamAccess#workspace_locking}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamAccessPermissionsList <a name="TeamAccessPermissionsList" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamAccessPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get"></a>

```csharp
private TeamAccessPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamAccessPermissionsOutputReference <a name="TeamAccessPermissionsOutputReference" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamAccessPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runsInput">RunsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasksInput">RunTasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocksInput">SentinelMocksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersionsInput">StateVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variablesInput">VariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLockingInput">WorkspaceLockingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runs">Runs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasks">RunTasks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocks">SentinelMocks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersions">StateVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variables">Variables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLocking">WorkspaceLocking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RunsInput`<sup>Optional</sup> <a name="RunsInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runsInput"></a>

```csharp
public string RunsInput { get; }
```

- *Type:* string

---

##### `RunTasksInput`<sup>Optional</sup> <a name="RunTasksInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasksInput"></a>

```csharp
public object RunTasksInput { get; }
```

- *Type:* object

---

##### `SentinelMocksInput`<sup>Optional</sup> <a name="SentinelMocksInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocksInput"></a>

```csharp
public string SentinelMocksInput { get; }
```

- *Type:* string

---

##### `StateVersionsInput`<sup>Optional</sup> <a name="StateVersionsInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersionsInput"></a>

```csharp
public string StateVersionsInput { get; }
```

- *Type:* string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variablesInput"></a>

```csharp
public string VariablesInput { get; }
```

- *Type:* string

---

##### `WorkspaceLockingInput`<sup>Optional</sup> <a name="WorkspaceLockingInput" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLockingInput"></a>

```csharp
public object WorkspaceLockingInput { get; }
```

- *Type:* object

---

##### `Runs`<sup>Required</sup> <a name="Runs" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runs"></a>

```csharp
public string Runs { get; }
```

- *Type:* string

---

##### `RunTasks`<sup>Required</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.runTasks"></a>

```csharp
public object RunTasks { get; }
```

- *Type:* object

---

##### `SentinelMocks`<sup>Required</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.sentinelMocks"></a>

```csharp
public string SentinelMocks { get; }
```

- *Type:* string

---

##### `StateVersions`<sup>Required</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.stateVersions"></a>

```csharp
public string StateVersions { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.variables"></a>

```csharp
public string Variables { get; }
```

- *Type:* string

---

##### `WorkspaceLocking`<sup>Required</sup> <a name="WorkspaceLocking" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.workspaceLocking"></a>

```csharp
public object WorkspaceLocking { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamAccess.TeamAccessPermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



