# `hyokConfiguration` Submodule <a name="`hyokConfiguration` Submodule" id="@cdktf/provider-tfe.hyokConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyokConfiguration <a name="HyokConfiguration" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

new hyokConfiguration.HyokConfiguration(scope: Construct, id: string, config: HyokConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions">putKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions">resetKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsOptions` <a name="putKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions"></a>

```typescript
public putKmsOptions(value: HyokConfigurationKmsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `resetKmsOptions` <a name="resetKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions"></a>

```typescript
public resetKmsOptions(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

hyokConfiguration.HyokConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

hyokConfiguration.HyokConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

hyokConfiguration.HyokConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

hyokConfiguration.HyokConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HyokConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HyokConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HyokConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions">kmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput">agentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput">kekIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput">kmsOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput">oidcConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput">oidcConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId">kekId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId">oidcConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType">oidcConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsOptions`<sup>Required</sup> <a name="kmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions"></a>

```typescript
public readonly kmsOptions: HyokConfigurationKmsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a>

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="agentPoolIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput"></a>

```typescript
public readonly agentPoolIdInput: string;
```

- *Type:* string

---

##### `kekIdInput`<sup>Optional</sup> <a name="kekIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput"></a>

```typescript
public readonly kekIdInput: string;
```

- *Type:* string

---

##### `kmsOptionsInput`<sup>Optional</sup> <a name="kmsOptionsInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput"></a>

```typescript
public readonly kmsOptionsInput: IResolvable | HyokConfigurationKmsOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oidcConfigurationIdInput`<sup>Optional</sup> <a name="oidcConfigurationIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput"></a>

```typescript
public readonly oidcConfigurationIdInput: string;
```

- *Type:* string

---

##### `oidcConfigurationTypeInput`<sup>Optional</sup> <a name="oidcConfigurationTypeInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput"></a>

```typescript
public readonly oidcConfigurationTypeInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

---

##### `kekId`<sup>Required</sup> <a name="kekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId"></a>

```typescript
public readonly kekId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidcConfigurationId`<sup>Required</sup> <a name="oidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId"></a>

```typescript
public readonly oidcConfigurationId: string;
```

- *Type:* string

---

##### `oidcConfigurationType`<sup>Required</sup> <a name="oidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType"></a>

```typescript
public readonly oidcConfigurationType: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HyokConfigurationConfig <a name="HyokConfigurationConfig" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.Initializer"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

const hyokConfigurationConfig: hyokConfiguration.HyokConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId">kekId</a></code> | <code>string</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name">name</a></code> | <code>string</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId">oidcConfigurationId</a></code> | <code>string</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType">oidcConfigurationType</a></code> | <code>string</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions">kmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentPoolId`<sup>Required</sup> <a name="agentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `kekId`<sup>Required</sup> <a name="kekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId"></a>

```typescript
public readonly kekId: string;
```

- *Type:* string

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `oidcConfigurationId`<sup>Required</sup> <a name="oidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId"></a>

```typescript
public readonly oidcConfigurationId: string;
```

- *Type:* string

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `oidcConfigurationType`<sup>Required</sup> <a name="oidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType"></a>

```typescript
public readonly oidcConfigurationType: string;
```

- *Type:* string

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `kmsOptions`<sup>Optional</sup> <a name="kmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions"></a>

```typescript
public readonly kmsOptions: HyokConfigurationKmsOptions;
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

### HyokConfigurationKmsOptions <a name="HyokConfigurationKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.Initializer"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

const hyokConfigurationKmsOptions: hyokConfiguration.HyokConfigurationKmsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation">keyLocation</a></code> | <code>string</code> | The location in which the GCP key ring exists. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion">keyRegion</a></code> | <code>string</code> | The AWS region where your key is located. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId">keyRingId</a></code> | <code>string</code> | The root resource for Google Cloud KMS keys and key versions. |

---

##### `keyLocation`<sup>Optional</sup> <a name="keyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation"></a>

```typescript
public readonly keyLocation: string;
```

- *Type:* string

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

##### `keyRegion`<sup>Optional</sup> <a name="keyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion"></a>

```typescript
public readonly keyRegion: string;
```

- *Type:* string

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

##### `keyRingId`<sup>Optional</sup> <a name="keyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId"></a>

```typescript
public readonly keyRingId: string;
```

- *Type:* string

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyokConfigurationKmsOptionsOutputReference <a name="HyokConfigurationKmsOptionsOutputReference" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer"></a>

```typescript
import { hyokConfiguration } from '@cdktf/provider-tfe'

new hyokConfiguration.HyokConfigurationKmsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation">resetKeyLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion">resetKeyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId">resetKeyRingId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyLocation` <a name="resetKeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation"></a>

```typescript
public resetKeyLocation(): void
```

##### `resetKeyRegion` <a name="resetKeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion"></a>

```typescript
public resetKeyRegion(): void
```

##### `resetKeyRingId` <a name="resetKeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId"></a>

```typescript
public resetKeyRingId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput">keyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput">keyRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput">keyRingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation">keyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion">keyRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId">keyRingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyLocationInput`<sup>Optional</sup> <a name="keyLocationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput"></a>

```typescript
public readonly keyLocationInput: string;
```

- *Type:* string

---

##### `keyRegionInput`<sup>Optional</sup> <a name="keyRegionInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput"></a>

```typescript
public readonly keyRegionInput: string;
```

- *Type:* string

---

##### `keyRingIdInput`<sup>Optional</sup> <a name="keyRingIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput"></a>

```typescript
public readonly keyRingIdInput: string;
```

- *Type:* string

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation"></a>

```typescript
public readonly keyLocation: string;
```

- *Type:* string

---

##### `keyRegion`<sup>Required</sup> <a name="keyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion"></a>

```typescript
public readonly keyRegion: string;
```

- *Type:* string

---

##### `keyRingId`<sup>Required</sup> <a name="keyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId"></a>

```typescript
public readonly keyRingId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HyokConfigurationKmsOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---



