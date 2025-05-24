# `workspace` Submodule <a name="`workspace` Submodule" id="@cdktf/provider-tfe.workspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workspace <a name="Workspace" id="@cdktf/provider-tfe.workspace.Workspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.Workspace.Initializer"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

new workspace.Workspace(scope: Construct, id: string, config: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId">resetAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan">resetAllowDestroyPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled">resetAssessmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApply">resetAutoApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger">resetAutoApplyRunTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration">resetAutoDestroyActivityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt">resetAutoDestroyAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode">resetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled">resetFileTriggersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState">resetGlobalRemoteState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames">resetIgnoreAdditionalTagNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTags">resetIgnoreAdditionalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns">resetQueueAllRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds">resetRemoteStateConsumerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceName">resetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl">resetSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled">resetSpeculativeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId">resetSshKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled">resetStructuredRunOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTagNames">resetTagNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion">resetTerraformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns">resetTriggerPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes">resetTriggerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspace.Workspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspace.Workspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspace.Workspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspace.Workspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.workspace.Workspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.workspace.Workspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.workspace.Workspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.workspace.Workspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo"></a>

```typescript
public putVcsRepo(value: WorkspaceVcsRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `resetAgentPoolId` <a name="resetAgentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId"></a>

```typescript
public resetAgentPoolId(): void
```

##### `resetAllowDestroyPlan` <a name="resetAllowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan"></a>

```typescript
public resetAllowDestroyPlan(): void
```

##### `resetAssessmentsEnabled` <a name="resetAssessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled"></a>

```typescript
public resetAssessmentsEnabled(): void
```

##### `resetAutoApply` <a name="resetAutoApply" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApply"></a>

```typescript
public resetAutoApply(): void
```

##### `resetAutoApplyRunTrigger` <a name="resetAutoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger"></a>

```typescript
public resetAutoApplyRunTrigger(): void
```

##### `resetAutoDestroyActivityDuration` <a name="resetAutoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration"></a>

```typescript
public resetAutoDestroyActivityDuration(): void
```

##### `resetAutoDestroyAt` <a name="resetAutoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt"></a>

```typescript
public resetAutoDestroyAt(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-tfe.workspace.Workspace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionMode` <a name="resetExecutionMode" id="@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode"></a>

```typescript
public resetExecutionMode(): void
```

##### `resetFileTriggersEnabled` <a name="resetFileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled"></a>

```typescript
public resetFileTriggersEnabled(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-tfe.workspace.Workspace.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetGlobalRemoteState` <a name="resetGlobalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState"></a>

```typescript
public resetGlobalRemoteState(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.workspace.Workspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreAdditionalTagNames` <a name="resetIgnoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames"></a>

```typescript
public resetIgnoreAdditionalTagNames(): void
```

##### `resetIgnoreAdditionalTags` <a name="resetIgnoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTags"></a>

```typescript
public resetIgnoreAdditionalTags(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-tfe.workspace.Workspace.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.workspace.Workspace.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-tfe.workspace.Workspace.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetQueueAllRuns` <a name="resetQueueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns"></a>

```typescript
public resetQueueAllRuns(): void
```

##### `resetRemoteStateConsumerIds` <a name="resetRemoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds"></a>

```typescript
public resetRemoteStateConsumerIds(): void
```

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceName"></a>

```typescript
public resetSourceName(): void
```

##### `resetSourceUrl` <a name="resetSourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl"></a>

```typescript
public resetSourceUrl(): void
```

##### `resetSpeculativeEnabled` <a name="resetSpeculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled"></a>

```typescript
public resetSpeculativeEnabled(): void
```

##### `resetSshKeyId` <a name="resetSshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId"></a>

```typescript
public resetSshKeyId(): void
```

##### `resetStructuredRunOutputEnabled` <a name="resetStructuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled"></a>

```typescript
public resetStructuredRunOutputEnabled(): void
```

##### `resetTagNames` <a name="resetTagNames" id="@cdktf/provider-tfe.workspace.Workspace.resetTagNames"></a>

```typescript
public resetTagNames(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-tfe.workspace.Workspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerraformVersion` <a name="resetTerraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion"></a>

```typescript
public resetTerraformVersion(): void
```

##### `resetTriggerPatterns` <a name="resetTriggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns"></a>

```typescript
public resetTriggerPatterns(): void
```

##### `resetTriggerPrefixes` <a name="resetTriggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes"></a>

```typescript
public resetTriggerPrefixes(): void
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo"></a>

```typescript
public resetVcsRepo(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

workspace.Workspace.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

workspace.Workspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

workspace.Workspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

workspace.Workspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Workspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Workspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Workspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags">effectiveTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy">inheritsProjectAutoDestroy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.resourceCount">resourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput">agentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput">allowDestroyPlanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput">assessmentsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput">autoApplyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput">autoApplyRunTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput">autoDestroyActivityDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput">autoDestroyAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput">executionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput">fileTriggersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput">globalRemoteStateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput">ignoreAdditionalTagNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput">ignoreAdditionalTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operationsInput">operationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput">queueAllRunsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput">remoteStateConsumerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput">speculativeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput">sshKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput">structuredRunOutputEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput">tagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput">terraformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput">triggerPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput">triggerPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput">vcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan">allowDestroyPlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApply">autoApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger">autoApplyRunTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration">autoDestroyActivityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt">autoDestroyAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionMode">executionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled">fileTriggersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState">globalRemoteState</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames">ignoreAdditionalTagNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags">ignoreAdditionalTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operations">operations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns">queueAllRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled">speculativeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId">sshKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled">structuredRunOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNames">tagNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion">terraformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns">triggerPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes">triggerPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspace.Workspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspace.Workspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspace.Workspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspace.Workspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspace.Workspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspace.Workspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspace.Workspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspace.Workspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveTags`<sup>Required</sup> <a name="effectiveTags" id="@cdktf/provider-tfe.workspace.Workspace.property.effectiveTags"></a>

```typescript
public readonly effectiveTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `inheritsProjectAutoDestroy`<sup>Required</sup> <a name="inheritsProjectAutoDestroy" id="@cdktf/provider-tfe.workspace.Workspace.property.inheritsProjectAutoDestroy"></a>

```typescript
public readonly inheritsProjectAutoDestroy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-tfe.workspace.Workspace.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: WorkspaceVcsRepoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a>

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="agentPoolIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput"></a>

```typescript
public readonly agentPoolIdInput: string;
```

- *Type:* string

---

##### `allowDestroyPlanInput`<sup>Optional</sup> <a name="allowDestroyPlanInput" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput"></a>

```typescript
public readonly allowDestroyPlanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assessmentsEnabledInput`<sup>Optional</sup> <a name="assessmentsEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput"></a>

```typescript
public readonly assessmentsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApplyInput`<sup>Optional</sup> <a name="autoApplyInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput"></a>

```typescript
public readonly autoApplyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApplyRunTriggerInput`<sup>Optional</sup> <a name="autoApplyRunTriggerInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput"></a>

```typescript
public readonly autoApplyRunTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDestroyActivityDurationInput`<sup>Optional</sup> <a name="autoDestroyActivityDurationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput"></a>

```typescript
public readonly autoDestroyActivityDurationInput: string;
```

- *Type:* string

---

##### `autoDestroyAtInput`<sup>Optional</sup> <a name="autoDestroyAtInput" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput"></a>

```typescript
public readonly autoDestroyAtInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionModeInput`<sup>Optional</sup> <a name="executionModeInput" id="@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput"></a>

```typescript
public readonly executionModeInput: string;
```

- *Type:* string

---

##### `fileTriggersEnabledInput`<sup>Optional</sup> <a name="fileTriggersEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput"></a>

```typescript
public readonly fileTriggersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `globalRemoteStateInput`<sup>Optional</sup> <a name="globalRemoteStateInput" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput"></a>

```typescript
public readonly globalRemoteStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.workspace.Workspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreAdditionalTagNamesInput`<sup>Optional</sup> <a name="ignoreAdditionalTagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput"></a>

```typescript
public readonly ignoreAdditionalTagNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreAdditionalTagsInput`<sup>Optional</sup> <a name="ignoreAdditionalTagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagsInput"></a>

```typescript
public readonly ignoreAdditionalTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.operationsInput"></a>

```typescript
public readonly operationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.workspace.Workspace.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `queueAllRunsInput`<sup>Optional</sup> <a name="queueAllRunsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput"></a>

```typescript
public readonly queueAllRunsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteStateConsumerIdsInput`<sup>Optional</sup> <a name="remoteStateConsumerIdsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput"></a>

```typescript
public readonly remoteStateConsumerIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `speculativeEnabledInput`<sup>Optional</sup> <a name="speculativeEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput"></a>

```typescript
public readonly speculativeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshKeyIdInput`<sup>Optional</sup> <a name="sshKeyIdInput" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput"></a>

```typescript
public readonly sshKeyIdInput: string;
```

- *Type:* string

---

##### `structuredRunOutputEnabledInput`<sup>Optional</sup> <a name="structuredRunOutputEnabledInput" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput"></a>

```typescript
public readonly structuredRunOutputEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagNamesInput`<sup>Optional</sup> <a name="tagNamesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terraformVersionInput`<sup>Optional</sup> <a name="terraformVersionInput" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput"></a>

```typescript
public readonly terraformVersionInput: string;
```

- *Type:* string

---

##### `triggerPatternsInput`<sup>Optional</sup> <a name="triggerPatternsInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput"></a>

```typescript
public readonly triggerPatternsInput: string[];
```

- *Type:* string[]

---

##### `triggerPrefixesInput`<sup>Optional</sup> <a name="triggerPrefixesInput" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput"></a>

```typescript
public readonly triggerPrefixesInput: string[];
```

- *Type:* string[]

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput"></a>

```typescript
public readonly vcsRepoInput: WorkspaceVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

---

##### `allowDestroyPlan`<sup>Required</sup> <a name="allowDestroyPlan" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan"></a>

```typescript
public readonly allowDestroyPlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assessmentsEnabled`<sup>Required</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled"></a>

```typescript
public readonly assessmentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApply`<sup>Required</sup> <a name="autoApply" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApplyRunTrigger`<sup>Required</sup> <a name="autoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger"></a>

```typescript
public readonly autoApplyRunTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDestroyActivityDuration`<sup>Required</sup> <a name="autoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration"></a>

```typescript
public readonly autoDestroyActivityDuration: string;
```

- *Type:* string

---

##### `autoDestroyAt`<sup>Required</sup> <a name="autoDestroyAt" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt"></a>

```typescript
public readonly autoDestroyAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.workspace.Workspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-tfe.workspace.Workspace.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

---

##### `fileTriggersEnabled`<sup>Required</sup> <a name="fileTriggersEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled"></a>

```typescript
public readonly fileTriggersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `globalRemoteState`<sup>Required</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreAdditionalTagNames`<sup>Required</sup> <a name="ignoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames"></a>

```typescript
public readonly ignoreAdditionalTagNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreAdditionalTags`<sup>Required</sup> <a name="ignoreAdditionalTags" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTags"></a>

```typescript
public readonly ignoreAdditionalTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.workspace.Workspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-tfe.workspace.Workspace.property.operations"></a>

```typescript
public readonly operations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.workspace.Workspace.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.workspace.Workspace.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `queueAllRuns`<sup>Required</sup> <a name="queueAllRuns" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns"></a>

```typescript
public readonly queueAllRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `speculativeEnabled`<sup>Required</sup> <a name="speculativeEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled"></a>

```typescript
public readonly speculativeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshKeyId`<sup>Required</sup> <a name="sshKeyId" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* string

---

##### `structuredRunOutputEnabled`<sup>Required</sup> <a name="structuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled"></a>

```typescript
public readonly structuredRunOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.workspace.Workspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terraformVersion`<sup>Required</sup> <a name="terraformVersion" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* string

---

##### `triggerPatterns`<sup>Required</sup> <a name="triggerPatterns" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* string[]

---

##### `triggerPrefixes`<sup>Required</sup> <a name="triggerPrefixes" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceConfig <a name="WorkspaceConfig" id="@cdktf/provider-tfe.workspace.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.Initializer"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

const workspaceConfig: workspace.WorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#name Workspace#name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan">allowDestroyPlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply">autoApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger">autoApplyRunTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration">autoDestroyActivityDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt">autoDestroyAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#description Workspace#description}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode">executionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled">fileTriggersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#force_delete Workspace#force_delete}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState">globalRemoteState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#id Workspace#id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames">ignoreAdditionalTagNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags">ignoreAdditionalTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations">operations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#operations Workspace#operations}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#organization Workspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#project_id Workspace#project_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns">queueAllRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_name Workspace#source_name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_url Workspace#source_url}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled">speculativeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId">sshKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled">structuredRunOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames">tagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags Workspace#tags}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion">terraformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns">triggerPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes">triggerPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#working_directory Workspace#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#name Workspace#name}.

---

##### `agentPoolId`<sup>Optional</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `allowDestroyPlan`<sup>Optional</sup> <a name="allowDestroyPlan" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan"></a>

```typescript
public readonly allowDestroyPlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `assessmentsEnabled`<sup>Optional</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled"></a>

```typescript
public readonly assessmentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}.

---

##### `autoApply`<sup>Optional</sup> <a name="autoApply" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply Workspace#auto_apply}.

---

##### `autoApplyRunTrigger`<sup>Optional</sup> <a name="autoApplyRunTrigger" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger"></a>

```typescript
public readonly autoApplyRunTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}.

---

##### `autoDestroyActivityDuration`<sup>Optional</sup> <a name="autoDestroyActivityDuration" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration"></a>

```typescript
public readonly autoDestroyActivityDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}.

---

##### `autoDestroyAt`<sup>Optional</sup> <a name="autoDestroyAt" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt"></a>

```typescript
public readonly autoDestroyAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#description Workspace#description}.

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#execution_mode Workspace#execution_mode}.

---

##### `fileTriggersEnabled`<sup>Optional</sup> <a name="fileTriggersEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled"></a>

```typescript
public readonly fileTriggersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#force_delete Workspace#force_delete}.

---

##### `globalRemoteState`<sup>Optional</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreAdditionalTagNames`<sup>Optional</sup> <a name="ignoreAdditionalTagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames"></a>

```typescript
public readonly ignoreAdditionalTagNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}.

---

##### `ignoreAdditionalTags`<sup>Optional</sup> <a name="ignoreAdditionalTags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTags"></a>

```typescript
public readonly ignoreAdditionalTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ignore_additional_tags Workspace#ignore_additional_tags}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations"></a>

```typescript
public readonly operations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#operations Workspace#operations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#organization Workspace#organization}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#project_id Workspace#project_id}.

---

##### `queueAllRuns`<sup>Optional</sup> <a name="queueAllRuns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns"></a>

```typescript
public readonly queueAllRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `remoteStateConsumerIds`<sup>Optional</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_name Workspace#source_name}.

---

##### `sourceUrl`<sup>Optional</sup> <a name="sourceUrl" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#source_url Workspace#source_url}.

---

##### `speculativeEnabled`<sup>Optional</sup> <a name="speculativeEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled"></a>

```typescript
public readonly speculativeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `sshKeyId`<sup>Optional</sup> <a name="sshKeyId" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `structuredRunOutputEnabled`<sup>Optional</sup> <a name="structuredRunOutputEnabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled"></a>

```typescript
public readonly structuredRunOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tag_names Workspace#tag_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags Workspace#tags}.

---

##### `terraformVersion`<sup>Optional</sup> <a name="terraformVersion" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#terraform_version Workspace#terraform_version}.

---

##### `triggerPatterns`<sup>Optional</sup> <a name="triggerPatterns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `triggerPrefixes`<sup>Optional</sup> <a name="triggerPrefixes" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: WorkspaceVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#vcs_repo Workspace#vcs_repo}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#working_directory Workspace#working_directory}.

---

### WorkspaceVcsRepo <a name="WorkspaceVcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.Initializer"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

const workspaceVcsRepo: workspace.WorkspaceVcsRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#identifier Workspace#identifier}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#branch Workspace#branch}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules">ingressSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex">tagsRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags_regex Workspace#tags_regex}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#identifier Workspace#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#branch Workspace#branch}.

---

##### `githubAppInstallationId`<sup>Optional</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}.

---

##### `ingressSubmodules`<sup>Optional</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}.

---

##### `oauthTokenId`<sup>Optional</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}.

---

##### `tagsRegex`<sup>Optional</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex"></a>

```typescript
public readonly tagsRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/resources/workspace#tags_regex Workspace#tags_regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceVcsRepoOutputReference <a name="WorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer"></a>

```typescript
import { workspace } from '@cdktf/provider-tfe'

new workspace.WorkspaceVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId">resetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules">resetIngressSubmodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId">resetOauthTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex">resetTagsRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetGithubAppInstallationId` <a name="resetGithubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```typescript
public resetGithubAppInstallationId(): void
```

##### `resetIngressSubmodules` <a name="resetIngressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules"></a>

```typescript
public resetIngressSubmodules(): void
```

##### `resetOauthTokenId` <a name="resetOauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId"></a>

```typescript
public resetOauthTokenId(): void
```

##### `resetTagsRegex` <a name="resetTagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex"></a>

```typescript
public resetTagsRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput">githubAppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput">ingressSubmodulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput">oauthTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput">tagsRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex">tagsRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `githubAppInstallationIdInput`<sup>Optional</sup> <a name="githubAppInstallationIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```typescript
public readonly githubAppInstallationIdInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `ingressSubmodulesInput`<sup>Optional</sup> <a name="ingressSubmodulesInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```typescript
public readonly ingressSubmodulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="oauthTokenIdInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* string

---

##### `tagsRegexInput`<sup>Optional</sup> <a name="tagsRegexInput" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput"></a>

```typescript
public readonly tagsRegexInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `tagsRegex`<sup>Required</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```typescript
public readonly tagsRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---



