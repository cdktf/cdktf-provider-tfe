# `dataTfeRegistryModule` Submodule <a name="`dataTfeRegistryModule` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryModule <a name="DataTfeRegistryModule" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModule(scope: Construct, id: string, config: DataTfeRegistryModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig">DataTfeRegistryModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig">DataTfeRegistryModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses">putVersionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses">resetVersionStatuses</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | DataTfeRegistryModulePermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig"></a>

```typescript
public putTestConfig(value: IResolvable | DataTfeRegistryModuleTestConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putTestConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo"></a>

```typescript
public putVcsRepo(value: IResolvable | DataTfeRegistryModuleVcsRepo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]

---

##### `putVersionStatuses` <a name="putVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses"></a>

```typescript
public putVersionStatuses(value: IResolvable | DataTfeRegistryModuleVersionStatuses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.putVersionStatuses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetTestConfig"></a>

```typescript
public resetTestConfig(): void
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVcsRepo"></a>

```typescript
public resetVcsRepo(): void
```

##### `resetVersionStatuses` <a name="resetVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.resetVersionStatuses"></a>

```typescript
public resetVersionStatuses(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

dataTfeRegistryModule.DataTfeRegistryModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeRegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeRegistryModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeRegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode">noCode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId">noCodeModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource">noCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism">publishingMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses">versionStatuses</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput">moduleProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput">testConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput">vcsRepoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput">versionStatusesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider">moduleProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noCode`<sup>Required</sup> <a name="noCode" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCode"></a>

```typescript
public readonly noCode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `noCodeModuleId`<sup>Required</sup> <a name="noCodeModuleId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleId"></a>

```typescript
public readonly noCodeModuleId: string;
```

- *Type:* string

---

##### `noCodeModuleSource`<sup>Required</sup> <a name="noCodeModuleSource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.noCodeModuleSource"></a>

```typescript
public readonly noCodeModuleSource: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissions"></a>

```typescript
public readonly permissions: DataTfeRegistryModulePermissionsList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList">DataTfeRegistryModulePermissionsList</a>

---

##### `publishingMechanism`<sup>Required</sup> <a name="publishingMechanism" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.publishingMechanism"></a>

```typescript
public readonly publishingMechanism: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfig"></a>

```typescript
public readonly testConfig: DataTfeRegistryModuleTestConfigList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList">DataTfeRegistryModuleTestConfigList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: DataTfeRegistryModuleVcsRepoList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList">DataTfeRegistryModuleVcsRepoList</a>

---

##### `versionStatuses`<sup>Required</sup> <a name="versionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatuses"></a>

```typescript
public readonly versionStatuses: DataTfeRegistryModuleVersionStatusesList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList">DataTfeRegistryModuleVersionStatusesList</a>

---

##### `moduleProviderInput`<sup>Optional</sup> <a name="moduleProviderInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProviderInput"></a>

```typescript
public readonly moduleProviderInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | DataTfeRegistryModulePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.testConfigInput"></a>

```typescript
public readonly testConfigInput: IResolvable | DataTfeRegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.vcsRepoInput"></a>

```typescript
public readonly vcsRepoInput: IResolvable | DataTfeRegistryModuleVcsRepo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]

---

##### `versionStatusesInput`<sup>Optional</sup> <a name="versionStatusesInput" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.versionStatusesInput"></a>

```typescript
public readonly versionStatusesInput: IResolvable | DataTfeRegistryModuleVersionStatuses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.moduleProvider"></a>

```typescript
public readonly moduleProvider: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryModuleConfig <a name="DataTfeRegistryModuleConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

const dataTfeRegistryModuleConfig: dataTfeRegistryModule.DataTfeRegistryModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider">moduleProvider</a></code> | <code>string</code> | Name of the module provider. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name">name</a></code> | <code>string</code> | Name of the module. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the no-code module. Uses organization name if not provided. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName">registryName</a></code> | <code>string</code> | Name of the registry. Valid options: "public", "private". Defaults to "private". |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig">testConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo">vcsRepo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]</code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses">versionStatuses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]</code> | version_statuses block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `moduleProvider`<sup>Required</sup> <a name="moduleProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.moduleProvider"></a>

```typescript
public readonly moduleProvider: string;
```

- *Type:* string

Name of the module provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#module_provider DataTfeRegistryModule#module_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#name DataTfeRegistryModule#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#organization DataTfeRegistryModule#organization}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the no-code module. Uses organization name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#namespace DataTfeRegistryModule#namespace}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | DataTfeRegistryModulePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#permissions DataTfeRegistryModule#permissions}

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Name of the registry. Valid options: "public", "private". Defaults to "private".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#registry_name DataTfeRegistryModule#registry_name}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.testConfig"></a>

```typescript
public readonly testConfig: IResolvable | DataTfeRegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#test_config DataTfeRegistryModule#test_config}

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: IResolvable | DataTfeRegistryModuleVcsRepo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#vcs_repo DataTfeRegistryModule#vcs_repo}

