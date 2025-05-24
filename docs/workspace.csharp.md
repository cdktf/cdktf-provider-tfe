# `workspace` Submodule <a name="`workspace` Submodule" id="@cdktf/provider-tfe.workspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workspace <a name="Workspace" id="@cdktf/provider-tfe.workspace.Workspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.Workspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new Workspace(Construct Scope, string Id, WorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.putVcsRepo">PutVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId">ResetAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan">ResetAllowDestroyPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled">ResetAssessmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApply">ResetAutoApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger">ResetAutoApplyRunTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration">ResetAutoDestroyActivityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt">ResetAutoDestroyAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode">ResetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled">ResetFileTriggersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState">ResetGlobalRemoteState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames">ResetIgnoreAdditionalTagNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTags">ResetIgnoreAdditionalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns">ResetQueueAllRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds">ResetRemoteStateConsumerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl">ResetSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled">ResetSpeculativeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId">ResetSshKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled">ResetStructuredRunOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTagNames">ResetTagNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion">ResetTerraformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns">ResetTriggerPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes">ResetTriggerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo">ResetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspace.Workspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspace.Workspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspace.Workspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspace.Workspace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspace.Workspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspace.Workspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspace.Workspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo"></a>

```csharp
private void PutVcsRepo(WorkspaceVcsRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `ResetAgentPoolId` <a name="ResetAgentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId"></a>

```csharp
private void ResetAgentPoolId()
```

##### `ResetAllowDestroyPlan` <a name="ResetAllowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan"></a>

```csharp
private void ResetAllowDestroyPlan()
```

##### `ResetAssessmentsEnabled` <a name="ResetAssessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled"></a>

```csharp
private void ResetAssessmentsEnabled()
```

##### `ResetAutoApply` <a name="ResetAutoApply" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApply"></a>

```csharp
private void ResetAutoApply()
```

##### `ResetAutoApplyRunTrigger` <a name="ResetAutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger"></a>

```csharp
private void ResetAutoApplyRunTrigger()
```

##### `ResetAutoDestroyActivityDuration` <a name="ResetAutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration"></a>

```csharp
private void ResetAutoDestroyActivityDuration()
```

##### `ResetAutoDestroyAt` <a name="ResetAutoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt"></a>

```csharp
private void ResetAutoDestroyAt()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.workspace.Workspace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionMode` <a name="ResetExecutionMode" id="@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode"></a>

```csharp
private void ResetExecutionMode()
```

##### `ResetFileTriggersEnabled` <a name="ResetFileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled"></a>

```csharp
private void ResetFileTriggersEnabled()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-tfe.workspace.Workspace.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetGlobalRemoteState` <a name="ResetGlobalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState"></a>

```csharp
private void ResetGlobalRemoteState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspace.Workspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreAdditionalTagNames` <a name="ResetIgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames"></a>

```csharp
private void ResetIgnoreAdditionalTagNames()
```

##### `ResetIgnoreAdditionalTags` <a name="ResetIgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTags"></a>

```csharp
private void ResetIgnoreAdditionalTags()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-tfe.workspace.Workspace.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.workspace.Workspace.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-tfe.workspace.Workspace.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetQueueAllRuns` <a name="ResetQueueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns"></a>

```csharp
private void ResetQueueAllRuns()
```

##### `ResetRemoteStateConsumerIds` <a name="ResetRemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds"></a>

```csharp
private void ResetRemoteStateConsumerIds()
```

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceName"></a>

```csharp
private void ResetSourceName()
```

##### `ResetSourceUrl` <a name="ResetSourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl"></a>

```csharp
private void ResetSourceUrl()
```

##### `ResetSpeculativeEnabled` <a name="ResetSpeculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled"></a>

```csharp
private void ResetSpeculativeEnabled()
```

##### `ResetSshKeyId` <a name="ResetSshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId"></a>

```csharp
private void ResetSshKeyId()
```

##### `ResetStructuredRunOutputEnabled` <a name="ResetStructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled"></a>

```csharp
private void ResetStructuredRunOutputEnabled()
```

##### `ResetTagNames` <a name="ResetTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetTagNames"></a>

```csharp
private void ResetTagNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-tfe.workspace.Workspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerraformVersion` <a name="ResetTerraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion"></a>

```csharp
private void ResetTerraformVersion()
```

##### `ResetTriggerPatterns` <a name="ResetTriggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns"></a>

```csharp
private void ResetTriggerPatterns()
```

##### `ResetTriggerPrefixes` <a name="ResetTriggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes"></a>

```csharp
private void ResetTriggerPrefixes()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo"></a>

