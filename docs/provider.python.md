# `provider`

Refer to the Terraform Registory for docs: [`tfe`](https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tfe.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TfeProvider <a name="TfeProvider" id="@cdktf/provider-tfe.provider.TfeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs tfe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import provider

provider.TfeProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  hostname: str = None,
  organization: str = None,
  ssl_skip_verify: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.sslSkipVerify">ssl_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.hostname"></a>

- *Type:* str

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#hostname TfeProvider#hostname}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.organization"></a>

- *Type:* str

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#organization TfeProvider#organization}

---

##### `ssl_skip_verify`<sup>Optional</sup> <a name="ssl_skip_verify" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.sslSkipVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.token"></a>

- *Type:* str

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#token TfeProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify">reset_ssl_skip_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.provider.TfeProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.provider.TfeProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.provider.TfeProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-tfe.provider.TfeProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-tfe.provider.TfeProvider.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.provider.TfeProvider.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_ssl_skip_verify` <a name="reset_ssl_skip_verify" id="@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify"></a>

```python
def reset_ssl_skip_verify() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-tfe.provider.TfeProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import provider

provider.TfeProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import provider

provider.TfeProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_tfe import provider

provider.TfeProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput">ssl_skip_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify">ssl_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.provider.TfeProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.provider.TfeProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `ssl_skip_verify_input`<sup>Optional</sup> <a name="ssl_skip_verify_input" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput"></a>

```python
ssl_skip_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProvider.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `ssl_skip_verify`<sup>Optional</sup> <a name="ssl_skip_verify" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify"></a>

```python
ssl_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TfeProviderConfig <a name="TfeProviderConfig" id="@cdktf/provider-tfe.provider.TfeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.provider.TfeProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import provider

provider.TfeProviderConfig(
  alias: str = None,
  hostname: str = None,
  organization: str = None,
  ssl_skip_verify: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname">hostname</a></code> | <code>str</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization">organization</a></code> | <code>str</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify">ssl_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.token">token</a></code> | <code>str</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#hostname TfeProvider#hostname}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#organization TfeProvider#organization}

---

##### `ssl_skip_verify`<sup>Optional</sup> <a name="ssl_skip_verify" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify"></a>

```python
ssl_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs#token TfeProvider#token}

---



