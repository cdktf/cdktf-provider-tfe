# `dataTfeHyokCustomerKeyVersion` Submodule <a name="`dataTfeHyokCustomerKeyVersion` Submodule" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeHyokCustomerKeyVersion <a name="DataTfeHyokCustomerKeyVersion" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version tfe_hyok_customer_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

new dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion(scope: Construct, id: string, config: DataTfeHyokCustomerKeyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig">DataTfeHyokCustomerKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig">DataTfeHyokCustomerKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeHyokCustomerKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeHyokCustomerKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeHyokCustomerKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion">keyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured">workspacesSecured</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `workspacesSecured`<sup>Required</sup> <a name="workspacesSecured" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured"></a>

```typescript
public readonly workspacesSecured: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeHyokCustomerKeyVersionConfig <a name="DataTfeHyokCustomerKeyVersionConfig" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.Initializer"></a>

```typescript
import { dataTfeHyokCustomerKeyVersion } from '@cdktf/provider-tfe'

const dataTfeHyokCustomerKeyVersionConfig: dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id">id</a></code> | <code>string</code> | The ID of the HYOK customer key version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the HYOK customer key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#id DataTfeHyokCustomerKeyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



