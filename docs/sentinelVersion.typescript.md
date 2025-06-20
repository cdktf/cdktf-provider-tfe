# `sentinelVersion` Submodule <a name="`sentinelVersion` Submodule" id="@cdktf/provider-tfe.sentinelVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelVersion <a name="SentinelVersion" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version tfe_sentinel_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

new sentinelVersion.SentinelVersion(scope: Construct, id: string, config: SentinelVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta">resetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason">resetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial">resetOfficial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBeta` <a name="resetBeta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta"></a>

```typescript
public resetBeta(): void
```

##### `resetDeprecated` <a name="resetDeprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated"></a>

```typescript
public resetDeprecated(): void
```

##### `resetDeprecatedReason` <a name="resetDeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason"></a>

```typescript
public resetDeprecatedReason(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOfficial` <a name="resetOfficial" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial"></a>

```typescript
public resetOfficial(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

sentinelVersion.SentinelVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

sentinelVersion.SentinelVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

sentinelVersion.SentinelVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

sentinelVersion.SentinelVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput">betaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput">deprecatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput">deprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput">officialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `betaInput`<sup>Optional</sup> <a name="betaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput"></a>

```typescript
public readonly betaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedInput`<sup>Optional</sup> <a name="deprecatedInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput"></a>

```typescript
public readonly deprecatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReasonInput`<sup>Optional</sup> <a name="deprecatedReasonInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput"></a>

```typescript
public readonly deprecatedReasonInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `officialInput`<sup>Optional</sup> <a name="officialInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput"></a>

```typescript
public readonly officialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shaInput`<sup>Optional</sup> <a name="shaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReason`<sup>Required</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `official`<sup>Required</sup> <a name="official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelVersionConfig <a name="SentinelVersionConfig" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.Initializer"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

const sentinelVersionConfig: sentinelVersion.SentinelVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#url SentinelVersion#url}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#version SentinelVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#beta SentinelVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#id SentinelVersion#id}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#official SentinelVersion#official}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#version SentinelVersion#version}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#beta SentinelVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}.

---

##### `deprecatedReason`<sup>Optional</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#id SentinelVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/sentinel_version#official SentinelVersion#official}.

---



