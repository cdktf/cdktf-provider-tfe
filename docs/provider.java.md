# `provider`

Refer to the Terraform Registory for docs: [`tfe`](https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tfe.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TfeProvider <a name="TfeProvider" id="@cdktf/provider-tfe.provider.TfeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs tfe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.provider.TfeProvider;

TfeProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .hostname(java.lang.String)
//  .organization(java.lang.String)
//  .sslSkipVerify(java.lang.Boolean)
//  .sslSkipVerify(IResolvable)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.sslSkipVerify">sslSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#hostname TfeProvider#hostname}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#organization TfeProvider#organization}

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.sslSkipVerify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#token TfeProvider#token}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.provider.TfeProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.provider.TfeProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.provider.TfeProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-tfe.provider.TfeProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-tfe.provider.TfeProvider.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.provider.TfeProvider.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetSslSkipVerify` <a name="resetSslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.resetSslSkipVerify"></a>

```java
public void resetSslSkipVerify()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-tfe.provider.TfeProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.provider.TfeProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.provider.TfeProvider;

TfeProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.provider.TfeProvider;

TfeProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.tfe.provider.TfeProvider;

TfeProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.provider.TfeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput">sslSkipVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify">sslSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.provider.TfeProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.provider.TfeProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.provider.TfeProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.provider.TfeProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-tfe.provider.TfeProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-tfe.provider.TfeProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `sslSkipVerifyInput`<sup>Optional</sup> <a name="sslSkipVerifyInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerifyInput"></a>

```java
public java.lang.Object getSslSkipVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-tfe.provider.TfeProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProvider.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProvider.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProvider.property.sslSkipVerify"></a>

```java
public java.lang.Object getSslSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.provider.TfeProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TfeProviderConfig <a name="TfeProviderConfig" id="@cdktf/provider-tfe.provider.TfeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.provider.TfeProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.provider.TfeProviderConfig;

TfeProviderConfig.builder()
//  .alias(java.lang.String)
//  .hostname(java.lang.String)
//  .organization(java.lang.String)
//  .sslSkipVerify(java.lang.Boolean)
//  .sslSkipVerify(IResolvable)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization to apply to a resource if one is not defined on the resource itself. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify">sslSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to skip certificate verifications. |
| <code><a href="#@cdktf/provider-tfe.provider.TfeProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The token used to authenticate with Terraform Enterprise. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#hostname TfeProvider#hostname}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization to apply to a resource if one is not defined on the resource itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#organization TfeProvider#organization}

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.sslSkipVerify"></a>

```java
public java.lang.Object getSslSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-tfe.provider.TfeProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The token used to authenticate with Terraform Enterprise.

We recommend omitting
the token which can be set as credentials in the CLI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs#token TfeProvider#token}

---



