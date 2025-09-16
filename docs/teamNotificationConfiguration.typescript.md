# `teamNotificationConfiguration` Submodule <a name="`teamNotificationConfiguration` Submodule" id="@cdktf/provider-tfe.teamNotificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationConfiguration <a name="TeamNotificationConfiguration" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration tfe_team_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

new teamNotificationConfiguration.TeamNotificationConfiguration(scope: Construct, id: string, config: TeamNotificationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig">TeamNotificationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig">TeamNotificationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds">resetEmailUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetEmailUserIds` <a name="resetEmailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds"></a>

```typescript
public resetEmailUserIds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTokenWo"></a>

```typescript
public resetTokenWo(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamNotificationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamNotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamNotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput">emailUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput">tokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput">triggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds">emailUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo">tokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers">triggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailUserIdsInput`<sup>Optional</sup> <a name="emailUserIdsInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput"></a>

```typescript
public readonly emailUserIdsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWoInput"></a>

```typescript
public readonly tokenWoInput: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput"></a>

```typescript
public readonly triggersInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `emailUserIds`<sup>Required</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenWo`<sup>Required</sup> <a name="tokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationConfigurationConfig <a name="TeamNotificationConfigurationConfig" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.Initializer"></a>

```typescript
import { teamNotificationConfiguration } from '@cdktf/provider-tfe'

const teamNotificationConfigurationConfig: teamNotificationConfiguration.TeamNotificationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType">destinationType</a></code> | <code>string</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name">name</a></code> | <code>string</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds">emailUserIds</a></code> | <code>string[]</code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token">token</a></code> | <code>string</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo">tokenWo</a></code> | <code>string</code> | A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers">triggers</a></code> | <code>string[]</code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url">url</a></code> | <code>string</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `emailUserIds`<sup>Optional</sup> <a name="emailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* string[]

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value _must not_ be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

A write-only secure token for the notification configuration, guaranteed not to be written to plan or state artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#token_wo TeamNotificationConfiguration#token_wo}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---



