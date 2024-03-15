# `dataTfePolicySet` Submodule <a name="`dataTfePolicySet` Submodule" id="@cdktf/provider-tfe.dataTfePolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfePolicySet <a name="DataTfePolicySet" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

new dataTfePolicySet.DataTfePolicySet(scope: Construct, id: string, config: DataTfePolicySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig">DataTfePolicySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig">DataTfePolicySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverridable">resetOverridable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOverridable` <a name="resetOverridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.resetOverridable"></a>

```typescript
public resetOverridable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfePolicySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

dataTfePolicySet.DataTfePolicySet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

dataTfePolicySet.DataTfePolicySet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

dataTfePolicySet.DataTfePolicySet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

dataTfePolicySet.DataTfePolicySet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfePolicySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfePolicySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfePolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfePolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.agentEnabled">agentEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.excludedWorkspaceIds">excludedWorkspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.global">global</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policiesPath">policiesPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyIds">policyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyToolVersion">policyToolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.projectIds">projectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList">DataTfePolicySetVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.workspaceIds">workspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridableInput">overridableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridable">overridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentEnabled`<sup>Required</sup> <a name="agentEnabled" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.agentEnabled"></a>

```typescript
public readonly agentEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludedWorkspaceIds`<sup>Required</sup> <a name="excludedWorkspaceIds" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.excludedWorkspaceIds"></a>

```typescript
public readonly excludedWorkspaceIds: string[];
```

- *Type:* string[]

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.global"></a>

```typescript
public readonly global: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `policiesPath`<sup>Required</sup> <a name="policiesPath" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policiesPath"></a>

```typescript
public readonly policiesPath: string;
```

- *Type:* string

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

---

##### `policyToolVersion`<sup>Required</sup> <a name="policyToolVersion" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.policyToolVersion"></a>

```typescript
public readonly policyToolVersion: string;
```

- *Type:* string

---

##### `projectIds`<sup>Required</sup> <a name="projectIds" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.projectIds"></a>

```typescript
public readonly projectIds: string[];
```

- *Type:* string[]

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: DataTfePolicySetVcsRepoList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList">DataTfePolicySetVcsRepoList</a>

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.workspaceIds"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `overridableInput`<sup>Optional</sup> <a name="overridableInput" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridableInput"></a>

```typescript
public readonly overridableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `overridable`<sup>Required</sup> <a name="overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.overridable"></a>

```typescript
public readonly overridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfePolicySetConfig <a name="DataTfePolicySetConfig" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.Initializer"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

const dataTfePolicySetConfig: dataTfePolicySet.DataTfePolicySetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#name DataTfePolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#id DataTfePolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.kind">kind</a></code> | <code>string</code> | The policy-as-code framework for the policy. Valid values are sentinel and opa. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.overridable">overridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether users can override this policy when it fails during a run. Only valid for OPA policies. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#name DataTfePolicySet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#id DataTfePolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The policy-as-code framework for the policy. Valid values are sentinel and opa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#kind DataTfePolicySet#kind}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#organization DataTfePolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetConfig.property.overridable"></a>

```typescript
public readonly overridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether users can override this policy when it fails during a run. Only valid for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.53.0/docs/data-sources/policy_set#overridable DataTfePolicySet#overridable}

---

### DataTfePolicySetVcsRepo <a name="DataTfePolicySetVcsRepo" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo.Initializer"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

const dataTfePolicySetVcsRepo: dataTfePolicySet.DataTfePolicySetVcsRepo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfePolicySetVcsRepoList <a name="DataTfePolicySetVcsRepoList" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

new dataTfePolicySet.DataTfePolicySetVcsRepoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get"></a>

```typescript
public get(index: number): DataTfePolicySetVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataTfePolicySetVcsRepoOutputReference <a name="DataTfePolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer"></a>

```typescript
import { dataTfePolicySet } from '@cdktf/provider-tfe'

new dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo">DataTfePolicySetVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```typescript
public readonly ingressSubmodules: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataTfePolicySetVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfePolicySet.DataTfePolicySetVcsRepo">DataTfePolicySetVcsRepo</a>

---



