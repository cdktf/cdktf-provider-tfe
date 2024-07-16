# `dataRetentionPolicy` Submodule <a name="`dataRetentionPolicy` Submodule" id="@cdktf/provider-tfe.dataRetentionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataRetentionPolicy <a name="DataRetentionPolicy" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy tfe_data_retention_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

new dataRetentionPolicy.DataRetentionPolicy(scope: Construct, id: string, config?: DataRetentionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig">DataRetentionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig">DataRetentionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan">putDeleteOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete">putDontDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan">resetDeleteOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeleteOlderThan` <a name="putDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan"></a>

```typescript
public putDeleteOlderThan(value: DataRetentionPolicyDeleteOlderThan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

---

##### `putDontDelete` <a name="putDontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete"></a>

```typescript
public putDontDelete(value: DataRetentionPolicyDontDelete): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

---

##### `resetDeleteOlderThan` <a name="resetDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan"></a>

```typescript
public resetDeleteOlderThan(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

dataRetentionPolicy.DataRetentionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

dataRetentionPolicy.DataRetentionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

dataRetentionPolicy.DataRetentionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataRetentionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataRetentionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataRetentionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan">deleteOlderThan</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete">dontDelete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput">deleteOlderThanInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput">dontDeleteInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deleteOlderThan`<sup>Required</sup> <a name="deleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan"></a>

```typescript
public readonly deleteOlderThan: DataRetentionPolicyDeleteOlderThanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a>

---

##### `dontDelete`<sup>Required</sup> <a name="dontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete"></a>

```typescript
public readonly dontDelete: DataRetentionPolicyDontDeleteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `deleteOlderThanInput`<sup>Optional</sup> <a name="deleteOlderThanInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput"></a>

```typescript
public readonly deleteOlderThanInput: IResolvable | DataRetentionPolicyDeleteOlderThan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

---

##### `dontDeleteInput`<sup>Optional</sup> <a name="dontDeleteInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput"></a>

```typescript
public readonly dontDeleteInput: IResolvable | DataRetentionPolicyDontDelete;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataRetentionPolicyConfig <a name="DataRetentionPolicyConfig" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

const dataRetentionPolicyConfig: dataRetentionPolicy.DataRetentionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan">deleteOlderThan</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | delete_older_than block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete">dontDelete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | dont_delete block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization">organization</a></code> | <code>string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | ID of the workspace that the data retention policy should apply to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deleteOlderThan`<sup>Optional</sup> <a name="deleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan"></a>

```typescript
public readonly deleteOlderThan: DataRetentionPolicyDeleteOlderThan;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

delete_older_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#delete_older_than DataRetentionPolicy#delete_older_than}

---

##### `dontDelete`<sup>Optional</sup> <a name="dontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete"></a>

```typescript
public readonly dontDelete: DataRetentionPolicyDontDelete;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

dont_delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#dont_delete DataRetentionPolicy#dont_delete}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#organization DataRetentionPolicy#organization}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

ID of the workspace that the data retention policy should apply to.

If omitted, the data retention policy will apply to the entire organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#workspace_id DataRetentionPolicy#workspace_id}

---

### DataRetentionPolicyDeleteOlderThan <a name="DataRetentionPolicyDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

const dataRetentionPolicyDeleteOlderThan: dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days">days</a></code> | <code>number</code> | Number of days. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/data_retention_policy#days DataRetentionPolicy#days}

---

### DataRetentionPolicyDontDelete <a name="DataRetentionPolicyDontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

const dataRetentionPolicyDontDelete: dataRetentionPolicy.DataRetentionPolicyDontDelete = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataRetentionPolicyDeleteOlderThanOutputReference <a name="DataRetentionPolicyDeleteOlderThanOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

new dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataRetentionPolicyDeleteOlderThan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

---


### DataRetentionPolicyDontDeleteOutputReference <a name="DataRetentionPolicyDontDeleteOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer"></a>

```typescript
import { dataRetentionPolicy } from '@cdktf/provider-tfe'

new dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataRetentionPolicyDontDelete;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

---



