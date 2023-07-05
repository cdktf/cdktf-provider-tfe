# `tfe_workspace_run`

Refer to the Terraform Registory for docs: [`tfe_workspace_run`](https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run).

# `workspaceRun` Submodule <a name="`workspaceRun` Submodule" id="@cdktf/provider-tfe.workspaceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRun <a name="WorkspaceRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run tfe_workspace_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

new workspaceRun.WorkspaceRun(scope: Construct, id: string, config: WorkspaceRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply">putApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy">putDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply">resetApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy">resetDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApply` <a name="putApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply"></a>

```typescript
public putApply(value: WorkspaceRunApply): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `putDestroy` <a name="putDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy"></a>

```typescript
public putDestroy(value: WorkspaceRunDestroy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `resetApply` <a name="resetApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply"></a>

```typescript
public resetApply(): void
```

##### `resetDestroy` <a name="resetDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy"></a>

```typescript
public resetDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

workspaceRun.WorkspaceRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

workspaceRun.WorkspaceRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

workspaceRun.WorkspaceRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput">applyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput">destroyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apply`<sup>Required</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply"></a>

```typescript
public readonly apply: WorkspaceRunApplyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a>

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy"></a>

```typescript
public readonly destroy: WorkspaceRunDestroyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a>

---

##### `applyInput`<sup>Optional</sup> <a name="applyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput"></a>

```typescript
public readonly applyInput: WorkspaceRunApply;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `destroyInput`<sup>Optional</sup> <a name="destroyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput"></a>

```typescript
public readonly destroyInput: WorkspaceRunDestroy;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunApply <a name="WorkspaceRunApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

const workspaceRunApply: workspaceRun.WorkspaceRunApply = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm">manualConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax">retryBackoffMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin">retryBackoffMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun">waitForRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm"></a>

```typescript
public readonly manualConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retryBackoffMax`<sup>Optional</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax"></a>

```typescript
public readonly retryBackoffMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retryBackoffMin`<sup>Optional</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin"></a>

```typescript
public readonly retryBackoffMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `waitForRun`<sup>Optional</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun"></a>

```typescript
public readonly waitForRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

### WorkspaceRunConfig <a name="WorkspaceRunConfig" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

const workspaceRunConfig: workspaceRun.WorkspaceRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply">apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy">destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `apply`<sup>Optional</sup> <a name="apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply"></a>

```typescript
public readonly apply: WorkspaceRunApply;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `destroy`<sup>Optional</sup> <a name="destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy"></a>

```typescript
public readonly destroy: WorkspaceRunDestroy;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceRunDestroy <a name="WorkspaceRunDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

const workspaceRunDestroy: workspaceRun.WorkspaceRunDestroy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm">manualConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax">retryBackoffMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin">retryBackoffMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun">waitForRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm"></a>

```typescript
public readonly manualConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `retryBackoffMax`<sup>Optional</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax"></a>

```typescript
public readonly retryBackoffMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `retryBackoffMin`<sup>Optional</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin"></a>

```typescript
public readonly retryBackoffMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `waitForRun`<sup>Optional</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun"></a>

```typescript
public readonly waitForRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceRunApplyOutputReference <a name="WorkspaceRunApplyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

new workspaceRun.WorkspaceRunApplyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax">resetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin">resetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun">resetWaitForRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts"></a>

```typescript
public resetRetryAttempts(): void
```

##### `resetRetryBackoffMax` <a name="resetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax"></a>

```typescript
public resetRetryBackoffMax(): void
```

##### `resetRetryBackoffMin` <a name="resetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin"></a>

```typescript
public resetRetryBackoffMin(): void
```

##### `resetWaitForRun` <a name="resetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun"></a>

```typescript
public resetWaitForRun(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput">manualConfirmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput">retryBackoffMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput">retryBackoffMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput">retryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput">waitForRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm">manualConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax">retryBackoffMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin">retryBackoffMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun">waitForRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualConfirmInput`<sup>Optional</sup> <a name="manualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput"></a>

```typescript
public readonly manualConfirmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput"></a>

```typescript
public readonly retryAttemptsInput: number;
```

- *Type:* number

---

##### `retryBackoffMaxInput`<sup>Optional</sup> <a name="retryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput"></a>

```typescript
public readonly retryBackoffMaxInput: number;
```

- *Type:* number

---

##### `retryBackoffMinInput`<sup>Optional</sup> <a name="retryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput"></a>

```typescript
public readonly retryBackoffMinInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForRunInput`<sup>Optional</sup> <a name="waitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput"></a>

```typescript
public readonly waitForRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm"></a>

```typescript
public readonly manualConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

---

##### `retryBackoffMax`<sup>Required</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax"></a>

```typescript
public readonly retryBackoffMax: number;
```

- *Type:* number

---

##### `retryBackoffMin`<sup>Required</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin"></a>

```typescript
public readonly retryBackoffMin: number;
```

- *Type:* number

---

##### `waitForRun`<sup>Required</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun"></a>

```typescript
public readonly waitForRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceRunApply;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---


### WorkspaceRunDestroyOutputReference <a name="WorkspaceRunDestroyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer"></a>

```typescript
import { workspaceRun } from '@cdktf/provider-tfe'

new workspaceRun.WorkspaceRunDestroyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax">resetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin">resetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun">resetWaitForRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts"></a>

```typescript
public resetRetryAttempts(): void
```

##### `resetRetryBackoffMax` <a name="resetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax"></a>

```typescript
public resetRetryBackoffMax(): void
```

##### `resetRetryBackoffMin` <a name="resetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin"></a>

```typescript
public resetRetryBackoffMin(): void
```

##### `resetWaitForRun` <a name="resetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun"></a>

```typescript
public resetWaitForRun(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput">manualConfirmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput">retryBackoffMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput">retryBackoffMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput">retryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput">waitForRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm">manualConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax">retryBackoffMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin">retryBackoffMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun">waitForRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualConfirmInput`<sup>Optional</sup> <a name="manualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput"></a>

```typescript
public readonly manualConfirmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput"></a>

```typescript
public readonly retryAttemptsInput: number;
```

- *Type:* number

---

##### `retryBackoffMaxInput`<sup>Optional</sup> <a name="retryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput"></a>

```typescript
public readonly retryBackoffMaxInput: number;
```

- *Type:* number

---

##### `retryBackoffMinInput`<sup>Optional</sup> <a name="retryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput"></a>

```typescript
public readonly retryBackoffMinInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForRunInput`<sup>Optional</sup> <a name="waitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput"></a>

```typescript
public readonly waitForRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manualConfirm`<sup>Required</sup> <a name="manualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm"></a>

```typescript
public readonly manualConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

---

##### `retryBackoffMax`<sup>Required</sup> <a name="retryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax"></a>

```typescript
public readonly retryBackoffMax: number;
```

- *Type:* number

---

##### `retryBackoffMin`<sup>Required</sup> <a name="retryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin"></a>

```typescript
public readonly retryBackoffMin: number;
```

- *Type:* number

---

##### `waitForRun`<sup>Required</sup> <a name="waitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun"></a>

```typescript
public readonly waitForRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceRunDestroy;
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---