```csharp
private void ResetVcsRepo()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Workspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Workspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Workspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

Workspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Workspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Workspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Workspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags">EffectiveTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy">InheritsProjectAutoDestroy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.resourceCount">ResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput">AllowDestroyPlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput">AssessmentsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput">AutoApplyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput">AutoApplyRunTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput">AutoDestroyActivityDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput">AutoDestroyAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput">ExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput">FileTriggersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput">GlobalRemoteStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput">IgnoreAdditionalTagNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput">IgnoreAdditionalTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput">QueueAllRunsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput">RemoteStateConsumerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput">SpeculativeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput">SshKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput">StructuredRunOutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput">TagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput">TerraformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput">TriggerPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput">TriggerPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput">VcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan">AllowDestroyPlan</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApply">AutoApply</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger">AutoApplyRunTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration">AutoDestroyActivityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt">AutoDestroyAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionMode">ExecutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled">FileTriggersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState">GlobalRemoteState</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames">IgnoreAdditionalTagNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags">IgnoreAdditionalTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operations">Operations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns">QueueAllRuns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled">SpeculativeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId">SshKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled">StructuredRunOutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNames">TagNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion">TerraformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns">TriggerPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes">TriggerPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspace.Workspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspace.Workspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspace.Workspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspace.Workspace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspace.Workspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspace.Workspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspace.Workspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.Workspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspace.Workspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveTags`<sup>Required</sup> <a name="EffectiveTags" id="@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags"></a>

```csharp
public StringMap EffectiveTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `InheritsProjectAutoDestroy`<sup>Required</sup> <a name="InheritsProjectAutoDestroy" id="@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy"></a>

```csharp
public IResolvable InheritsProjectAutoDestroy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-tfe.workspace.Workspace.property.resourceCount"></a>

```csharp
public double ResourceCount { get; }
```

- *Type:* double

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo"></a>

```csharp
public WorkspaceVcsRepoOutputReference VcsRepo { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a>

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput"></a>

```csharp
public string AgentPoolIdInput { get; }
```

- *Type:* string

---

##### `AllowDestroyPlanInput`<sup>Optional</sup> <a name="AllowDestroyPlanInput" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput"></a>

```csharp
public object AllowDestroyPlanInput { get; }
```

- *Type:* object

---

##### `AssessmentsEnabledInput`<sup>Optional</sup> <a name="AssessmentsEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput"></a>

```csharp
public object AssessmentsEnabledInput { get; }
```

- *Type:* object

---

##### `AutoApplyInput`<sup>Optional</sup> <a name="AutoApplyInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput"></a>

```csharp
public object AutoApplyInput { get; }
```

- *Type:* object

---

##### `AutoApplyRunTriggerInput`<sup>Optional</sup> <a name="AutoApplyRunTriggerInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput"></a>

```csharp
public object AutoApplyRunTriggerInput { get; }
```

- *Type:* object

---

##### `AutoDestroyActivityDurationInput`<sup>Optional</sup> <a name="AutoDestroyActivityDurationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput"></a>

```csharp
public string AutoDestroyActivityDurationInput { get; }
```

- *Type:* string

---

##### `AutoDestroyAtInput`<sup>Optional</sup> <a name="AutoDestroyAtInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput"></a>

```csharp
public string AutoDestroyAtInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionModeInput`<sup>Optional</sup> <a name="ExecutionModeInput" id="@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput"></a>

```csharp
public string ExecutionModeInput { get; }
```

- *Type:* string

---

##### `FileTriggersEnabledInput`<sup>Optional</sup> <a name="FileTriggersEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput"></a>

```csharp
public object FileTriggersEnabledInput { get; }
```

- *Type:* object

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `GlobalRemoteStateInput`<sup>Optional</sup> <a name="GlobalRemoteStateInput" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput"></a>

```csharp
public object GlobalRemoteStateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreAdditionalTagNamesInput`<sup>Optional</sup> <a name="IgnoreAdditionalTagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput"></a>

```csharp
public object IgnoreAdditionalTagNamesInput { get; }
```

- *Type:* object

---

##### `IgnoreAdditionalTagsInput`<sup>Optional</sup> <a name="IgnoreAdditionalTagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput"></a>

```csharp
public object IgnoreAdditionalTagsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `QueueAllRunsInput`<sup>Optional</sup> <a name="QueueAllRunsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput"></a>

```csharp
public object QueueAllRunsInput { get; }
```

