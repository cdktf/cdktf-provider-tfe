# `tfe_terraform_version`

Refer to the Terraform Registory for docs: [`tfe_terraform_version`](https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version).

# `terraformVersion` Submodule <a name="`terraformVersion` Submodule" id="@cdktf/provider-tfe.terraformVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformVersion <a name="TerraformVersion" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version tfe_terraform_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer"></a>

```typescript
import { terraformVersion } from '@cdktf/provider-tfe'

new terraformVersion.TerraformVersion(scope: Construct, id: string, config: TerraformVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig">TerraformVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig">TerraformVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta">resetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason">resetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial">resetOfficial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBeta` <a name="resetBeta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetBeta"></a>

```typescript
public resetBeta(): void
```

##### `resetDeprecated` <a name="resetDeprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecated"></a>

```typescript
public resetDeprecated(): void
```

##### `resetDeprecatedReason` <a name="resetDeprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetDeprecatedReason"></a>

```typescript
public resetDeprecatedReason(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOfficial` <a name="resetOfficial" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.resetOfficial"></a>

```typescript
public resetOfficial(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct"></a>

```typescript
import { terraformVersion } from '@cdktf/provider-tfe'

terraformVersion.TerraformVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement"></a>

```typescript
import { terraformVersion } from '@cdktf/provider-tfe'

terraformVersion.TerraformVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource"></a>

```typescript
import { terraformVersion } from '@cdktf/provider-tfe'

terraformVersion.TerraformVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput">betaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput">deprecatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput">deprecatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput">officialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput">shaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `betaInput`<sup>Optional</sup> <a name="betaInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.betaInput"></a>

```typescript
public readonly betaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedInput`<sup>Optional</sup> <a name="deprecatedInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedInput"></a>

```typescript
public readonly deprecatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReasonInput`<sup>Optional</sup> <a name="deprecatedReasonInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReasonInput"></a>

```typescript
public readonly deprecatedReasonInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `officialInput`<sup>Optional</sup> <a name="officialInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.officialInput"></a>

```typescript
public readonly officialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shaInput`<sup>Optional</sup> <a name="shaInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.shaInput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deprecatedReason`<sup>Required</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `official`<sup>Required</sup> <a name="official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.terraformVersion.TerraformVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformVersionConfig <a name="TerraformVersionConfig" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.Initializer"></a>

```typescript
import { terraformVersion } from '@cdktf/provider-tfe'

const terraformVersionConfig: terraformVersion.TerraformVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha">sha</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#sha TerraformVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#url TerraformVersion#url}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#version TerraformVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta">beta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#beta TerraformVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated">deprecated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason">deprecatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#id TerraformVersion#id}. |
| <code><a href="#@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official">official</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#official TerraformVersion#official}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#sha TerraformVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#url TerraformVersion#url}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#version TerraformVersion#version}.

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.beta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#beta TerraformVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#deprecated TerraformVersion#deprecated}.

---

##### `deprecatedReason`<sup>Optional</sup> <a name="deprecatedReason" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.deprecatedReason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#enabled TerraformVersion#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#id TerraformVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `official`<sup>Optional</sup> <a name="official" id="@cdktf/provider-tfe.terraformVersion.TerraformVersionConfig.property.official"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/terraform_version#official TerraformVersion#official}.

---



