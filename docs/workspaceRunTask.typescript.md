# `workspaceRunTask` Submodule <a name="`workspaceRunTask` Submodule" id="@cdktf/provider-tfe.workspaceRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRunTask <a name="WorkspaceRunTask" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

new workspaceRunTask.WorkspaceRunTask(scope: Construct, id: string, config: WorkspaceRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetStage` <a name="resetStage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage"></a>

```typescript
public resetStage(): void
```

##### `resetStages` <a name="resetStages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStages"></a>

```typescript
public resetStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceRunTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

workspaceRunTask.WorkspaceRunTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

workspaceRunTask.WorkspaceRunTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

workspaceRunTask.WorkspaceRunTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

workspaceRunTask.WorkspaceRunTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspaceRunTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceRunTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput">enforcementLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stagesInput">stagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput">taskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enforcementLevelInput`<sup>Optional</sup> <a name="enforcementLevelInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput"></a>

```typescript
public readonly enforcementLevelInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stagesInput"></a>

```typescript
public readonly stagesInput: string[];
```

- *Type:* string[]

---

##### `taskIdInput`<sup>Optional</sup> <a name="taskIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunTaskConfig <a name="WorkspaceRunTaskConfig" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.Initializer"></a>

```typescript
import { workspaceRunTask } from '@cdktf/provider-tfe'

const workspaceRunTaskConfig: workspaceRunTask.WorkspaceRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | The enforcement level of the task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId">taskId</a></code> | <code>string</code> | The id of the Run task to associate to the Workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | The id of the workspace to associate the Run task to. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage">stage</a></code> | <code>string</code> | The stage to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stages">stages</a></code> | <code>string[]</code> | The stages to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

The enforcement level of the task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The id of the Run task to associate to the Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#task_id WorkspaceRunTask#task_id}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The id of the workspace to associate the Run task to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

The stage to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#stage WorkspaceRunTask#stage}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

The stages to run the task in. Valid values are `pre_plan`, `post_plan`, `pre_apply` and `post_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/workspace_run_task#stages WorkspaceRunTask#stages}

---



