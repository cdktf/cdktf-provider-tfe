# `provider`

Refer to the Terraform Registory for docs: [`tfe`](https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tfe.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TfeProvider <a name="TfeProvider" id="@cdktf/provider-tfe.provider.TfeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs tfe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

provider.NewTfeProvider(scope Construct, id *string, config TfeProviderConfig) TfeProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig">TfeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.provider.TfeProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-tfe.provider.TfeProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-tfe.provider.TfeProvider.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.provider.TfeProvider.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetSslSkipVerify` <a name="ResetSslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify"></a>

```go
func ResetSslSkipVerify()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-tfe.provider.TfeProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TfeProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

provider.TfeProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

provider.TfeProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

provider.TfeProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

provider.TfeProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TfeProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TfeProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TfeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.provider.TfeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TfeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput">SslSkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify">SslSkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.provider.TfeProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.provider.TfeProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tfe.provider.TfeProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `SslSkipVerifyInput`<sup>Optional</sup> <a name="SslSkipVerifyInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput"></a>

```go
func SslSkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.provider.TfeProvider.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `SslSkipVerify`<sup>Optional</sup> <a name="SslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify"></a>

```go
func SslSkipVerify() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-tfe.provider.TfeProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TfeProviderConfig <a name="TfeProviderConfig" id="@cdktf/provider-tfe.provider.TfeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.provider.TfeProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/provider"

&provider.TfeProviderConfig {
	Alias: *string,
	Hostname: *string,
	Organization: *string,
	SslSkipVerify: interface{},
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify">SslSkipVerify</a></code> | <code>interface{}</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.token">Token</a></code> | <code>*string</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#alias TfeProvider#alias}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#hostname TfeProvider#hostname}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#organization TfeProvider#organization}

---

##### `SslSkipVerify`<sup>Optional</sup> <a name="SslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify"></a>

```go
SslSkipVerify interface{}
```

- *Type:* interface{}

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs#token TfeProvider#token}

---



