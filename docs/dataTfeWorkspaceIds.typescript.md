# `dataTfeWorkspaceIds` Submodule <a name="`dataTfeWorkspaceIds` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspaceIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspaceIds <a name="DataTfeWorkspaceIds" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids tfe_workspace_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

new dataTfeWorkspaceIds.DataTfeWorkspaceIds(scope: Construct, id: string, config?: DataTfeWorkspaceIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig">DataTfeWorkspaceIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig">DataTfeWorkspaceIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags">resetExcludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames">resetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames">resetTagNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExcludeTags` <a name="resetExcludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetExcludeTags"></a>

```typescript
public resetExcludeTags(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNames` <a name="resetNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetNames"></a>

```typescript
public resetNames(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetTagNames` <a name="resetTagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.resetTagNames"></a>

```typescript
public resetTagNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeWorkspaceIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeWorkspaceIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeWorkspaceIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspaceIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames">fullNames</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids">ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput">excludeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput">tagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags">excludeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames">tagNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fullNames`<sup>Required</sup> <a name="fullNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.fullNames"></a>

```typescript
public readonly fullNames: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.ids"></a>

```typescript
public readonly ids: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `excludeTagsInput`<sup>Optional</sup> <a name="excludeTagsInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTagsInput"></a>

```typescript
public readonly excludeTagsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `tagNamesInput`<sup>Optional</sup> <a name="tagNamesInput" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNamesInput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* string[]

---

##### `excludeTags`<sup>Required</sup> <a name="excludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.excludeTags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceIdsConfig <a name="DataTfeWorkspaceIdsConfig" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.Initializer"></a>

```typescript
import { dataTfeWorkspaceIds } from '@cdktf/provider-tfe'

const dataTfeWorkspaceIdsConfig: dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags">excludeTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames">tagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `excludeTags`<sup>Optional</sup> <a name="excludeTags" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.excludeTags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#id DataTfeWorkspaceIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#names DataTfeWorkspaceIds#names}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#organization DataTfeWorkspaceIds#organization}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspaceIds.DataTfeWorkspaceIdsConfig.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}.

---



