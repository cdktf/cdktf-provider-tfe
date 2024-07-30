# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-tfe.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-tfe.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization tfe_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organization.Organization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new Organization(Construct Scope, string Id, OrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig">OrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.organization.OrganizationConfig">OrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled">ResetAggregatedCommitStatusEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces">ResetAllowForceDeleteWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced">ResetAssessmentsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy">ResetCollaboratorAuthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled">ResetCostEstimationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId">ResetOwnersTeamSamlRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans">ResetSendPassingStatusesForUntriggeredSpeculativePlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes">ResetSessionRememberMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.organization.Organization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.organization.Organization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.organization.Organization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.organization.Organization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.organization.Organization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.organization.Organization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.organization.Organization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.organization.Organization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.organization.Organization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.organization.Organization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAggregatedCommitStatusEnabled` <a name="ResetAggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled"></a>

```csharp
private void ResetAggregatedCommitStatusEnabled()
```

##### `ResetAllowForceDeleteWorkspaces` <a name="ResetAllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces"></a>

```csharp
private void ResetAllowForceDeleteWorkspaces()
```

##### `ResetAssessmentsEnforced` <a name="ResetAssessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced"></a>

```csharp
private void ResetAssessmentsEnforced()
```

##### `ResetCollaboratorAuthPolicy` <a name="ResetCollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy"></a>

```csharp
private void ResetCollaboratorAuthPolicy()
```

##### `ResetCostEstimationEnabled` <a name="ResetCostEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled"></a>

```csharp
private void ResetCostEstimationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.organization.Organization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwnersTeamSamlRoleId` <a name="ResetOwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId"></a>

```csharp
private void ResetOwnersTeamSamlRoleId()
```

##### `ResetSendPassingStatusesForUntriggeredSpeculativePlans` <a name="ResetSendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans"></a>

```csharp
private void ResetSendPassingStatusesForUntriggeredSpeculativePlans()
```

##### `ResetSessionRememberMinutes` <a name="ResetSessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes"></a>

```csharp
private void ResetSessionRememberMinutes()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes"></a>

```csharp
private void ResetSessionTimeoutMinutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.organization.Organization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Organization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Organization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Organization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Organization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Organization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.defaultProjectId">DefaultProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput">AggregatedCommitStatusEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput">AllowForceDeleteWorkspacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput">AssessmentsEnforcedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput">CollaboratorAuthPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput">CostEstimationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput">OwnersTeamSamlRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput">SendPassingStatusesForUntriggeredSpeculativePlansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput">SessionRememberMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled">AggregatedCommitStatusEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces">AllowForceDeleteWorkspaces</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced">AssessmentsEnforced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy">CollaboratorAuthPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled">CostEstimationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId">OwnersTeamSamlRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans">SendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes">SessionRememberMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.organization.Organization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.organization.Organization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.organization.Organization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.organization.Organization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organization.Organization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organization.Organization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organization.Organization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organization.Organization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organization.Organization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.Organization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organization.Organization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultProjectId`<sup>Required</sup> <a name="DefaultProjectId" id="@cdktf/provider-tfe.organization.Organization.property.defaultProjectId"></a>

```csharp
public string DefaultProjectId { get; }
```

- *Type:* string

---

##### `AggregatedCommitStatusEnabledInput`<sup>Optional</sup> <a name="AggregatedCommitStatusEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput"></a>

```csharp
public object AggregatedCommitStatusEnabledInput { get; }
```

- *Type:* object

---

##### `AllowForceDeleteWorkspacesInput`<sup>Optional</sup> <a name="AllowForceDeleteWorkspacesInput" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput"></a>

```csharp
public object AllowForceDeleteWorkspacesInput { get; }
```

- *Type:* object

---

##### `AssessmentsEnforcedInput`<sup>Optional</sup> <a name="AssessmentsEnforcedInput" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput"></a>

```csharp
public object AssessmentsEnforcedInput { get; }
```

- *Type:* object

---

##### `CollaboratorAuthPolicyInput`<sup>Optional</sup> <a name="CollaboratorAuthPolicyInput" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput"></a>

```csharp
public string CollaboratorAuthPolicyInput { get; }
```

- *Type:* string

---

##### `CostEstimationEnabledInput`<sup>Optional</sup> <a name="CostEstimationEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput"></a>

```csharp
public object CostEstimationEnabledInput { get; }
```

