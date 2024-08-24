# `dataTfeGithubAppInstallation` Submodule <a name="`dataTfeGithubAppInstallation` Submodule" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeGithubAppInstallation <a name="DataTfeGithubAppInstallation" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation tfe_github_app_installation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

new dataTfeGithubAppInstallation.DataTfeGithubAppInstallation(scope: Construct, id: string, config?: DataTfeGithubAppInstallationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId">resetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetInstallationId` <a name="resetInstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId"></a>

```typescript
public resetInstallationId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeGithubAppInstallation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeGithubAppInstallation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeGithubAppInstallation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput">installationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId">installationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput"></a>

```typescript
public readonly installationIdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId"></a>

```typescript
public readonly installationId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeGithubAppInstallationConfig <a name="DataTfeGithubAppInstallationConfig" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.Initializer"></a>

```typescript
import { dataTfeGithubAppInstallation } from '@cdktf/provider-tfe'

const dataTfeGithubAppInstallationConfig: dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId">installationId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `installationId`<sup>Optional</sup> <a name="installationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId"></a>

```typescript
public readonly installationId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}.

---