---

##### `versionStatuses`<sup>Optional</sup> <a name="versionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleConfig.property.versionStatuses"></a>

```typescript
public readonly versionStatuses: IResolvable | DataTfeRegistryModuleVersionStatuses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]

version_statuses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/registry_module#version_statuses DataTfeRegistryModule#version_statuses}

---

### DataTfeRegistryModulePermissions <a name="DataTfeRegistryModulePermissions" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

const dataTfeRegistryModulePermissions: dataTfeRegistryModule.DataTfeRegistryModulePermissions = { ... }
```


### DataTfeRegistryModuleTestConfig <a name="DataTfeRegistryModuleTestConfig" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

const dataTfeRegistryModuleTestConfig: dataTfeRegistryModule.DataTfeRegistryModuleTestConfig = { ... }
```


### DataTfeRegistryModuleVcsRepo <a name="DataTfeRegistryModuleVcsRepo" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

const dataTfeRegistryModuleVcsRepo: dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo = { ... }
```


### DataTfeRegistryModuleVersionStatuses <a name="DataTfeRegistryModuleVersionStatuses" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

const dataTfeRegistryModuleVersionStatuses: dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryModulePermissionsList <a name="DataTfeRegistryModulePermissionsList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModulePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get"></a>

```typescript
public get(index: number): DataTfeRegistryModulePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModulePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>[]

---


### DataTfeRegistryModulePermissionsOutputReference <a name="DataTfeRegistryModulePermissionsOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete">canDelete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync">canResync</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry">canRetry</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canDelete`<sup>Required</sup> <a name="canDelete" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canDelete"></a>

```typescript
public readonly canDelete: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `canResync`<sup>Required</sup> <a name="canResync" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canResync"></a>

```typescript
public readonly canResync: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `canRetry`<sup>Required</sup> <a name="canRetry" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.canRetry"></a>

```typescript
public readonly canRetry: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModulePermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModulePermissions">DataTfeRegistryModulePermissions</a>

---


### DataTfeRegistryModuleTestConfigList <a name="DataTfeRegistryModuleTestConfigList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get"></a>

```typescript
public get(index: number): DataTfeRegistryModuleTestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleTestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>[]

---


### DataTfeRegistryModuleTestConfigOutputReference <a name="DataTfeRegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled">testsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testsEnabled`<sup>Required</sup> <a name="testsEnabled" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```typescript
public readonly testsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleTestConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleTestConfig">DataTfeRegistryModuleTestConfig</a>

---


### DataTfeRegistryModuleVcsRepoList <a name="DataTfeRegistryModuleVcsRepoList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get"></a>

```typescript
public get(index: number): DataTfeRegistryModuleVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleVcsRepo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>[]

---


### DataTfeRegistryModuleVcsRepoOutputReference <a name="DataTfeRegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier">displayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl">repositoryHttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider">serviceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.sourceDirectory">sourceDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagPrefix">tagPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags">tags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex">tagsRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `displayIdentifier`<sup>Required</sup> <a name="displayIdentifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```typescript
public readonly displayIdentifier: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.ingressSubmodules"></a>

```typescript
public readonly ingressSubmodules: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `repositoryHttpUrl`<sup>Required</sup> <a name="repositoryHttpUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.repositoryHttpUrl"></a>

```typescript
public readonly repositoryHttpUrl: string;
```

- *Type:* string

---

##### `serviceProvider`<sup>Required</sup> <a name="serviceProvider" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.serviceProvider"></a>

```typescript
public readonly serviceProvider: string;
```

- *Type:* string

---

##### `sourceDirectory`<sup>Required</sup> <a name="sourceDirectory" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.sourceDirectory"></a>

```typescript
public readonly sourceDirectory: string;
```

- *Type:* string

---

##### `tagPrefix`<sup>Required</sup> <a name="tagPrefix" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagPrefix"></a>

```typescript
public readonly tagPrefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tags"></a>

```typescript
public readonly tags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tagsRegex`<sup>Required</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.tagsRegex"></a>

```typescript
public readonly tagsRegex: string;
```

- *Type:* string

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.webhookUrl"></a>

```typescript
public readonly webhookUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleVcsRepo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVcsRepo">DataTfeRegistryModuleVcsRepo</a>

---


### DataTfeRegistryModuleVersionStatusesList <a name="DataTfeRegistryModuleVersionStatusesList" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get"></a>

```typescript
public get(index: number): DataTfeRegistryModuleVersionStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleVersionStatuses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>[]

---


### DataTfeRegistryModuleVersionStatusesOutputReference <a name="DataTfeRegistryModuleVersionStatusesOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer"></a>

```typescript
import { dataTfeRegistryModule } from '@cdktf/provider-tfe'

new dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTfeRegistryModuleVersionStatuses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataTfeRegistryModule.DataTfeRegistryModuleVersionStatuses">DataTfeRegistryModuleVersionStatuses</a>

---



