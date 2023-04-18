# `provider`

Refer to the Terraform Registory for docs: [`tfe`](https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tfe.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TfeProvider <a name="TfeProvider" id="@cdktf/provider-tfe.provider.TfeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs tfe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TfeProvider(Construct Scope, string Id, TfeProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig">TfeProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.provider.TfeProviderConfig">TfeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify">ResetSslSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.provider.TfeProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.provider.TfeProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-tfe.provider.TfeProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-tfe.provider.TfeProvider.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.provider.TfeProvider.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetSslSkipVerify` <a name="ResetSslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify"></a>

```csharp
private void ResetSslSkipVerify()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-tfe.provider.TfeProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TfeProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TfeProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

TfeProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput">SslSkipVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify">SslSkipVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.provider.TfeProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.provider.TfeProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tfe.provider.TfeProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `SslSkipVerifyInput`<sup>Optional</sup> <a name="SslSkipVerifyInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput"></a>

```csharp
public object SslSkipVerifyInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.provider.TfeProvider.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `SslSkipVerify`<sup>Optional</sup> <a name="SslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify"></a>

```csharp
public object SslSkipVerify { get; }
```

- *Type:* object

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-tfe.provider.TfeProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TfeProviderConfig <a name="TfeProviderConfig" id="@cdktf/provider-tfe.provider.TfeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.provider.TfeProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new TfeProviderConfig {
    string Alias = null,
    string Hostname = null,
    string Organization = null,
    object SslSkipVerify = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname">Hostname</a></code> | <code>string</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization">Organization</a></code> | <code>string</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify">SslSkipVerify</a></code> | <code>object</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.token">Token</a></code> | <code>string</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs#alias TfeProvider#alias}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs#hostname TfeProvider#hostname}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs#organization TfeProvider#organization}

---

##### `SslSkipVerify`<sup>Optional</sup> <a name="SslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify"></a>

```csharp
public object SslSkipVerify { get; set; }
```

- *Type:* object

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.43.0/docs#token TfeProvider#token}

---



