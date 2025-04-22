# `notificationConfiguration` Submodule <a name="`notificationConfiguration` Submodule" id="@cdktf/provider-tfe.notificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationConfiguration <a name="NotificationConfiguration" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration tfe_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

new notificationConfiguration.NotificationConfiguration(scope: Construct, id: string, config: NotificationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig">NotificationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig">NotificationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailUserIds">resetEmailUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetEmailUserIds` <a name="resetEmailUserIds" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEmailUserIds"></a>

```typescript
public resetEmailUserIds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTokenWo"></a>

```typescript
public resetTokenWo(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

notificationConfiguration.NotificationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

notificationConfiguration.NotificationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

notificationConfiguration.NotificationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

notificationConfiguration.NotificationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIdsInput">emailUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenWoInput">tokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggersInput">triggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIds">emailUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenWo">tokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggers">triggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailUserIdsInput`<sup>Optional</sup> <a name="emailUserIdsInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIdsInput"></a>

```typescript
public readonly emailUserIdsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenWoInput"></a>

```typescript
public readonly tokenWoInput: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggersInput"></a>

```typescript
public readonly triggersInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `emailUserIds`<sup>Required</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.emailUserIds"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenWo`<sup>Required</sup> <a name="tokenWo" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationConfigurationConfig <a name="NotificationConfigurationConfig" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.Initializer"></a>

```typescript
import { notificationConfiguration } from '@cdktf/provider-tfe'

const notificationConfigurationConfig: notificationConfiguration.NotificationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.destinationType">destinationType</a></code> | <code>string</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.name">name</a></code> | <code>string</code> | Name of the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | The ID of the workspace that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailUserIds">emailUserIds</a></code> | <code>string[]</code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the notification configuration should be enabled or not. Disabled configurations will not send any notifications. Defaults to `false`. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.token">token</a></code> | <code>string</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.tokenWo">tokenWo</a></code> | <code>string</code> | Value of the token in write-only mode. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.triggers">triggers</a></code> | <code>string[]</code> | The array of triggers for which this notification configuration will send notifications. If omitted, no notification triggers are configured. |
| <code><a href="#@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.url">url</a></code> | <code>string</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#destination_type NotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#name NotificationConfiguration#name}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The ID of the workspace that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#workspace_id NotificationConfiguration#workspace_id}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#email_addresses NotificationConfiguration#email_addresses}

---

##### `emailUserIds`<sup>Optional</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.emailUserIds"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* string[]

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the notification configuration should be enabled or not. Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#enabled NotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value _must not_ be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#token NotificationConfiguration#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

Value of the token in write-only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#token_wo NotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

The array of triggers for which this notification configuration will send notifications. If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#triggers NotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.notificationConfiguration.NotificationConfigurationConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/notification_configuration#url NotificationConfiguration#url}

---



