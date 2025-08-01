# `workspace` Submodule <a name="`workspace` Submodule" id="@cdktf/provider-tfe.workspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workspace <a name="Workspace" id="@cdktf/provider-tfe.workspace.Workspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.Workspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.NewWorkspace(scope Construct, id *string, config WorkspaceConfig) Workspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspace.Workspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspace.Workspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.workspace.Workspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.workspace.Workspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.workspace.Workspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.workspace.Workspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo"></a>

```go
func PutVcsRepo(value WorkspaceVcsRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `ResetAgentPoolId` <a name="ResetAgentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId"></a>

```go
func ResetAgentPoolId()
```

##### `ResetAllowDestroyPlan` <a name="ResetAllowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan"></a>

```go
func ResetAllowDestroyPlan()
```

##### `ResetAssessmentsEnabled` <a name="ResetAssessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled"></a>

```go
func ResetAssessmentsEnabled()
```

##### `ResetAutoApply` <a name="ResetAutoApply" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApply"></a>

```go
func ResetAutoApply()
```

##### `ResetAutoApplyRunTrigger` <a name="ResetAutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger"></a>

```go
func ResetAutoApplyRunTrigger()
```

##### `ResetAutoDestroyActivityDuration` <a name="ResetAutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration"></a>

```go
func ResetAutoDestroyActivityDuration()
```

##### `ResetAutoDestroyAt` <a name="ResetAutoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt"></a>

```go
func ResetAutoDestroyAt()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.workspace.Workspace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionMode` <a name="ResetExecutionMode" id="@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode"></a>

```go
func ResetExecutionMode()
```

##### `ResetFileTriggersEnabled` <a name="ResetFileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled"></a>

```go
func ResetFileTriggersEnabled()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-tfe.workspace.Workspace.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetGlobalRemoteState` <a name="ResetGlobalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState"></a>

```go
func ResetGlobalRemoteState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspace.Workspace.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreAdditionalTagNames` <a name="ResetIgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames"></a>

```go
func ResetIgnoreAdditionalTagNames()
```

##### `ResetIgnoreAdditionalTags` <a name="ResetIgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTags"></a>

```go
func ResetIgnoreAdditionalTags()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-tfe.workspace.Workspace.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.workspace.Workspace.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-tfe.workspace.Workspace.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetQueueAllRuns` <a name="ResetQueueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns"></a>

```go
func ResetQueueAllRuns()
```

##### `ResetRemoteStateConsumerIds` <a name="ResetRemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds"></a>

```go
func ResetRemoteStateConsumerIds()
```

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceName"></a>

```go
func ResetSourceName()
```

##### `ResetSourceUrl` <a name="ResetSourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl"></a>

```go
func ResetSourceUrl()
```

##### `ResetSpeculativeEnabled` <a name="ResetSpeculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled"></a>

```go
func ResetSpeculativeEnabled()
```

##### `ResetSshKeyId` <a name="ResetSshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId"></a>

```go
func ResetSshKeyId()
```

##### `ResetStructuredRunOutputEnabled` <a name="ResetStructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled"></a>

```go
func ResetStructuredRunOutputEnabled()
```

##### `ResetTagNames` <a name="ResetTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetTagNames"></a>

```go
func ResetTagNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-tfe.workspace.Workspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerraformVersion` <a name="ResetTerraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion"></a>

```go
func ResetTerraformVersion()
```

##### `ResetTriggerPatterns` <a name="ResetTriggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns"></a>

```go
func ResetTriggerPatterns()
```

##### `ResetTriggerPrefixes` <a name="ResetTriggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes"></a>

```go
func ResetTriggerPrefixes()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo"></a>

