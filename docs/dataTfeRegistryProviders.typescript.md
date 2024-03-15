# `dataTfeRegistryProviders` Submodule <a name="`dataTfeRegistryProviders` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryProviders <a name="DataTfeRegistryProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/registry_providers tfe_registry_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

new dataTfeRegistryProviders.DataTfeRegistryProviders(scope: Construct, id: string, config?: DataTfeRegistryProvidersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch"></a>

```typescript
public resetSearch(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeRegistryProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeRegistryProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/registry_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers">providers</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search">search</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers"></a>

```typescript
public readonly providers: DataTfeRegistryProvidersProvidersList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryProvidersConfig <a name="DataTfeRegistryProvidersConfig" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.Initializer"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

const dataTfeRegistryProvidersConfig: dataTfeRegistryProviders.DataTfeRegistryProvidersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName">registryName</a></code> | <code>string</code> | Whether to list only public or private providers. Must be either `public` or `private`. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search">search</a></code> | <code>string</code> | A query string to do a fuzzy search on provider name and namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/registry_providers#organization DataTfeRegistryProviders#organization}

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Whether to list only public or private providers. Must be either `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/registry_providers#registry_name DataTfeRegistryProviders#registry_name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

A query string to do a fuzzy search on provider name and namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/registry_providers#search DataTfeRegistryProviders#search}

---

### DataTfeRegistryProvidersProviders <a name="DataTfeRegistryProvidersProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders.Initializer"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

const dataTfeRegistryProvidersProviders: dataTfeRegistryProviders.DataTfeRegistryProvidersProviders = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryProvidersProvidersList <a name="DataTfeRegistryProvidersProvidersList" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

new dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get"></a>

```typescript
public get(index: number): DataTfeRegistryProvidersProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataTfeRegistryProvidersProvidersOutputReference <a name="DataTfeRegistryProvidersProvidersOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer"></a>

```typescript
import { dataTfeRegistryProviders } from '@cdktf/provider-tfe'

new dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataTfeRegistryProvidersProviders;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a>

---



