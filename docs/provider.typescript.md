# `provider`

Refer to the Terraform Registory for docs: [`tfe`](https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tfe.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TfeProvider <a name="TfeProvider" id="@cdktf/provider-tfe.provider.TfeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs tfe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-tfe'

new provider.TfeProvider(scope: Construct, id: string, config?: TfeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig">TfeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.provider.TfeProviderConfig">TfeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify">resetSslSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.provider.TfeProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.provider.TfeProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-tfe.provider.TfeProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-tfe.provider.TfeProvider.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.provider.TfeProvider.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetSslSkipVerify` <a name="resetSslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify"></a>

```typescript
public resetSslSkipVerify(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-tfe.provider.TfeProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-tfe'

provider.TfeProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-tfe'

provider.TfeProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-tfe'

provider.TfeProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput">sslSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.provider.TfeProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.provider.TfeProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `sslSkipVerifyInput`<sup>Optional</sup> <a name="sslSkipVerifyInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput"></a>

```typescript
public readonly sslSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProvider.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TfeProviderConfig <a name="TfeProviderConfig" id="@cdktf/provider-tfe.provider.TfeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.provider.TfeProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-tfe'

const tfeProviderConfig: provider.TfeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname">hostname</a></code> | <code>string</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization">organization</a></code> | <code>string</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.token">token</a></code> | <code>string</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs#hostname TfeProvider#hostname}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs#organization TfeProvider#organization}

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs#token TfeProvider#token}

---