```go
func ResetVcsRepo()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
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

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.Workspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.Workspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.Workspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.Workspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Workspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Workspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Workspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags">EffectiveTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy">InheritsProjectAutoDestroy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.resourceCount">ResourceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput">AllowDestroyPlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput">AssessmentsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput">AutoApplyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput">AutoApplyRunTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput">AutoDestroyActivityDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput">AutoDestroyAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput">ExecutionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput">FileTriggersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput">GlobalRemoteStateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput">IgnoreAdditionalTagNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput">IgnoreAdditionalTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput">QueueAllRunsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput">RemoteStateConsumerIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput">SpeculativeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput">SshKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput">StructuredRunOutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput">TagNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput">TerraformVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput">TriggerPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput">TriggerPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput">VcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan">AllowDestroyPlan</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApply">AutoApply</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger">AutoApplyRunTrigger</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration">AutoDestroyActivityDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt">AutoDestroyAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionMode">ExecutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled">FileTriggersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState">GlobalRemoteState</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames">IgnoreAdditionalTagNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags">IgnoreAdditionalTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operations">Operations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns">QueueAllRuns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled">SpeculativeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId">SshKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled">StructuredRunOutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNames">TagNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion">TerraformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns">TriggerPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes">TriggerPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspace.Workspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspace.Workspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspace.Workspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspace.Workspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspace.Workspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspace.Workspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspace.Workspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.Workspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspace.Workspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveTags`<sup>Required</sup> <a name="EffectiveTags" id="@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags"></a>

```go
func EffectiveTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `InheritsProjectAutoDestroy`<sup>Required</sup> <a name="InheritsProjectAutoDestroy" id="@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy"></a>

```go
func InheritsProjectAutoDestroy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-tfe.workspace.Workspace.property.resourceCount"></a>

```go
func ResourceCount() *f64
```

- *Type:* *f64

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo"></a>

```go
func VcsRepo() WorkspaceVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a>

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput"></a>

```go
func AgentPoolIdInput() *string
```

- *Type:* *string

---

##### `AllowDestroyPlanInput`<sup>Optional</sup> <a name="AllowDestroyPlanInput" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput"></a>

```go
func AllowDestroyPlanInput() interface{}
```

- *Type:* interface{}

---

##### `AssessmentsEnabledInput`<sup>Optional</sup> <a name="AssessmentsEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput"></a>

```go
func AssessmentsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoApplyInput`<sup>Optional</sup> <a name="AutoApplyInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput"></a>

```go
func AutoApplyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoApplyRunTriggerInput`<sup>Optional</sup> <a name="AutoApplyRunTriggerInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput"></a>

```go
func AutoApplyRunTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDestroyActivityDurationInput`<sup>Optional</sup> <a name="AutoDestroyActivityDurationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput"></a>

```go
func AutoDestroyActivityDurationInput() *string
```

- *Type:* *string

---

##### `AutoDestroyAtInput`<sup>Optional</sup> <a name="AutoDestroyAtInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput"></a>

```go
func AutoDestroyAtInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionModeInput`<sup>Optional</sup> <a name="ExecutionModeInput" id="@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput"></a>

```go
func ExecutionModeInput() *string
```

- *Type:* *string

---

##### `FileTriggersEnabledInput`<sup>Optional</sup> <a name="FileTriggersEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput"></a>

```go
func FileTriggersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalRemoteStateInput`<sup>Optional</sup> <a name="GlobalRemoteStateInput" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput"></a>

```go
func GlobalRemoteStateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreAdditionalTagNamesInput`<sup>Optional</sup> <a name="IgnoreAdditionalTagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput"></a>

```go
func IgnoreAdditionalTagNamesInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreAdditionalTagsInput`<sup>Optional</sup> <a name="IgnoreAdditionalTagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput"></a>

```go
func IgnoreAdditionalTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `QueueAllRunsInput`<sup>Optional</sup> <a name="QueueAllRunsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput"></a>

```go
func QueueAllRunsInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteStateConsumerIdsInput`<sup>Optional</sup> <a name="RemoteStateConsumerIdsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput"></a>

