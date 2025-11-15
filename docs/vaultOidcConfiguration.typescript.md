# `vaultOidcConfiguration` Submodule <a name="`vaultOidcConfiguration` Submodule" id="@cdktf/provider-tfe.vaultOidcConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultOidcConfiguration <a name="VaultOidcConfiguration" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration tfe_vault_oidc_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

new vaultOidcConfiguration.VaultOidcConfiguration(scope: Construct, id: string, config: VaultOidcConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig">VaultOidcConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig">VaultOidcConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath">resetAuthPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert">resetEncodedCacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthPath` <a name="resetAuthPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetAuthPath"></a>

```typescript
public resetAuthPath(): void
```

##### `resetEncodedCacert` <a name="resetEncodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetEncodedCacert"></a>

```typescript
public resetEncodedCacert(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

vaultOidcConfiguration.VaultOidcConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultOidcConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultOidcConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultOidcConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultOidcConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput">authPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput">encodedCacertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath">authPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert">encodedCacert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `authPathInput`<sup>Optional</sup> <a name="authPathInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPathInput"></a>

```typescript
public readonly authPathInput: string;
```

- *Type:* string

---

##### `encodedCacertInput`<sup>Optional</sup> <a name="encodedCacertInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacertInput"></a>

```typescript
public readonly encodedCacertInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `authPath`<sup>Required</sup> <a name="authPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.authPath"></a>

```typescript
public readonly authPath: string;
```

- *Type:* string

---

##### `encodedCacert`<sup>Required</sup> <a name="encodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.encodedCacert"></a>

```typescript
public readonly encodedCacert: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultOidcConfigurationConfig <a name="VaultOidcConfigurationConfig" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.Initializer"></a>

```typescript
import { vaultOidcConfiguration } from '@cdktf/provider-tfe'

const vaultOidcConfigurationConfig: vaultOidcConfiguration.VaultOidcConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address">address</a></code> | <code>string</code> | The full address of your Vault instance. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace your JWT auth path is mounted in. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName">roleName</a></code> | <code>string</code> | The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath">authPath</a></code> | <code>string</code> | The mounting path of JWT auth path of JWT auth. Defaults to "jwt". |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert">encodedCacert</a></code> | <code>string</code> | A base64 encoded certificate which can be used to authenticate your Vault certificate. |
| <code><a href="#@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization to which the TFE Vault OIDC configuration belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The full address of your Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#address VaultOidcConfiguration#address}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace your JWT auth path is mounted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#namespace VaultOidcConfiguration#namespace}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of a role in your Vault JWT auth path, with permission to encrypt and decrypt with a Transit secrets engine key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#role_name VaultOidcConfiguration#role_name}

---

##### `authPath`<sup>Optional</sup> <a name="authPath" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.authPath"></a>

```typescript
public readonly authPath: string;
```

- *Type:* string

The mounting path of JWT auth path of JWT auth. Defaults to "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#auth_path VaultOidcConfiguration#auth_path}

---

##### `encodedCacert`<sup>Optional</sup> <a name="encodedCacert" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.encodedCacert"></a>

```typescript
public readonly encodedCacert: string;
```

- *Type:* string

A base64 encoded certificate which can be used to authenticate your Vault certificate.

Only needed for self-hosted Vault Enterprise instances with a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#encoded_cacert VaultOidcConfiguration#encoded_cacert}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.vaultOidcConfiguration.VaultOidcConfigurationConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization to which the TFE Vault OIDC configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/vault_oidc_configuration#organization VaultOidcConfiguration#organization}

---



