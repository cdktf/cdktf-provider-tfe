# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-tfe.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-tfe.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team tfe_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.Team.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new Team(Construct Scope, string Id, TeamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.team.Team.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.team.Team.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.team.Team.putOrganizationAccess">PutOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetAllowMemberTokenManagement">ResetAllowMemberTokenManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganizationAccess">ResetOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetSsoTeamId">ResetSsoTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.team.Team.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.team.Team.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.team.Team.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.team.Team.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.team.Team.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.team.Team.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.team.Team.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.team.Team.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.team.Team.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.team.Team.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.team.Team.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.team.Team.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOrganizationAccess` <a name="PutOrganizationAccess" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess"></a>

```csharp
private void PutOrganizationAccess(TeamOrganizationAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `ResetAllowMemberTokenManagement` <a name="ResetAllowMemberTokenManagement" id="@cdktf/provider-tfe.team.Team.resetAllowMemberTokenManagement"></a>

```csharp
private void ResetAllowMemberTokenManagement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.team.Team.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.team.Team.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOrganizationAccess` <a name="ResetOrganizationAccess" id="@cdktf/provider-tfe.team.Team.resetOrganizationAccess"></a>

```csharp
private void ResetOrganizationAccess()
```

##### `ResetSsoTeamId` <a name="ResetSsoTeamId" id="@cdktf/provider-tfe.team.Team.resetSsoTeamId"></a>

```csharp
private void ResetSsoTeamId()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-tfe.team.Team.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.team.Team.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Team.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.team.Team.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.team.Team.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Team.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.team.Team.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Team.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.team.Team.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Team.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Team to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccess">OrganizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagementInput">AllowMemberTokenManagementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccessInput">OrganizationAccessInput</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput">SsoTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagement">AllowMemberTokenManagement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamId">SsoTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.team.Team.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.team.Team.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.team.Team.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.team.Team.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.team.Team.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.team.Team.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.team.Team.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.team.Team.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.team.Team.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.team.Team.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.team.Team.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.Team.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.team.Team.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OrganizationAccess`<sup>Required</sup> <a name="OrganizationAccess" id="@cdktf/provider-tfe.team.Team.property.organizationAccess"></a>

```csharp
public TeamOrganizationAccessOutputReference OrganizationAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a>

---

##### `AllowMemberTokenManagementInput`<sup>Optional</sup> <a name="AllowMemberTokenManagementInput" id="@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagementInput"></a>

```csharp
public object AllowMemberTokenManagementInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.team.Team.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.team.Team.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationAccessInput`<sup>Optional</sup> <a name="OrganizationAccessInput" id="@cdktf/provider-tfe.team.Team.property.organizationAccessInput"></a>