```go
func RemoteStateConsumerIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `SpeculativeEnabledInput`<sup>Optional</sup> <a name="SpeculativeEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput"></a>

```go
func SpeculativeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SshKeyIdInput`<sup>Optional</sup> <a name="SshKeyIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput"></a>

```go
func SshKeyIdInput() *string
```

- *Type:* *string

---

##### `StructuredRunOutputEnabledInput`<sup>Optional</sup> <a name="StructuredRunOutputEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput"></a>

```go
func StructuredRunOutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagNamesInput`<sup>Optional</sup> <a name="TagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput"></a>

```go
func TagNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerraformVersionInput`<sup>Optional</sup> <a name="TerraformVersionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput"></a>

```go
func TerraformVersionInput() *string
```

- *Type:* *string

---

##### `TriggerPatternsInput`<sup>Optional</sup> <a name="TriggerPatternsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput"></a>

```go
func TriggerPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerPrefixesInput`<sup>Optional</sup> <a name="TriggerPrefixesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput"></a>

```go
func TriggerPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput"></a>

```go
func VcsRepoInput() WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId"></a>

```go
func AgentPoolId() *string
```

- *Type:* *string

---

##### `AllowDestroyPlan`<sup>Required</sup> <a name="AllowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan"></a>

```go
func AllowDestroyPlan() interface{}
```

- *Type:* interface{}

---

##### `AssessmentsEnabled`<sup>Required</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled"></a>

```go
func AssessmentsEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoApply`<sup>Required</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApply"></a>

```go
func AutoApply() interface{}
```

- *Type:* interface{}

---

##### `AutoApplyRunTrigger`<sup>Required</sup> <a name="AutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger"></a>

```go
func AutoApplyRunTrigger() interface{}
```

- *Type:* interface{}

---

##### `AutoDestroyActivityDuration`<sup>Required</sup> <a name="AutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration"></a>

```go
func AutoDestroyActivityDuration() *string
```

- *Type:* *string

---

##### `AutoDestroyAt`<sup>Required</sup> <a name="AutoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt"></a>

```go
func AutoDestroyAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.workspace.Workspace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionMode`<sup>Required</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspace.Workspace.property.executionMode"></a>

```go
func ExecutionMode() *string
```

- *Type:* *string

---

##### `FileTriggersEnabled`<sup>Required</sup> <a name="FileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled"></a>

```go
func FileTriggersEnabled() interface{}
```

- *Type:* interface{}

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `GlobalRemoteState`<sup>Required</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState"></a>

```go
func GlobalRemoteState() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.Workspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreAdditionalTagNames`<sup>Required</sup> <a name="IgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames"></a>

```go
func IgnoreAdditionalTagNames() interface{}
```

- *Type:* interface{}

---

##### `IgnoreAdditionalTags`<sup>Required</sup> <a name="IgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags"></a>

```go
func IgnoreAdditionalTags() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.workspace.Workspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-tfe.workspace.Workspace.property.operations"></a>

```go
func Operations() interface{}
```

- *Type:* interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.workspace.Workspace.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.workspace.Workspace.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `QueueAllRuns`<sup>Required</sup> <a name="QueueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns"></a>

```go
func QueueAllRuns() interface{}
```

- *Type:* interface{}

---

##### `RemoteStateConsumerIds`<sup>Required</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds"></a>

```go
func RemoteStateConsumerIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `SpeculativeEnabled`<sup>Required</sup> <a name="SpeculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled"></a>

```go
func SpeculativeEnabled() interface{}
```

- *Type:* interface{}

---

##### `SshKeyId`<sup>Required</sup> <a name="SshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId"></a>

```go
func SshKeyId() *string
```

- *Type:* *string

---

##### `StructuredRunOutputEnabled`<sup>Required</sup> <a name="StructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled"></a>

```go
func StructuredRunOutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNames"></a>

```go
func TagNames() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-tfe.workspace.Workspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerraformVersion`<sup>Required</sup> <a name="TerraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion"></a>

```go
func TerraformVersion() *string
```

- *Type:* *string

---

##### `TriggerPatterns`<sup>Required</sup> <a name="TriggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns"></a>

```go
func TriggerPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerPrefixes`<sup>Required</sup> <a name="TriggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes"></a>

