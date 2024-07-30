# `adminOrganizationSettings` Submodule <a name="`adminOrganizationSettings` Submodule" id="@cdktf/provider-tfe.adminOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminOrganizationSettings <a name="AdminOrganizationSettings" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings tfe_admin_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

new adminOrganizationSettings.AdminOrganizationSettings(scope: Construct, id: string, config?: AdminOrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig">AdminOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig">AdminOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools">resetAccessBetaTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing">resetGlobalModuleSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations">resetModuleSharingConsumerOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit">resetWorkspaceLimit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessBetaTools` <a name="resetAccessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetAccessBetaTools"></a>

```typescript
public resetAccessBetaTools(): void
```

##### `resetGlobalModuleSharing` <a name="resetGlobalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetGlobalModuleSharing"></a>

```typescript
public resetGlobalModuleSharing(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModuleSharingConsumerOrganizations` <a name="resetModuleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetModuleSharingConsumerOrganizations"></a>

```typescript
public resetModuleSharingConsumerOrganizations(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetWorkspaceLimit` <a name="resetWorkspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.resetWorkspaceLimit"></a>

```typescript
public resetWorkspaceLimit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdminOrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

adminOrganizationSettings.AdminOrganizationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdminOrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdminOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdminOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdminOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled">ssoEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput">accessBetaToolsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput">globalModuleSharingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput">moduleSharingConsumerOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput">workspaceLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools">accessBetaTools</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing">globalModuleSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations">moduleSharingConsumerOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit">workspaceLimit</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ssoEnabled`<sup>Required</sup> <a name="ssoEnabled" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.ssoEnabled"></a>

```typescript
public readonly ssoEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `accessBetaToolsInput`<sup>Optional</sup> <a name="accessBetaToolsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaToolsInput"></a>

```typescript
public readonly accessBetaToolsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `globalModuleSharingInput`<sup>Optional</sup> <a name="globalModuleSharingInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharingInput"></a>

```typescript
public readonly globalModuleSharingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `moduleSharingConsumerOrganizationsInput`<sup>Optional</sup> <a name="moduleSharingConsumerOrganizationsInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizationsInput"></a>

```typescript
public readonly moduleSharingConsumerOrganizationsInput: string[];
```

- *Type:* string[]

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `workspaceLimitInput`<sup>Optional</sup> <a name="workspaceLimitInput" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimitInput"></a>

```typescript
public readonly workspaceLimitInput: number;
```

- *Type:* number

---

##### `accessBetaTools`<sup>Required</sup> <a name="accessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.accessBetaTools"></a>

```typescript
public readonly accessBetaTools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `globalModuleSharing`<sup>Required</sup> <a name="globalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.globalModuleSharing"></a>

```typescript
public readonly globalModuleSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `moduleSharingConsumerOrganizations`<sup>Required</sup> <a name="moduleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.moduleSharingConsumerOrganizations"></a>

```typescript
public readonly moduleSharingConsumerOrganizations: string[];
```

- *Type:* string[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspaceLimit`<sup>Required</sup> <a name="workspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.workspaceLimit"></a>

```typescript
public readonly workspaceLimit: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminOrganizationSettingsConfig <a name="AdminOrganizationSettingsConfig" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.Initializer"></a>

```typescript
import { adminOrganizationSettings } from '@cdktf/provider-tfe'

const adminOrganizationSettingsConfig: adminOrganizationSettings.AdminOrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools">accessBetaTools</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing">globalModuleSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations">moduleSharingConsumerOrganizations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}. |
| <code><a href="#@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit">workspaceLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessBetaTools`<sup>Optional</sup> <a name="accessBetaTools" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.accessBetaTools"></a>

```typescript
public readonly accessBetaTools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}.

---

##### `globalModuleSharing`<sup>Optional</sup> <a name="globalModuleSharing" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.globalModuleSharing"></a>

```typescript
public readonly globalModuleSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleSharingConsumerOrganizations`<sup>Optional</sup> <a name="moduleSharingConsumerOrganizations" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.moduleSharingConsumerOrganizations"></a>

```typescript
public readonly moduleSharingConsumerOrganizations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}.

---

##### `workspaceLimit`<sup>Optional</sup> <a name="workspaceLimit" id="@cdktf/provider-tfe.adminOrganizationSettings.AdminOrganizationSettingsConfig.property.workspaceLimit"></a>

```typescript
public readonly workspaceLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.1/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}.

---