```csharp
public TeamOrganizationAccess OrganizationAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.team.Team.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `SsoTeamIdInput`<sup>Optional</sup> <a name="SsoTeamIdInput" id="@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput"></a>

```csharp
public string SsoTeamIdInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-tfe.team.Team.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AllowMemberTokenManagement`<sup>Required</sup> <a name="AllowMemberTokenManagement" id="@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagement"></a>

```csharp
public object AllowMemberTokenManagement { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.team.Team.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.team.Team.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `SsoTeamId`<sup>Required</sup> <a name="SsoTeamId" id="@cdktf/provider-tfe.team.Team.property.ssoTeamId"></a>

```csharp
public string SsoTeamId { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-tfe.team.Team.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.team.Team.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-tfe.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowMemberTokenManagement = null,
    string Id = null,
    string Organization = null,
    TeamOrganizationAccess OrganizationAccess = null,
    string SsoTeamId = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#name Team#name}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.allowMemberTokenManagement">AllowMemberTokenManagement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#allow_member_token_management Team#allow_member_token_management}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#organization Team#organization}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess">OrganizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | organization_access block. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId">SsoTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#sso_team_id Team#sso_team_id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.visibility">Visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#visibility Team#visibility}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.team.TeamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.team.TeamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.team.TeamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.team.TeamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.team.TeamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.TeamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.team.TeamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.team.TeamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#name Team#name}.

---

##### `AllowMemberTokenManagement`<sup>Optional</sup> <a name="AllowMemberTokenManagement" id="@cdktf/provider-tfe.team.TeamConfig.property.allowMemberTokenManagement"></a>

```csharp
public object AllowMemberTokenManagement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#allow_member_token_management Team#allow_member_token_management}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.team.TeamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.team.TeamConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#organization Team#organization}.

---

##### `OrganizationAccess`<sup>Optional</sup> <a name="OrganizationAccess" id="@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess"></a>

```csharp
public TeamOrganizationAccess OrganizationAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

organization_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#organization_access Team#organization_access}

---

##### `SsoTeamId`<sup>Optional</sup> <a name="SsoTeamId" id="@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId"></a>

```csharp
public string SsoTeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#sso_team_id Team#sso_team_id}.

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-tfe.team.TeamConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#visibility Team#visibility}.

---

### TeamOrganizationAccess <a name="TeamOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamOrganizationAccess {
    object AccessSecretTeams = null,
    object ManageAgentPools = null,
    object ManageMembership = null,
    object ManageModules = null,
    object ManageOrganizationAccess = null,
    object ManagePolicies = null,
    object ManagePolicyOverrides = null,
    object ManageProjects = null,
    object ManageProviders = null,
    object ManageRunTasks = null,
    object ManageTeams = null,
    object ManageVcsSettings = null,
    object ManageWorkspaces = null,
    object ReadProjects = null,
    object ReadWorkspaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.accessSecretTeams">AccessSecretTeams</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#access_secret_teams Team#access_secret_teams}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageAgentPools">ManageAgentPools</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_agent_pools Team#manage_agent_pools}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership">ManageMembership</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_membership Team#manage_membership}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules">ManageModules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_modules Team#manage_modules}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageOrganizationAccess">ManageOrganizationAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_organization_access Team#manage_organization_access}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies">ManagePolicies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_policies Team#manage_policies}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides">ManagePolicyOverrides</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects">ManageProjects</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_projects Team#manage_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders">ManageProviders</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_providers Team#manage_providers}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks">ManageRunTasks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageTeams">ManageTeams</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_teams Team#manage_teams}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings">ManageVcsSettings</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces">ManageWorkspaces</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_workspaces Team#manage_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects">ReadProjects</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#read_projects Team#read_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces">ReadWorkspaces</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#read_workspaces Team#read_workspaces}. |

---

##### `AccessSecretTeams`<sup>Optional</sup> <a name="AccessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.accessSecretTeams"></a>

```csharp
public object AccessSecretTeams { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#access_secret_teams Team#access_secret_teams}.

---

##### `ManageAgentPools`<sup>Optional</sup> <a name="ManageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageAgentPools"></a>

```csharp
public object ManageAgentPools { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_agent_pools Team#manage_agent_pools}.

---

##### `ManageMembership`<sup>Optional</sup> <a name="ManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership"></a>

```csharp
public object ManageMembership { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_membership Team#manage_membership}.

---

##### `ManageModules`<sup>Optional</sup> <a name="ManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules"></a>

```csharp
public object ManageModules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_modules Team#manage_modules}.

---

##### `ManageOrganizationAccess`<sup>Optional</sup> <a name="ManageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageOrganizationAccess"></a>

```csharp
public object ManageOrganizationAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_organization_access Team#manage_organization_access}.

---

##### `ManagePolicies`<sup>Optional</sup> <a name="ManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies"></a>

```csharp
public object ManagePolicies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_policies Team#manage_policies}.

---

##### `ManagePolicyOverrides`<sup>Optional</sup> <a name="ManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides"></a>

```csharp
public object ManagePolicyOverrides { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}.

---

##### `ManageProjects`<sup>Optional</sup> <a name="ManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects"></a>

```csharp
public object ManageProjects { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_projects Team#manage_projects}.

---

##### `ManageProviders`<sup>Optional</sup> <a name="ManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders"></a>

```csharp
public object ManageProviders { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_providers Team#manage_providers}.

---

##### `ManageRunTasks`<sup>Optional</sup> <a name="ManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks"></a>

```csharp
public object ManageRunTasks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}.

---

##### `ManageTeams`<sup>Optional</sup> <a name="ManageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageTeams"></a>

```csharp
public object ManageTeams { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_teams Team#manage_teams}.

---

##### `ManageVcsSettings`<sup>Optional</sup> <a name="ManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings"></a>

```csharp
public object ManageVcsSettings { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}.

---

##### `ManageWorkspaces`<sup>Optional</sup> <a name="ManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces"></a>

```csharp
public object ManageWorkspaces { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#manage_workspaces Team#manage_workspaces}.

---

##### `ReadProjects`<sup>Optional</sup> <a name="ReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects"></a>

```csharp
public object ReadProjects { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#read_projects Team#read_projects}.

---

##### `ReadWorkspaces`<sup>Optional</sup> <a name="ReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces"></a>

```csharp
public object ReadWorkspaces { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/team#read_workspaces Team#read_workspaces}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamOrganizationAccessOutputReference <a name="TeamOrganizationAccessOutputReference" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TeamOrganizationAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetAccessSecretTeams">ResetAccessSecretTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageAgentPools">ResetManageAgentPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership">ResetManageMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules">ResetManageModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageOrganizationAccess">ResetManageOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies">ResetManagePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides">ResetManagePolicyOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects">ResetManageProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders">ResetManageProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks">ResetManageRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageTeams">ResetManageTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings">ResetManageVcsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces">ResetManageWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects">ResetReadProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces">ResetReadWorkspaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessSecretTeams` <a name="ResetAccessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetAccessSecretTeams"></a>

```csharp
private void ResetAccessSecretTeams()
```

##### `ResetManageAgentPools` <a name="ResetManageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageAgentPools"></a>

```csharp
private void ResetManageAgentPools()
```

##### `ResetManageMembership` <a name="ResetManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership"></a>

```csharp
private void ResetManageMembership()
```

##### `ResetManageModules` <a name="ResetManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules"></a>

```csharp
private void ResetManageModules()
```

##### `ResetManageOrganizationAccess` <a name="ResetManageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageOrganizationAccess"></a>

```csharp
private void ResetManageOrganizationAccess()
```

##### `ResetManagePolicies` <a name="ResetManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies"></a>

```csharp
private void ResetManagePolicies()
```

##### `ResetManagePolicyOverrides` <a name="ResetManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides"></a>

```csharp
private void ResetManagePolicyOverrides()
```

##### `ResetManageProjects` <a name="ResetManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects"></a>

```csharp
private void ResetManageProjects()
```

##### `ResetManageProviders` <a name="ResetManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders"></a>

```csharp
private void ResetManageProviders()
```

##### `ResetManageRunTasks` <a name="ResetManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks"></a>

```csharp
private void ResetManageRunTasks()
```

##### `ResetManageTeams` <a name="ResetManageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageTeams"></a>

```csharp
private void ResetManageTeams()
```

##### `ResetManageVcsSettings` <a name="ResetManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings"></a>

```csharp
private void ResetManageVcsSettings()
```

##### `ResetManageWorkspaces` <a name="ResetManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces"></a>

```csharp
private void ResetManageWorkspaces()
```

##### `ResetReadProjects` <a name="ResetReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects"></a>

```csharp
private void ResetReadProjects()
```

##### `ResetReadWorkspaces` <a name="ResetReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces"></a>

```csharp
private void ResetReadWorkspaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeamsInput">AccessSecretTeamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPoolsInput">ManageAgentPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput">ManageMembershipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput">ManageModulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccessInput">ManageOrganizationAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput">ManagePoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput">ManagePolicyOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput">ManageProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput">ManageProvidersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput">ManageRunTasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeamsInput">ManageTeamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput">ManageVcsSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput">ManageWorkspacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput">ReadProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput">ReadWorkspacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeams">AccessSecretTeams</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPools">ManageAgentPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership">ManageMembership</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules">ManageModules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccess">ManageOrganizationAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies">ManagePolicies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides">ManagePolicyOverrides</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects">ManageProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders">ManageProviders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks">ManageRunTasks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeams">ManageTeams</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings">ManageVcsSettings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces">ManageWorkspaces</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects">ReadProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces">ReadWorkspaces</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessSecretTeamsInput`<sup>Optional</sup> <a name="AccessSecretTeamsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeamsInput"></a>

```csharp
public object AccessSecretTeamsInput { get; }
```

- *Type:* object

---

##### `ManageAgentPoolsInput`<sup>Optional</sup> <a name="ManageAgentPoolsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPoolsInput"></a>

```csharp
public object ManageAgentPoolsInput { get; }
```

- *Type:* object

---

##### `ManageMembershipInput`<sup>Optional</sup> <a name="ManageMembershipInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput"></a>

```csharp
public object ManageMembershipInput { get; }
```

- *Type:* object

---

##### `ManageModulesInput`<sup>Optional</sup> <a name="ManageModulesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput"></a>

```csharp
public object ManageModulesInput { get; }
```

- *Type:* object

---

##### `ManageOrganizationAccessInput`<sup>Optional</sup> <a name="ManageOrganizationAccessInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccessInput"></a>

```csharp
public object ManageOrganizationAccessInput { get; }
```

- *Type:* object

---

##### `ManagePoliciesInput`<sup>Optional</sup> <a name="ManagePoliciesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput"></a>

```csharp
public object ManagePoliciesInput { get; }
```

- *Type:* object

---

##### `ManagePolicyOverridesInput`<sup>Optional</sup> <a name="ManagePolicyOverridesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput"></a>

```csharp
public object ManagePolicyOverridesInput { get; }
```

- *Type:* object

---

##### `ManageProjectsInput`<sup>Optional</sup> <a name="ManageProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput"></a>

```csharp
public object ManageProjectsInput { get; }
```

- *Type:* object

---

##### `ManageProvidersInput`<sup>Optional</sup> <a name="ManageProvidersInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput"></a>

```csharp
public object ManageProvidersInput { get; }
```

- *Type:* object

---

##### `ManageRunTasksInput`<sup>Optional</sup> <a name="ManageRunTasksInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput"></a>

```csharp
public object ManageRunTasksInput { get; }
```

- *Type:* object

---

##### `ManageTeamsInput`<sup>Optional</sup> <a name="ManageTeamsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeamsInput"></a>

```csharp
public object ManageTeamsInput { get; }
```

- *Type:* object

---

##### `ManageVcsSettingsInput`<sup>Optional</sup> <a name="ManageVcsSettingsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput"></a>

```csharp
public object ManageVcsSettingsInput { get; }
```

- *Type:* object

---

##### `ManageWorkspacesInput`<sup>Optional</sup> <a name="ManageWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput"></a>

```csharp
public object ManageWorkspacesInput { get; }
```

- *Type:* object

---

##### `ReadProjectsInput`<sup>Optional</sup> <a name="ReadProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput"></a>

```csharp
public object ReadProjectsInput { get; }
```

- *Type:* object

---

##### `ReadWorkspacesInput`<sup>Optional</sup> <a name="ReadWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput"></a>

```csharp
public object ReadWorkspacesInput { get; }
```

- *Type:* object

---

##### `AccessSecretTeams`<sup>Required</sup> <a name="AccessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeams"></a>

```csharp
public object AccessSecretTeams { get; }
```

- *Type:* object

---

##### `ManageAgentPools`<sup>Required</sup> <a name="ManageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPools"></a>

```csharp
public object ManageAgentPools { get; }
```

- *Type:* object

---

##### `ManageMembership`<sup>Required</sup> <a name="ManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership"></a>

```csharp
public object ManageMembership { get; }
```

- *Type:* object

---

##### `ManageModules`<sup>Required</sup> <a name="ManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules"></a>

```csharp
public object ManageModules { get; }
```

- *Type:* object

---

##### `ManageOrganizationAccess`<sup>Required</sup> <a name="ManageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccess"></a>

```csharp
public object ManageOrganizationAccess { get; }
```

- *Type:* object

---

##### `ManagePolicies`<sup>Required</sup> <a name="ManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies"></a>

```csharp
public object ManagePolicies { get; }
```

- *Type:* object

---

##### `ManagePolicyOverrides`<sup>Required</sup> <a name="ManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides"></a>

```csharp
public object ManagePolicyOverrides { get; }
```

- *Type:* object

---

##### `ManageProjects`<sup>Required</sup> <a name="ManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects"></a>

```csharp
public object ManageProjects { get; }
```

- *Type:* object

---

##### `ManageProviders`<sup>Required</sup> <a name="ManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders"></a>

```csharp
public object ManageProviders { get; }
```

- *Type:* object

---

##### `ManageRunTasks`<sup>Required</sup> <a name="ManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks"></a>

```csharp
public object ManageRunTasks { get; }
```

- *Type:* object

---

##### `ManageTeams`<sup>Required</sup> <a name="ManageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeams"></a>

```csharp
public object ManageTeams { get; }
```

- *Type:* object

---

##### `ManageVcsSettings`<sup>Required</sup> <a name="ManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings"></a>

```csharp
public object ManageVcsSettings { get; }
```

- *Type:* object

---

##### `ManageWorkspaces`<sup>Required</sup> <a name="ManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces"></a>

```csharp
public object ManageWorkspaces { get; }
```

- *Type:* object

---

##### `ReadProjects`<sup>Required</sup> <a name="ReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects"></a>

```csharp
public object ReadProjects { get; }
```

- *Type:* object

---

##### `ReadWorkspaces`<sup>Required</sup> <a name="ReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces"></a>

```csharp
public object ReadWorkspaces { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue"></a>

```csharp
public TeamOrganizationAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---