- *Type:* object

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-tfe.organization.Organization.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.organization.Organization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.organization.Organization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnersTeamSamlRoleIdInput`<sup>Optional</sup> <a name="OwnersTeamSamlRoleIdInput" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput"></a>

```csharp
public string OwnersTeamSamlRoleIdInput { get; }
```

- *Type:* string

---

##### `SendPassingStatusesForUntriggeredSpeculativePlansInput`<sup>Optional</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlansInput" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput"></a>

```csharp
public object SendPassingStatusesForUntriggeredSpeculativePlansInput { get; }
```

- *Type:* object

---

##### `SessionRememberMinutesInput`<sup>Optional</sup> <a name="SessionRememberMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput"></a>

```csharp
public double SessionRememberMinutesInput { get; }
```

- *Type:* double

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput"></a>

```csharp
public double SessionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `AggregatedCommitStatusEnabled`<sup>Required</sup> <a name="AggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled"></a>

```csharp
public object AggregatedCommitStatusEnabled { get; }
```

- *Type:* object

---

##### `AllowForceDeleteWorkspaces`<sup>Required</sup> <a name="AllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces"></a>

```csharp
public object AllowForceDeleteWorkspaces { get; }
```

- *Type:* object

---

##### `AssessmentsEnforced`<sup>Required</sup> <a name="AssessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced"></a>

```csharp
public object AssessmentsEnforced { get; }
```

- *Type:* object

---

##### `CollaboratorAuthPolicy`<sup>Required</sup> <a name="CollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy"></a>

```csharp
public string CollaboratorAuthPolicy { get; }
```

- *Type:* string

---

##### `CostEstimationEnabled`<sup>Required</sup> <a name="CostEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled"></a>

```csharp
public object CostEstimationEnabled { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-tfe.organization.Organization.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.organization.Organization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnersTeamSamlRoleId`<sup>Required</sup> <a name="OwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId"></a>

```csharp
public string OwnersTeamSamlRoleId { get; }
```

- *Type:* string

---

##### `SendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```csharp
public object SendPassingStatusesForUntriggeredSpeculativePlans { get; }
```

- *Type:* object

---

##### `SessionRememberMinutes`<sup>Required</sup> <a name="SessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes"></a>

```csharp
public double SessionRememberMinutes { get; }
```

- *Type:* double

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.organization.Organization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-tfe.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organization.OrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OrganizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    string Name,
    object AggregatedCommitStatusEnabled = null,
    object AllowForceDeleteWorkspaces = null,
    object AssessmentsEnforced = null,
    string CollaboratorAuthPolicy = null,
    object CostEstimationEnabled = null,
    string Id = null,
    string OwnersTeamSamlRoleId = null,
    object SendPassingStatusesForUntriggeredSpeculativePlans = null,
    double SessionRememberMinutes = null,
    double SessionTimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled">AggregatedCommitStatusEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces">AllowForceDeleteWorkspaces</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced">AssessmentsEnforced</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy">CollaboratorAuthPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled">CostEstimationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId">OwnersTeamSamlRoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans">SendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes">SessionRememberMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#email Organization#email}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#name Organization#name}.

---

##### `AggregatedCommitStatusEnabled`<sup>Optional</sup> <a name="AggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled"></a>

```csharp
public object AggregatedCommitStatusEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `AllowForceDeleteWorkspaces`<sup>Optional</sup> <a name="AllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces"></a>

```csharp
public object AllowForceDeleteWorkspaces { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `AssessmentsEnforced`<sup>Optional</sup> <a name="AssessmentsEnforced" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced"></a>

```csharp
public object AssessmentsEnforced { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `CollaboratorAuthPolicy`<sup>Optional</sup> <a name="CollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy"></a>

```csharp
public string CollaboratorAuthPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `CostEstimationEnabled`<sup>Optional</sup> <a name="CostEstimationEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled"></a>

```csharp
public object CostEstimationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnersTeamSamlRoleId`<sup>Optional</sup> <a name="OwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId"></a>

```csharp
public string OwnersTeamSamlRoleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `SendPassingStatusesForUntriggeredSpeculativePlans`<sup>Optional</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```csharp
public object SendPassingStatusesForUntriggeredSpeculativePlans { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `SessionRememberMinutes`<sup>Optional</sup> <a name="SessionRememberMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes"></a>

```csharp
public double SessionRememberMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---



