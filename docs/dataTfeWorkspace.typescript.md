# `dataTfeWorkspace` Submodule <a name="`dataTfeWorkspace` Submodule" id="@cdktf/provider-tfe.dataTfeWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeWorkspace <a name="DataTfeWorkspace" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

new dataTfeWorkspace.DataTfeWorkspace(scope: Construct, id: string, config: DataTfeWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig">DataTfeWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig">DataTfeWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames">resetTagNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetTagNames` <a name="resetTagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.resetTagNames"></a>

```typescript
public resetTagNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

dataTfeWorkspace.DataTfeWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

dataTfeWorkspace.DataTfeWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan">allowDestroyPlan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled">assessmentsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply">autoApply</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger">autoApplyRunTrigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode">executionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled">fileTriggersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState">globalRemoteState</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations">operations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures">policyCheckFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns">queueAllRuns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount">resourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures">runFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount">runsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled">speculativeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId">sshKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled">structuredRunOutputEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion">terraformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns">triggerPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes">triggerPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput">tagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames">tagNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowDestroyPlan`<sup>Required</sup> <a name="allowDestroyPlan" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.allowDestroyPlan"></a>

```typescript
public readonly allowDestroyPlan: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `assessmentsEnabled`<sup>Required</sup> <a name="assessmentsEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.assessmentsEnabled"></a>

```typescript
public readonly assessmentsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoApply`<sup>Required</sup> <a name="autoApply" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApply"></a>

```typescript
public readonly autoApply: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoApplyRunTrigger`<sup>Required</sup> <a name="autoApplyRunTrigger" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.autoApplyRunTrigger"></a>

```typescript
public readonly autoApplyRunTrigger: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

---

##### `fileTriggersEnabled`<sup>Required</sup> <a name="fileTriggersEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.fileTriggersEnabled"></a>

```typescript
public readonly fileTriggersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `globalRemoteState`<sup>Required</sup> <a name="globalRemoteState" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.operations"></a>

```typescript
public readonly operations: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `policyCheckFailures`<sup>Required</sup> <a name="policyCheckFailures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.policyCheckFailures"></a>

```typescript
public readonly policyCheckFailures: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `queueAllRuns`<sup>Required</sup> <a name="queueAllRuns" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.queueAllRuns"></a>

```typescript
public readonly queueAllRuns: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="remoteStateConsumerIds" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

---

##### `runFailures`<sup>Required</sup> <a name="runFailures" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runFailures"></a>

```typescript
public readonly runFailures: number;
```

- *Type:* number

---

##### `runsCount`<sup>Required</sup> <a name="runsCount" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.runsCount"></a>

```typescript
public readonly runsCount: number;
```

- *Type:* number

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `speculativeEnabled`<sup>Required</sup> <a name="speculativeEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.speculativeEnabled"></a>

```typescript
public readonly speculativeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sshKeyId`<sup>Required</sup> <a name="sshKeyId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.sshKeyId"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* string

---

##### `structuredRunOutputEnabled`<sup>Required</sup> <a name="structuredRunOutputEnabled" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.structuredRunOutputEnabled"></a>

```typescript
public readonly structuredRunOutputEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `terraformVersion`<sup>Required</sup> <a name="terraformVersion" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.terraformVersion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* string

---

##### `triggerPatterns`<sup>Required</sup> <a name="triggerPatterns" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* string[]

---

##### `triggerPrefixes`<sup>Required</sup> <a name="triggerPrefixes" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.triggerPrefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* string[]

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.vcsRepo"></a>

```typescript
public readonly vcsRepo: DataTfeWorkspaceVcsRepoList;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList">DataTfeWorkspaceVcsRepoList</a>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `tagNamesInput`<sup>Optional</sup> <a name="tagNamesInput" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNamesInput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeWorkspaceConfig <a name="DataTfeWorkspaceConfig" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.Initializer"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

const dataTfeWorkspaceConfig: dataTfeWorkspace.DataTfeWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#name DataTfeWorkspace#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#id DataTfeWorkspace#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames">tagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#name DataTfeWorkspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#organization DataTfeWorkspace#organization}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceConfig.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/data-sources/workspace#tag_names DataTfeWorkspace#tag_names}.

---

### DataTfeWorkspaceVcsRepo <a name="DataTfeWorkspaceVcsRepo" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo.Initializer"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

const dataTfeWorkspaceVcsRepo: dataTfeWorkspace.DataTfeWorkspaceVcsRepo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeWorkspaceVcsRepoList <a name="DataTfeWorkspaceVcsRepoList" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

new dataTfeWorkspace.DataTfeWorkspaceVcsRepoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get"></a>

```typescript
public get(index: number): DataTfeWorkspaceVcsRepoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataTfeWorkspaceVcsRepoOutputReference <a name="DataTfeWorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer"></a>

```typescript
import { dataTfeWorkspace } from '@cdktf/provider-tfe'

new dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex">tagsRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```typescript
public readonly githubAppInstallationId: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```typescript
public readonly ingressSubmodules: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `tagsRegex`<sup>Required</sup> <a name="tagsRegex" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```typescript
public readonly tagsRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataTfeWorkspaceVcsRepo;
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeWorkspace.DataTfeWorkspaceVcsRepo">DataTfeWorkspaceVcsRepo</a>

---