- *Type:* object

---

##### `RemoteStateConsumerIdsInput`<sup>Optional</sup> <a name="RemoteStateConsumerIdsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput"></a>

```csharp
public string[] RemoteStateConsumerIdsInput { get; }
```

- *Type:* string[]

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `SpeculativeEnabledInput`<sup>Optional</sup> <a name="SpeculativeEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput"></a>

```csharp
public object SpeculativeEnabledInput { get; }
```

- *Type:* object

---

##### `SshKeyIdInput`<sup>Optional</sup> <a name="SshKeyIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput"></a>

```csharp
public string SshKeyIdInput { get; }
```

- *Type:* string

---

##### `StructuredRunOutputEnabledInput`<sup>Optional</sup> <a name="StructuredRunOutputEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput"></a>

```csharp
public object StructuredRunOutputEnabledInput { get; }
```

- *Type:* object

---

##### `TagNamesInput`<sup>Optional</sup> <a name="TagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput"></a>

```csharp
public string[] TagNamesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerraformVersionInput`<sup>Optional</sup> <a name="TerraformVersionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput"></a>

```csharp
public string TerraformVersionInput { get; }
```

- *Type:* string

---

##### `TriggerPatternsInput`<sup>Optional</sup> <a name="TriggerPatternsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput"></a>

```csharp
public string[] TriggerPatternsInput { get; }
```

- *Type:* string[]

---

##### `TriggerPrefixesInput`<sup>Optional</sup> <a name="TriggerPrefixesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput"></a>

```csharp
public string[] TriggerPrefixesInput { get; }
```

- *Type:* string[]

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput"></a>

```csharp
public WorkspaceVcsRepo VcsRepoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; }
```

- *Type:* string

---

##### `AllowDestroyPlan`<sup>Required</sup> <a name="AllowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan"></a>

```csharp
public object AllowDestroyPlan { get; }
```

- *Type:* object

---

##### `AssessmentsEnabled`<sup>Required</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled"></a>

```csharp
public object AssessmentsEnabled { get; }
```

- *Type:* object

---

##### `AutoApply`<sup>Required</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApply"></a>

```csharp
public object AutoApply { get; }
```

- *Type:* object

---

##### `AutoApplyRunTrigger`<sup>Required</sup> <a name="AutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger"></a>

```csharp
public object AutoApplyRunTrigger { get; }
```

- *Type:* object

---

##### `AutoDestroyActivityDuration`<sup>Required</sup> <a name="AutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration"></a>

```csharp
public string AutoDestroyActivityDuration { get; }
```

- *Type:* string

---

##### `AutoDestroyAt`<sup>Required</sup> <a name="AutoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt"></a>

```csharp
public string AutoDestroyAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.workspace.Workspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionMode`<sup>Required</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspace.Workspace.property.executionMode"></a>

```csharp
public string ExecutionMode { get; }
```

- *Type:* string

---

##### `FileTriggersEnabled`<sup>Required</sup> <a name="FileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled"></a>

```csharp
public object FileTriggersEnabled { get; }
```

- *Type:* object

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `GlobalRemoteState`<sup>Required</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState"></a>

```csharp
public object GlobalRemoteState { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreAdditionalTagNames`<sup>Required</sup> <a name="IgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames"></a>

```csharp
public object IgnoreAdditionalTagNames { get; }
```

- *Type:* object

---

##### `IgnoreAdditionalTags`<sup>Required</sup> <a name="IgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags"></a>

