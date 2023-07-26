# `tfe_oauth_client`

Refer to the Terraform Registory for docs: [`tfe_oauth_client`](https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client).

# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktf/provider-tfe.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktf/provider-tfe.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client tfe_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer"></a>

```typescript
import { oauthClient } from '@cdktf/provider-tfe'

new oauthClient.OauthClient(scope: Construct, id: string, config: OauthClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig">OauthClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig">OauthClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey">resetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.oauthClient.OauthClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetRsaPublicKey` <a name="resetRsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey"></a>

```typescript
public resetRsaPublicKey(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret"></a>

```typescript
public resetSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct"></a>

```typescript
import { oauthClient } from '@cdktf/provider-tfe'

oauthClient.OauthClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement"></a>

```typescript
import { oauthClient } from '@cdktf/provider-tfe'

oauthClient.OauthClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource"></a>

```typescript
import { oauthClient } from '@cdktf/provider-tfe'

oauthClient.OauthClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId">oauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput">httpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput">oauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput">rsaPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput">serviceProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey">rsaPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider">serviceProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `httpUrlInput`<sup>Optional</sup> <a name="httpUrlInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput"></a>

```typescript
public readonly httpUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="rsaPublicKeyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput"></a>

```typescript
public readonly rsaPublicKeyInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `serviceProviderInput`<sup>Optional</sup> <a name="serviceProviderInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput"></a>

```typescript
public readonly serviceProviderInput: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `rsaPublicKey`<sup>Required</sup> <a name="rsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `serviceProvider`<sup>Required</sup> <a name="serviceProvider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider"></a>

```typescript
public readonly serviceProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientConfig <a name="OauthClientConfig" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.Initializer"></a>

```typescript
import { oauthClient } from '@cdktf/provider-tfe'

const oauthClientConfig: oauthClient.OauthClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl">apiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#api_url OauthClient#api_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl">httpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#http_url OauthClient#http_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider">serviceProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#id OauthClient#id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#key OauthClient#key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#name OauthClient#name}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken">oauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#organization OauthClient#organization}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#private_key OauthClient#private_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey">rsaPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#secret OauthClient#secret}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#api_url OauthClient#api_url}.

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#http_url OauthClient#http_url}.

---

##### `serviceProvider`<sup>Required</sup> <a name="serviceProvider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider"></a>

```typescript
public readonly serviceProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#id OauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#key OauthClient#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#name OauthClient#name}.

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#organization OauthClient#organization}.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#private_key OauthClient#private_key}.

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/oauth_client#secret OauthClient#secret}.

---



