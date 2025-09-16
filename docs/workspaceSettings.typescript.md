# `workspaceSettings` Submodule <a name="`workspaceSettings` Submodule" id="@cdktf/provider-tfe.workspaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettings <a name="WorkspaceSettings" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings tfe_workspace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

new workspaceSettings.WorkspaceSettings(scope: Construct, id: string, config: WorkspaceSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig">WorkspaceSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig">WorkspaceSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId">resetAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled">resetAssessmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply">resetAutoApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags">resetEffectiveTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode">resetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState">resetGlobalRemoteState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds">resetRemoteStateConsumerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAgentPoolId` <a name="resetAgentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAgentPoolId"></a>

```typescript
public resetAgentPoolId(): void
```

##### `resetAssessmentsEnabled` <a name="resetAssessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAssessmentsEnabled"></a>

```typescript
public resetAssessmentsEnabled(): void
```

##### `resetAutoApply` <a name="resetAutoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetAutoApply"></a>

```typescript
public resetAutoApply(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEffectiveTags` <a name="resetEffectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetEffectiveTags"></a>

```typescript
public resetEffectiveTags(): void
```

##### `resetExecutionMode` <a name="resetExecutionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetExecutionMode"></a>

```typescript
public resetExecutionMode(): void
```

##### `resetGlobalRemoteState` <a name="resetGlobalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetGlobalRemoteState"></a>

```typescript
public resetGlobalRemoteState(): void
```

##### `resetRemoteStateConsumerIds` <a name="resetRemoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetRemoteStateConsumerIds"></a>

```typescript
public resetRemoteStateConsumerIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

workspaceSettings.WorkspaceSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

workspaceSettings.WorkspaceSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

workspaceSettings.WorkspaceSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

workspaceSettings.WorkspaceSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspaceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites">overwrites</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput">agentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput">assessmentsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput">autoApplyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput">effectiveTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput">executionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput">globalRemoteStateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput">remoteStateConsumerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply">autoApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags">effectiveTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode">executionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState">globalRemoteState</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overwrites`<sup>Required</sup> <a name="overwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.overwrites"></a>

```typescript
public readonly overwrites: WorkspaceSettingsOverwritesList;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList">WorkspaceSettingsOverwritesList</a>

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="agentPoolIdInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolIdInput"></a>

```typescript
public readonly agentPoolIdInput: string;
```

- *Type:* string

---

##### `assessmentsEnabledInput`<sup>Optional</sup> <a name="assessmentsEnabledInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabledInput"></a>

```typescript
public readonly assessmentsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApplyInput`<sup>Optional</sup> <a name="autoApplyInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApplyInput"></a>

```typescript
public readonly autoApplyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectiveTagsInput`<sup>Optional</sup> <a name="effectiveTagsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTagsInput"></a>

```typescript
public readonly effectiveTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionModeInput`<sup>Optional</sup> <a name="executionModeInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionModeInput"></a>

```typescript
public readonly executionModeInput: string;
```

- *Type:* string

---

##### `globalRemoteStateInput`<sup>Optional</sup> <a name="globalRemoteStateInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteStateInput"></a>

```typescript
public readonly globalRemoteStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteStateConsumerIdsInput`<sup>Optional</sup> <a name="remoteStateConsumerIdsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIdsInput"></a>

```typescript
public readonly remoteStateConsumerIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

---

##### `assessmentsEnabled`<sup>Required</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.assessmentsEnabled"></a>

```typescript
public readonly assessmentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApply`<sup>Required</sup> <a name="autoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.autoApply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveTags`<sup>Required</sup> <a name="effectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.effectiveTags"></a>

```typescript
public readonly effectiveTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

---

##### `globalRemoteState`<sup>Required</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingsConfig <a name="WorkspaceSettingsConfig" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.Initializer"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

const workspaceSettingsConfig: workspaceSettings.WorkspaceSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply">autoApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description">description</a></code> | <code>string</code> | A description of the workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags">effectiveTags</a></code> | <code>{[ key: string ]: string}</code> | A map of all key-value tags set on the workspace (includes inheritted tags). |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode">executionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState">globalRemoteState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the workspace allows all workspaces in the organization to access its state data during runs. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | The set of workspace IDs set as explicit remote state consumers for the given workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value tags to add to the workspace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#workspace_id WorkspaceSettings#workspace_id}.

---

##### `agentPoolId`<sup>Optional</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#agent_pool_id WorkspaceSettings#agent_pool_id}.

---

##### `assessmentsEnabled`<sup>Optional</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.assessmentsEnabled"></a>

```typescript
public readonly assessmentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, assessments will be enabled for the workspace. This includes drift and continuous validation checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#assessments_enabled WorkspaceSettings#assessments_enabled}

---

##### `autoApply`<sup>Optional</sup> <a name="autoApply" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.autoApply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to false a human will have to manually confirm a plan in HCP Terraform's UI to start an apply.

If set to true, this resource will be automatically applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#auto_apply WorkspaceSettings#auto_apply}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#description WorkspaceSettings#description}

---

##### `effectiveTags`<sup>Optional</sup> <a name="effectiveTags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.effectiveTags"></a>

```typescript
public readonly effectiveTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of all key-value tags set on the workspace (includes inheritted tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#effective_tags WorkspaceSettings#effective_tags}

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#execution_mode WorkspaceSettings#execution_mode}.

---

##### `globalRemoteState`<sup>Optional</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the workspace allows all workspaces in the organization to access its state data during runs.

If false, then only workspaces defined in `remote_state_consumer_ids` can access its state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#global_remote_state WorkspaceSettings#global_remote_state}

---

##### `remoteStateConsumerIds`<sup>Optional</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

The set of workspace IDs set as explicit remote state consumers for the given workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#remote_state_consumer_ids WorkspaceSettings#remote_state_consumer_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value tags to add to the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_settings#tags WorkspaceSettings#tags}

---

### WorkspaceSettingsOverwrites <a name="WorkspaceSettingsOverwrites" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites.Initializer"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

const workspaceSettingsOverwrites: workspaceSettings.WorkspaceSettingsOverwrites = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingsOverwritesList <a name="WorkspaceSettingsOverwritesList" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

new workspaceSettings.WorkspaceSettingsOverwritesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get"></a>

```typescript
public get(index: number): WorkspaceSettingsOverwritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WorkspaceSettingsOverwritesOutputReference <a name="WorkspaceSettingsOverwritesOutputReference" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer"></a>

```typescript
import { workspaceSettings } from '@cdktf/provider-tfe'

new workspaceSettings.WorkspaceSettingsOverwritesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool">agentPool</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode">executionMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentPool`<sup>Required</sup> <a name="agentPool" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.agentPool"></a>

```typescript
public readonly agentPool: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.executionMode"></a>

```typescript
public readonly executionMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwritesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceSettingsOverwrites;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceSettings.WorkspaceSettingsOverwrites">WorkspaceSettingsOverwrites</a>

---