```csharp
public object IgnoreAdditionalTags { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.workspace.Workspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-tfe.workspace.Workspace.property.operations"></a>

```csharp
public object Operations { get; }
```

- *Type:* object

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.workspace.Workspace.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.workspace.Workspace.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `QueueAllRuns`<sup>Required</sup> <a name="QueueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns"></a>

```csharp
public object QueueAllRuns { get; }
```

- *Type:* object

---

##### `RemoteStateConsumerIds`<sup>Required</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds"></a>

```csharp
public string[] RemoteStateConsumerIds { get; }
```

- *Type:* string[]

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `SpeculativeEnabled`<sup>Required</sup> <a name="SpeculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled"></a>

```csharp
public object SpeculativeEnabled { get; }
```

- *Type:* object

---

##### `SshKeyId`<sup>Required</sup> <a name="SshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId"></a>

```csharp
public string SshKeyId { get; }
```

- *Type:* string

---

##### `StructuredRunOutputEnabled`<sup>Required</sup> <a name="StructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled"></a>

```csharp
public object StructuredRunOutputEnabled { get; }
```

- *Type:* object

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNames"></a>

```csharp
public string[] TagNames { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-tfe.workspace.Workspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerraformVersion`<sup>Required</sup> <a name="TerraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion"></a>

```csharp
public string TerraformVersion { get; }
```

- *Type:* string

---

##### `TriggerPatterns`<sup>Required</sup> <a name="TriggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns"></a>

```csharp
public string[] TriggerPatterns { get; }
```

- *Type:* string[]

---

##### `TriggerPrefixes`<sup>Required</sup> <a name="TriggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes"></a>

```csharp
public string[] TriggerPrefixes { get; }
```

- *Type:* string[]

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceConfig <a name="WorkspaceConfig" id="@cdktf/provider-tfe.workspace.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AgentPoolId = null,
    object AllowDestroyPlan = null,
    object AssessmentsEnabled = null,
    object AutoApply = null,
    object AutoApplyRunTrigger = null,
    string AutoDestroyActivityDuration = null,
    string AutoDestroyAt = null,
    string Description = null,
    string ExecutionMode = null,
    object FileTriggersEnabled = null,
    object ForceDelete = null,
    object GlobalRemoteState = null,
    string Id = null,
    object IgnoreAdditionalTagNames = null,
    object IgnoreAdditionalTags = null,
    object Operations = null,
    string Organization = null,
    string ProjectId = null,
    object QueueAllRuns = null,
    string[] RemoteStateConsumerIds = null,
    string SourceName = null,
    string SourceUrl = null,
    object SpeculativeEnabled = null,
    string SshKeyId = null,
    object StructuredRunOutputEnabled = null,
    string[] TagNames = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TerraformVersion = null,
    string[] TriggerPatterns = null,
    string[] TriggerPrefixes = null,
    WorkspaceVcsRepo VcsRepo = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#name Workspace#name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId">AgentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan">AllowDestroyPlan</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply">AutoApply</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger">AutoApplyRunTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration">AutoDestroyActivityDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt">AutoDestroyAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#description Workspace#description}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode">ExecutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled">FileTriggersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#force_delete Workspace#force_delete}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState">GlobalRemoteState</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#id Workspace#id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames">IgnoreAdditionalTagNames</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags">IgnoreAdditionalTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations">Operations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#operations Workspace#operations}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#organization Workspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#project_id Workspace#project_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns">QueueAllRuns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_name Workspace#source_name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_url Workspace#source_url}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled">SpeculativeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId">SshKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled">StructuredRunOutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames">TagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags Workspace#tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion">TerraformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns">TriggerPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes">TriggerPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#working_directory Workspace#working_directory}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#name Workspace#name}.

---

##### `AgentPoolId`<sup>Optional</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId"></a>

```csharp
public string AgentPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `AllowDestroyPlan`<sup>Optional</sup> <a name="AllowDestroyPlan" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan"></a>

```csharp
public object AllowDestroyPlan { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `AssessmentsEnabled`<sup>Optional</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled"></a>

```csharp
public object AssessmentsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}.

---

##### `AutoApply`<sup>Optional</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply"></a>

```csharp
public object AutoApply { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply Workspace#auto_apply}.

---

##### `AutoApplyRunTrigger`<sup>Optional</sup> <a name="AutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger"></a>

```csharp
public object AutoApplyRunTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}.

---

##### `AutoDestroyActivityDuration`<sup>Optional</sup> <a name="AutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration"></a>

```csharp
public string AutoDestroyActivityDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}.

---

##### `AutoDestroyAt`<sup>Optional</sup> <a name="AutoDestroyAt" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt"></a>

```csharp
public string AutoDestroyAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#description Workspace#description}.

---

##### `ExecutionMode`<sup>Optional</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode"></a>

```csharp
public string ExecutionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#execution_mode Workspace#execution_mode}.

---

##### `FileTriggersEnabled`<sup>Optional</sup> <a name="FileTriggersEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled"></a>

```csharp
public object FileTriggersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#force_delete Workspace#force_delete}.

---

##### `GlobalRemoteState`<sup>Optional</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState"></a>

```csharp
public object GlobalRemoteState { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAdditionalTagNames`<sup>Optional</sup> <a name="IgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames"></a>

```csharp
public object IgnoreAdditionalTagNames { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}.

---

##### `IgnoreAdditionalTags`<sup>Optional</sup> <a name="IgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags"></a>

```csharp
public object IgnoreAdditionalTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}.

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#operations Workspace#operations}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#organization Workspace#organization}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#project_id Workspace#project_id}.

