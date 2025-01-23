# `registryModule` Submodule <a name="`registryModule` Submodule" id="@cdktf/provider-tfe.registryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryModule <a name="RegistryModule" id="@cdktf/provider-tfe.registryModule.RegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

new registryModule.RegistryModule(scope: Construct, id: string, config?: RegistryModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig">RegistryModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig">RegistryModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetInitialVersion">resetInitialVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider">resetModuleProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode">resetNoCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.registryModule.RegistryModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig"></a>

```typescript
public putTestConfig(value: IResolvable | RegistryModuleTestConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo"></a>

```typescript
public putVcsRepo(value: RegistryModuleVcsRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialVersion` <a name="resetInitialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetInitialVersion"></a>

```typescript
public resetInitialVersion(): void
```

##### `resetModuleProvider` <a name="resetModuleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider"></a>

```typescript
public resetModuleProvider(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoCode` <a name="resetNoCode" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode"></a>

```typescript
public resetNoCode(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig"></a>

```typescript
public resetTestConfig(): void
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo"></a>

```typescript
public resetVcsRepo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

registryModule.RegistryModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

registryModule.RegistryModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

registryModule.RegistryModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

registryModule.RegistryModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RegistryModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism">publishingMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersionInput">initialVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput">moduleProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput">noCodeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput">testConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput">vcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersion">initialVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider">moduleProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode">noCode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publishingMechanism`<sup>Required</sup> <a name="publishingMechanism" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism"></a>

```typescript
public readonly publishingMechanism: string;
```

- *Type:* string

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig"></a>

```typescript
public readonly testConfig: RegistryModuleTestConfigList;
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a>

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: RegistryModuleVcsRepoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialVersionInput`<sup>Optional</sup> <a name="initialVersionInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersionInput"></a>

```typescript
public readonly initialVersionInput: string;
```

- *Type:* string

---

##### `moduleProviderInput`<sup>Optional</sup> <a name="moduleProviderInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput"></a>

```typescript
public readonly moduleProviderInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noCodeInput`<sup>Optional</sup> <a name="noCodeInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput"></a>

```typescript
public readonly noCodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput"></a>

```typescript
public readonly testConfigInput: IResolvable | RegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput"></a>

```typescript
public readonly vcsRepoInput: RegistryModuleVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialVersion`<sup>Required</sup> <a name="initialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersion"></a>

```typescript
public readonly initialVersion: string;
```

- *Type:* string

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider"></a>

```typescript
public readonly moduleProvider: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noCode`<sup>Required</sup> <a name="noCode" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode"></a>

```typescript
public readonly noCode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryModuleConfig <a name="RegistryModuleConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

const registryModuleConfig: registryModule.RegistryModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#id RegistryModule#id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.initialVersion">initialVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#initial_version RegistryModule#initial_version}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider">moduleProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#name RegistryModule#name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#namespace RegistryModule#namespace}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode">noCode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#no_code RegistryModule#no_code}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#organization RegistryModule#organization}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName">registryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig">testConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | vcs_repo block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#id RegistryModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialVersion`<sup>Optional</sup> <a name="initialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.initialVersion"></a>

```typescript
public readonly initialVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#initial_version RegistryModule#initial_version}.

---

##### `moduleProvider`<sup>Optional</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider"></a>

```typescript
public readonly moduleProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#name RegistryModule#name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#namespace RegistryModule#namespace}.

---

##### `noCode`<sup>Optional</sup> <a name="noCode" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode"></a>

```typescript
public readonly noCode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#no_code RegistryModule#no_code}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#organization RegistryModule#organization}.

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}.

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig"></a>

```typescript
public readonly testConfig: IResolvable | RegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#test_config RegistryModule#test_config}

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: RegistryModuleVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#vcs_repo RegistryModule#vcs_repo}

---

### RegistryModuleTestConfig <a name="RegistryModuleTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

const registryModuleTestConfig: registryModule.RegistryModuleTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled">testsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}. |

---

##### `testsEnabled`<sup>Optional</sup> <a name="testsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled"></a>

```typescript
public readonly testsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}.

---

### RegistryModuleVcsRepo <a name="RegistryModuleVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

const registryModuleVcsRepo: registryModule.RegistryModuleVcsRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier">displayIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#identifier RegistryModule#identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#branch RegistryModule#branch}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags">tags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#tags RegistryModule#tags}. |

---

##### `displayIdentifier`<sup>Required</sup> <a name="displayIdentifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier"></a>

```typescript
public readonly displayIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#identifier RegistryModule#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#branch RegistryModule#branch}.

---

##### `githubAppInstallationId`<sup>Optional</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}.

---

##### `oauthTokenId`<sup>Optional</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags"></a>

```typescript
public readonly tags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/registry_module#tags RegistryModule#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegistryModuleTestConfigList <a name="RegistryModuleTestConfigList" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

new registryModule.RegistryModuleTestConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get"></a>

```typescript
public get(index: number): RegistryModuleTestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>[]

---


### RegistryModuleTestConfigOutputReference <a name="RegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

new registryModule.RegistryModuleTestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled">resetTestsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestsEnabled` <a name="resetTestsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled"></a>

```typescript
public resetTestsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput">testsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled">testsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testsEnabledInput`<sup>Optional</sup> <a name="testsEnabledInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput"></a>

```typescript
public readonly testsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testsEnabled`<sup>Required</sup> <a name="testsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```typescript
public readonly testsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RegistryModuleTestConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig">RegistryModuleTestConfig</a>

---


### RegistryModuleVcsRepoOutputReference <a name="RegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer"></a>

```typescript
import { registryModule } from '@cdktf/provider-tfe'

new registryModule.RegistryModuleVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId">resetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId">resetOauthTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetGithubAppInstallationId` <a name="resetGithubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```typescript
public resetGithubAppInstallationId(): void
```

##### `resetOauthTokenId` <a name="resetOauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId"></a>

```typescript
public resetOauthTokenId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput">displayIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput">githubAppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput">oauthTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput">tagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier">displayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags">tags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `displayIdentifierInput`<sup>Optional</sup> <a name="displayIdentifierInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput"></a>

```typescript
public readonly displayIdentifierInput: string;
```

- *Type:* string

---

##### `githubAppInstallationIdInput`<sup>Optional</sup> <a name="githubAppInstallationIdInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```typescript
public readonly githubAppInstallationIdInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="oauthTokenIdInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `displayIdentifier`<sup>Required</sup> <a name="displayIdentifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```typescript
public readonly displayIdentifier: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags"></a>

```typescript
public readonly tags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RegistryModuleVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---



