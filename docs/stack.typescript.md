# `stack` Submodule <a name="`stack` Submodule" id="@cdktf/provider-tfe.stack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stack <a name="Stack" id="@cdktf/provider-tfe.stack.Stack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack tfe_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.stack.Stack.Initializer"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

new stack.Stack(scope: Construct, id: string, config: StackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackConfig">StackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.stack.Stack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackConfig">StackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.stack.Stack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.stack.Stack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.stack.Stack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.stack.Stack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.stack.Stack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.stack.Stack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.stack.Stack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.stack.Stack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.stack.Stack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.stack.Stack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.stack.Stack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.stack.Stack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.stack.Stack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.stack.Stack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.stack.Stack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.stack.Stack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.stack.Stack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.stack.Stack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.Stack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.stack.Stack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.stack.Stack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.stack.Stack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.stack.Stack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.stack.Stack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo"></a>

```typescript
public putVcsRepo(value: StackVcsRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.stack.Stack.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-tfe.stack.Stack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.stack.Stack.resetVcsRepo"></a>

```typescript
public resetVcsRepo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.stack.Stack.isConstruct"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

stack.Stack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.stack.Stack.isTerraformElement"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

stack.Stack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.stack.Stack.isTerraformResource"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

stack.Stack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.stack.Stack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

stack.Stack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Stack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Stack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Stack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.deploymentNames">deploymentNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference">StackVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.vcsRepoInput">vcsRepoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.stack.Stack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.stack.Stack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.stack.Stack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.stack.Stack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.stack.Stack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.stack.Stack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.stack.Stack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.stack.Stack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.stack.Stack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.stack.Stack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.stack.Stack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.stack.Stack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.Stack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.stack.Stack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.stack.Stack.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deploymentNames`<sup>Required</sup> <a name="deploymentNames" id="@cdktf/provider-tfe.stack.Stack.property.deploymentNames"></a>

```typescript
public readonly deploymentNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.stack.Stack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-tfe.stack.Stack.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.stack.Stack.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: StackVcsRepoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference">StackVcsRepoOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-tfe.stack.Stack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.stack.Stack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-tfe.stack.Stack.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.stack.Stack.property.vcsRepoInput"></a>

```typescript
public readonly vcsRepoInput: IResolvable | StackVcsRepo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.stack.Stack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.stack.Stack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.stack.Stack.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.Stack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.stack.Stack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackConfig <a name="StackConfig" id="@cdktf/provider-tfe.stack.StackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.stack.StackConfig.Initializer"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

const stackConfig: stack.StackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.name">name</a></code> | <code>string</code> | Name of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.projectId">projectId</a></code> | <code>string</code> | ID of the project that the Stack belongs to. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.description">description</a></code> | <code>string</code> | Description of the Stack. |
| <code><a href="#@cdktf/provider-tfe.stack.StackConfig.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a></code> | vcs_repo block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.stack.StackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.stack.StackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.stack.StackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.stack.StackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.stack.StackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.stack.StackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.stack.StackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.stack.StackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#name Stack#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.stack.StackConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

ID of the project that the Stack belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#project_id Stack#project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.stack.StackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#description Stack#description}

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.stack.StackConfig.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: StackVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#vcs_repo Stack#vcs_repo}

---

### StackVcsRepo <a name="StackVcsRepo" id="@cdktf/provider-tfe.stack.StackVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.stack.StackVcsRepo.Initializer"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

const stackVcsRepo: stack.StackVcsRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.branch">branch</a></code> | <code>string</code> | The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main). |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | The installation ID of the GitHub App. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.identifier">identifier</a></code> | <code>string</code> | Identifier of the VCS repository. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepo.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | The VCS Connection to use. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The repository branch that Terraform should use. This defaults to the respository's default branch (e.g. main).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#branch Stack#branch}

---

##### `githubAppInstallationId`<sup>Optional</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

The installation ID of the GitHub App.

This conflicts with `oauth_token_id` and can only be used if `oauth_token_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#github_app_installation_id Stack#github_app_installation_id}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Identifier of the VCS repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#identifier Stack#identifier}

---

##### `oauthTokenId`<sup>Optional</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.stack.StackVcsRepo.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

The VCS Connection to use.

This ID can be obtained from a `tfe_oauth_client` resource. This conflicts with `github_app_installation_id` and can only be used if `github_app_installation_id` is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.1/docs/resources/stack#oauth_token_id Stack#oauth_token_id}

---

## Classes <a name="Classes" id="Classes"></a>

### StackVcsRepoOutputReference <a name="StackVcsRepoOutputReference" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer"></a>

```typescript
import { stack } from '@cdktf/provider-tfe'

new stack.StackVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetGithubAppInstallationId">resetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetOauthTokenId">resetOauthTokenId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetGithubAppInstallationId` <a name="resetGithubAppInstallationId" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```typescript
public resetGithubAppInstallationId(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetOauthTokenId` <a name="resetOauthTokenId" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.resetOauthTokenId"></a>

```typescript
public resetOauthTokenId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationIdInput">githubAppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenIdInput">oauthTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `githubAppInstallationIdInput`<sup>Optional</sup> <a name="githubAppInstallationIdInput" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```typescript
public readonly githubAppInstallationIdInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="oauthTokenIdInput" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.stack.StackVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackVcsRepo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.stack.StackVcsRepo">StackVcsRepo</a>

---