---

##### `QueueAllRuns`<sup>Optional</sup> <a name="QueueAllRuns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns"></a>

```csharp
public object QueueAllRuns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `RemoteStateConsumerIds`<sup>Optional</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds"></a>

```csharp
public string[] RemoteStateConsumerIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_name Workspace#source_name}.

---

##### `SourceUrl`<sup>Optional</sup> <a name="SourceUrl" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_url Workspace#source_url}.

---

##### `SpeculativeEnabled`<sup>Optional</sup> <a name="SpeculativeEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled"></a>

```csharp
public object SpeculativeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `SshKeyId`<sup>Optional</sup> <a name="SshKeyId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId"></a>

```csharp
public string SshKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `StructuredRunOutputEnabled`<sup>Optional</sup> <a name="StructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled"></a>

```csharp
public object StructuredRunOutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `TagNames`<sup>Optional</sup> <a name="TagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames"></a>

```csharp
public string[] TagNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tag_names Workspace#tag_names}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags Workspace#tags}.

---

##### `TerraformVersion`<sup>Optional</sup> <a name="TerraformVersion" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion"></a>

```csharp
public string TerraformVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#terraform_version Workspace#terraform_version}.

---

##### `TriggerPatterns`<sup>Optional</sup> <a name="TriggerPatterns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns"></a>

```csharp
public string[] TriggerPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `TriggerPrefixes`<sup>Optional</sup> <a name="TriggerPrefixes" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes"></a>

```csharp
public string[] TriggerPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo"></a>

```csharp
public WorkspaceVcsRepo VcsRepo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#vcs_repo Workspace#vcs_repo}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#working_directory Workspace#working_directory}.

---

### WorkspaceVcsRepo <a name="WorkspaceVcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceVcsRepo {
    string Identifier,
    string Branch = null,
    string GithubAppInstallationId = null,
    object IngressSubmodules = null,
    string OauthTokenId = null,
    string TagsRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#identifier Workspace#identifier}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#branch Workspace#branch}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules">IngressSubmodules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex">TagsRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags_regex Workspace#tags_regex}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#identifier Workspace#identifier}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#branch Workspace#branch}.

---

##### `GithubAppInstallationId`<sup>Optional</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId"></a>

```csharp
public string GithubAppInstallationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}.

---

##### `IngressSubmodules`<sup>Optional</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules"></a>

```csharp
public object IngressSubmodules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}.

---

##### `OauthTokenId`<sup>Optional</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}.

---

##### `TagsRegex`<sup>Optional</sup> <a name="TagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex"></a>

```csharp
public string TagsRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags_regex Workspace#tags_regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceVcsRepoOutputReference <a name="WorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new WorkspaceVcsRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId">ResetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules">ResetIngressSubmodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId">ResetOauthTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex">ResetTagsRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetGithubAppInstallationId` <a name="ResetGithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```csharp
private void ResetGithubAppInstallationId()
```

##### `ResetIngressSubmodules` <a name="ResetIngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules"></a>

```csharp
private void ResetIngressSubmodules()
```

##### `ResetOauthTokenId` <a name="ResetOauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId"></a>

```csharp
private void ResetOauthTokenId()
```

##### `ResetTagsRegex` <a name="ResetTagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex"></a>

```csharp
private void ResetTagsRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput">GithubAppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput">IngressSubmodulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput">OauthTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput">TagsRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules">IngressSubmodules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex">TagsRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `GithubAppInstallationIdInput`<sup>Optional</sup> <a name="GithubAppInstallationIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```csharp
public string GithubAppInstallationIdInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IngressSubmodulesInput`<sup>Optional</sup> <a name="IngressSubmodulesInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```csharp
public object IngressSubmodulesInput { get; }
```

- *Type:* object

---

##### `OauthTokenIdInput`<sup>Optional</sup> <a name="OauthTokenIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```csharp
public string OauthTokenIdInput { get; }
```

- *Type:* string

---

##### `TagsRegexInput`<sup>Optional</sup> <a name="TagsRegexInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput"></a>

```csharp
public string TagsRegexInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```csharp
public string GithubAppInstallationId { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IngressSubmodules`<sup>Required</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```csharp
public object IngressSubmodules { get; }
```

- *Type:* object

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; }
```

- *Type:* string

---

##### `TagsRegex`<sup>Required</sup> <a name="TagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```csharp
public string TagsRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue"></a>

```csharp
public WorkspaceVcsRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---