```go
func TriggerPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceConfig <a name="WorkspaceConfig" id="@cdktf/provider-tfe.workspace.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

&workspace.WorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AgentPoolId: *string,
	AllowDestroyPlan: interface{},
	AssessmentsEnabled: interface{},
	AutoApply: interface{},
	AutoApplyRunTrigger: interface{},
	AutoDestroyActivityDuration: *string,
	AutoDestroyAt: *string,
	Description: *string,
	ExecutionMode: *string,
	FileTriggersEnabled: interface{},
	ForceDelete: interface{},
	GlobalRemoteState: interface{},
	Id: *string,
	IgnoreAdditionalTagNames: interface{},
	IgnoreAdditionalTags: interface{},
	Operations: interface{},
	Organization: *string,
	ProjectId: *string,
	QueueAllRuns: interface{},
	RemoteStateConsumerIds: *[]*string,
	SourceName: *string,
	SourceUrl: *string,
	SpeculativeEnabled: interface{},
	SshKeyId: *string,
	StructuredRunOutputEnabled: interface{},
	TagNames: *[]*string,
	Tags: *map[string]*string,
	TerraformVersion: *string,
	TriggerPatterns: *[]*string,
	TriggerPrefixes: *[]*string,
	VcsRepo: github.com/cdktf/cdktf-provider-tfe-go/tfe/v12.workspace.WorkspaceVcsRepo,
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#name Workspace#name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan">AllowDestroyPlan</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled">AssessmentsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply">AutoApply</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger">AutoApplyRunTrigger</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration">AutoDestroyActivityDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt">AutoDestroyAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#description Workspace#description}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode">ExecutionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled">FileTriggersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#force_delete Workspace#force_delete}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState">GlobalRemoteState</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#id Workspace#id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames">IgnoreAdditionalTagNames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags">IgnoreAdditionalTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations">Operations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#operations Workspace#operations}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#organization Workspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#project_id Workspace#project_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns">QueueAllRuns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds">RemoteStateConsumerIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#source_name Workspace#source_name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#source_url Workspace#source_url}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled">SpeculativeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId">SshKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled">StructuredRunOutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames">TagNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tags Workspace#tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion">TerraformVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns">TriggerPatterns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes">TriggerPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#working_directory Workspace#working_directory}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#name Workspace#name}.

---

##### `AgentPoolId`<sup>Optional</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId"></a>

```go
AgentPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `AllowDestroyPlan`<sup>Optional</sup> <a name="AllowDestroyPlan" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan"></a>

```go
AllowDestroyPlan interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `AssessmentsEnabled`<sup>Optional</sup> <a name="AssessmentsEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled"></a>

```go
AssessmentsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}.

---

##### `AutoApply`<sup>Optional</sup> <a name="AutoApply" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply"></a>

```go
AutoApply interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_apply Workspace#auto_apply}.

---

##### `AutoApplyRunTrigger`<sup>Optional</sup> <a name="AutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger"></a>

```go
AutoApplyRunTrigger interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}.

---

##### `AutoDestroyActivityDuration`<sup>Optional</sup> <a name="AutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration"></a>

```go
AutoDestroyActivityDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}.

---

##### `AutoDestroyAt`<sup>Optional</sup> <a name="AutoDestroyAt" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt"></a>

```go
AutoDestroyAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#description Workspace#description}.

---

##### `ExecutionMode`<sup>Optional</sup> <a name="ExecutionMode" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode"></a>

```go
ExecutionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#execution_mode Workspace#execution_mode}.

---

##### `FileTriggersEnabled`<sup>Optional</sup> <a name="FileTriggersEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled"></a>

```go
FileTriggersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#force_delete Workspace#force_delete}.

---

##### `GlobalRemoteState`<sup>Optional</sup> <a name="GlobalRemoteState" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState"></a>

```go
GlobalRemoteState interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAdditionalTagNames`<sup>Optional</sup> <a name="IgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames"></a>

```go
IgnoreAdditionalTagNames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}.

---

##### `IgnoreAdditionalTags`<sup>Optional</sup> <a name="IgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags"></a>

```go
IgnoreAdditionalTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}.

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#operations Workspace#operations}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#organization Workspace#organization}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#project_id Workspace#project_id}.

---

##### `QueueAllRuns`<sup>Optional</sup> <a name="QueueAllRuns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns"></a>

