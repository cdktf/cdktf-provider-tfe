# `sentinelVersion` Submodule <a name="`sentinelVersion` Submodule" id="@cdktf/provider-tfe.sentinelVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelVersion <a name="SentinelVersion" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version tfe_sentinel_version}.

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
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs">putArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetArchs">resetArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta">resetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason">resetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial">resetOfficial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetSha">resetSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetUrl">resetUrl</a></code> | *No description.* |

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

##### `putArchs` <a name="putArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs"></a>

```typescript
public putArchs(value: IResolvable | SentinelVersionArchs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]

---

##### `resetArchs` <a name="resetArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetArchs"></a>

```typescript
public resetArchs(): void
```

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

##### `resetOfficial` <a name="resetOfficial" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial"></a>

```typescript
public resetOfficial(): void
```

##### `resetSha` <a name="resetSha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetSha"></a>

```typescript
public resetSha(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetUrl"></a>

```typescript
public resetUrl(): void
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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archs">archs</a></code> | <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList">SentinelVersionArchsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archsInput">archsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput">betaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput">deprecatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput">deprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput">officialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archs`<sup>Required</sup> <a name="archs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archs"></a>

```typescript
public readonly archs: SentinelVersionArchsList;
```

- *Type:* <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList">SentinelVersionArchsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `archsInput`<sup>Optional</sup> <a name="archsInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archsInput"></a>

```typescript
public readonly archsInput: IResolvable | SentinelVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]

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

### SentinelVersionArchs <a name="SentinelVersionArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.Initializer"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

const sentinelVersionArchs: sentinelVersion.SentinelVersionArchs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.arch">arch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#arch SentinelVersion#arch}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#os SentinelVersion#os}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#url SentinelVersion#url}. |

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.arch"></a>

```typescript
public readonly arch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#arch SentinelVersion#arch}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#os SentinelVersion#os}.

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

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
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#version SentinelVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.archs">archs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#archs SentinelVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#beta SentinelVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#official SentinelVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#url SentinelVersion#url}. |

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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#version SentinelVersion#version}.

---

##### `archs`<sup>Optional</sup> <a name="archs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.archs"></a>

```typescript
public readonly archs: IResolvable | SentinelVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#archs SentinelVersion#archs}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#beta SentinelVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}.

---

##### `deprecatedReason`<sup>Optional</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#official SentinelVersion#official}.

---

##### `sha`<sup>Optional</sup> <a name="sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelVersionArchsList <a name="SentinelVersionArchsList" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

new sentinelVersion.SentinelVersionArchsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get"></a>

```typescript
public get(index: number): SentinelVersionArchsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>[]

---


### SentinelVersionArchsOutputReference <a name="SentinelVersionArchsOutputReference" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer"></a>

```typescript
import { sentinelVersion } from '@cdktf/provider-tfe'

new sentinelVersion.SentinelVersionArchsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.archInput">archInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.arch">arch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archInput`<sup>Optional</sup> <a name="archInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.archInput"></a>

```typescript
public readonly archInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `shaInput`<sup>Optional</sup> <a name="shaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.shaInput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.arch"></a>

```typescript
public readonly arch: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelVersionArchs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs">SentinelVersionArchs</a>

---



