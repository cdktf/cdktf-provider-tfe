# `registryProvider` Submodule <a name="`registryProvider` Submodule" id="@cdktf/provider-tfe.registryProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryProvider <a name="RegistryProvider" id="@cdktf/provider-tfe.registryProvider.RegistryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider tfe_registry_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

new registryProvider.RegistryProvider(scope: Construct, id: string, config: RegistryProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig">RegistryProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig">RegistryProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.resetRegistryName">resetRegistryName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RegistryProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isConstruct"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

registryProvider.RegistryProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformElement"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

registryProvider.RegistryProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformResource"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

registryProvider.RegistryProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

registryProvider.RegistryProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RegistryProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RegistryProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RegistryProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegistryProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.registryProvider.RegistryProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryProviderConfig <a name="RegistryProviderConfig" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.Initializer"></a>

```typescript
import { registryProvider } from '@cdktf/provider-tfe'

const registryProviderConfig: registryProvider.RegistryProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.name">name</a></code> | <code>string</code> | Name of the provider. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the provider. For private providers this is the same as the oraganization. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.registryName">registryName</a></code> | <code>string</code> | Whether this is a publicly maintained provider or private. Must be either `public` or `private`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider#name RegistryProvider#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the provider. For private providers this is the same as the oraganization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider#namespace RegistryProvider#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider#organization RegistryProvider#organization}

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.registryProvider.RegistryProviderConfig.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Whether this is a publicly maintained provider or private. Must be either `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_provider#registry_name RegistryProvider#registry_name}

---