```go
QueueAllRuns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `RemoteStateConsumerIds`<sup>Optional</sup> <a name="RemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds"></a>

```go
RemoteStateConsumerIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#source_name Workspace#source_name}.

---

##### `SourceUrl`<sup>Optional</sup> <a name="SourceUrl" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#source_url Workspace#source_url}.

---

##### `SpeculativeEnabled`<sup>Optional</sup> <a name="SpeculativeEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled"></a>

```go
SpeculativeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `SshKeyId`<sup>Optional</sup> <a name="SshKeyId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId"></a>

```go
SshKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `StructuredRunOutputEnabled`<sup>Optional</sup> <a name="StructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled"></a>

```go
StructuredRunOutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `TagNames`<sup>Optional</sup> <a name="TagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames"></a>

```go
TagNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tag_names Workspace#tag_names}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tags Workspace#tags}.

---

##### `TerraformVersion`<sup>Optional</sup> <a name="TerraformVersion" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion"></a>

```go
TerraformVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#terraform_version Workspace#terraform_version}.

---

##### `TriggerPatterns`<sup>Optional</sup> <a name="TriggerPatterns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns"></a>

```go
TriggerPatterns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `TriggerPrefixes`<sup>Optional</sup> <a name="TriggerPrefixes" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes"></a>

```go
TriggerPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo"></a>

```go
VcsRepo WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#vcs_repo Workspace#vcs_repo}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#working_directory Workspace#working_directory}.

---

### WorkspaceVcsRepo <a name="WorkspaceVcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

&workspace.WorkspaceVcsRepo {
	Identifier: *string,
	Branch: *string,
	GithubAppInstallationId: *string,
	IngressSubmodules: interface{},
	OauthTokenId: *string,
	TagsRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#identifier Workspace#identifier}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#branch Workspace#branch}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules">IngressSubmodules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex">TagsRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tags_regex Workspace#tags_regex}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#identifier Workspace#identifier}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#branch Workspace#branch}.

---

##### `GithubAppInstallationId`<sup>Optional</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId"></a>

```go
GithubAppInstallationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}.

---

##### `IngressSubmodules`<sup>Optional</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules"></a>

```go
IngressSubmodules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}.

---

##### `OauthTokenId`<sup>Optional</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId"></a>

```go
OauthTokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}.

---

##### `TagsRegex`<sup>Optional</sup> <a name="TagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex"></a>

```go
TagsRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/workspace#tags_regex Workspace#tags_regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceVcsRepoOutputReference <a name="WorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/workspace"

workspace.NewWorkspaceVcsRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceVcsRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetGithubAppInstallationId` <a name="ResetGithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```go
func ResetGithubAppInstallationId()
```

##### `ResetIngressSubmodules` <a name="ResetIngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules"></a>

```go
func ResetIngressSubmodules()
```

##### `ResetOauthTokenId` <a name="ResetOauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId"></a>

```go
func ResetOauthTokenId()
```

##### `ResetTagsRegex` <a name="ResetTagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex"></a>

```go
func ResetTagsRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput">GithubAppInstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput">IngressSubmodulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput">OauthTokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput">TagsRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules">IngressSubmodules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex">TagsRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `GithubAppInstallationIdInput`<sup>Optional</sup> <a name="GithubAppInstallationIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```go
func GithubAppInstallationIdInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IngressSubmodulesInput`<sup>Optional</sup> <a name="IngressSubmodulesInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```go
func IngressSubmodulesInput() interface{}
```

- *Type:* interface{}

---

##### `OauthTokenIdInput`<sup>Optional</sup> <a name="OauthTokenIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```go
func OauthTokenIdInput() *string
```

- *Type:* *string

---

##### `TagsRegexInput`<sup>Optional</sup> <a name="TagsRegexInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput"></a>

```go
func TagsRegexInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```go
func GithubAppInstallationId() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IngressSubmodules`<sup>Required</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```go
func IngressSubmodules() interface{}
```

- *Type:* interface{}

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```go
func OauthTokenId() *string
```

- *Type:* *string

---

##### `TagsRegex`<sup>Required</sup> <a name="TagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```go
func TagsRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---



