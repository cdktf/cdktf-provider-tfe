# `opaVersion` Submodule <a name="`opaVersion` Submodule" id="@cdktf/provider-tfe.opaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpaVersion <a name="OpaVersion" id="@cdktf/provider-tfe.opaVersion.OpaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version tfe_opa_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

new opaVersion.OpaVersion(scope: Construct, id: string, config: OpaVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig">OpaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.opaVersion.OpaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig">OpaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs">putArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetArchs">resetArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetBeta">resetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecatedReason">resetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetOfficial">resetOfficial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetSha">resetSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.opaVersion.OpaVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.opaVersion.OpaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.opaVersion.OpaVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArchs` <a name="putArchs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs"></a>

```typescript
public putArchs(value: IResolvable | OpaVersionArchs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.opaVersion.OpaVersion.putArchs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]

---

##### `resetArchs` <a name="resetArchs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetArchs"></a>

```typescript
public resetArchs(): void
```

##### `resetBeta` <a name="resetBeta" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetBeta"></a>

```typescript
public resetBeta(): void
```

##### `resetDeprecated` <a name="resetDeprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecated"></a>

```typescript
public resetDeprecated(): void
```

##### `resetDeprecatedReason` <a name="resetDeprecatedReason" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetDeprecatedReason"></a>

```typescript
public resetDeprecatedReason(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetOfficial` <a name="resetOfficial" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetOfficial"></a>

```typescript
public resetOfficial(): void
```

##### `resetSha` <a name="resetSha" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetSha"></a>

```typescript
public resetSha(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-tfe.opaVersion.OpaVersion.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpaVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

opaVersion.OpaVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

opaVersion.OpaVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

opaVersion.OpaVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.opaVersion.OpaVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

opaVersion.OpaVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpaVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.archs">archs</a></code> | <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList">OpaVersionArchsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.archsInput">archsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.betaInput">betaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedInput">deprecatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReasonInput">deprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.officialInput">officialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archs`<sup>Required</sup> <a name="archs" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.archs"></a>

```typescript
public readonly archs: OpaVersionArchsList;
```

- *Type:* <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList">OpaVersionArchsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `archsInput`<sup>Optional</sup> <a name="archsInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.archsInput"></a>

```typescript
public readonly archsInput: IResolvable | OpaVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]

---

##### `betaInput`<sup>Optional</sup> <a name="betaInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.betaInput"></a>

```typescript
public readonly betaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedInput`<sup>Optional</sup> <a name="deprecatedInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedInput"></a>

```typescript
public readonly deprecatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReasonInput`<sup>Optional</sup> <a name="deprecatedReasonInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReasonInput"></a>

```typescript
public readonly deprecatedReasonInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `officialInput`<sup>Optional</sup> <a name="officialInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.officialInput"></a>

```typescript
public readonly officialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shaInput`<sup>Optional</sup> <a name="shaInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.shaInput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReason`<sup>Required</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `official`<sup>Required</sup> <a name="official" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.opaVersion.OpaVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpaVersionArchs <a name="OpaVersionArchs" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.Initializer"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

const opaVersionArchs: opaVersion.OpaVersionArchs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.arch">arch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#arch OpaVersion#arch}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#os OpaVersion#os}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}. |

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.arch"></a>

```typescript
public readonly arch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#arch OpaVersion#arch}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#os OpaVersion#os}.

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchs.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}.

---

### OpaVersionConfig <a name="OpaVersionConfig" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.Initializer"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

const opaVersionConfig: opaVersion.OpaVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.archs">archs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#version OpaVersion#version}.

---

##### `archs`<sup>Optional</sup> <a name="archs" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.archs"></a>

```typescript
public readonly archs: IResolvable | OpaVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#archs OpaVersion#archs}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#beta OpaVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated OpaVersion#deprecated}.

---

##### `deprecatedReason`<sup>Optional</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#deprecated_reason OpaVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#enabled OpaVersion#enabled}.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#official OpaVersion#official}.

---

##### `sha`<sup>Optional</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#sha OpaVersion#sha}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/opa_version#url OpaVersion#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpaVersionArchsList <a name="OpaVersionArchsList" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

new opaVersion.OpaVersionArchsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get"></a>

```typescript
public get(index: number): OpaVersionArchsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpaVersionArchs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>[]

---


### OpaVersionArchsOutputReference <a name="OpaVersionArchsOutputReference" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer"></a>

```typescript
import { opaVersion } from '@cdktf/provider-tfe'

new opaVersion.OpaVersionArchsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.archInput">archInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.arch">arch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archInput`<sup>Optional</sup> <a name="archInput" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.archInput"></a>

```typescript
public readonly archInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `shaInput`<sup>Optional</sup> <a name="shaInput" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.shaInput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `arch`<sup>Required</sup> <a name="arch" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.arch"></a>

```typescript
public readonly arch: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.opaVersion.OpaVersionArchsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpaVersionArchs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.opaVersion.OpaVersionArchs">OpaVersionArchs</a>

---



