# `tfe_oauth_client`

Refer to the Terraform Registory for docs: [`tfe_oauth_client`](https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client).

# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktf/provider-tfe.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktf/provider-tfe.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client tfe_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OauthClient(Construct Scope, string Id, OauthClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig">OauthClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig">OauthClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey">ResetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.oauthClient.OauthClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetRsaPublicKey` <a name="ResetRsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey"></a>

```csharp
private void ResetRsaPublicKey()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret"></a>

```csharp
private void ResetSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OauthClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OauthClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OauthClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput">HttpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput">OauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput">RsaPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput">ServiceProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken">OauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey">RsaPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider">ServiceProvider</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `HttpUrlInput`<sup>Optional</sup> <a name="HttpUrlInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput"></a>

```csharp
public string HttpUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput"></a>

```csharp
public string OauthTokenInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `RsaPublicKeyInput`<sup>Optional</sup> <a name="RsaPublicKeyInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput"></a>

```csharp
public string RsaPublicKeyInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `ServiceProviderInput`<sup>Optional</sup> <a name="ServiceProviderInput" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput"></a>

```csharp
public string ServiceProviderInput { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken"></a>

```csharp
public string OauthToken { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `RsaPublicKey`<sup>Required</sup> <a name="RsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey"></a>

```csharp
public string RsaPublicKey { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `ServiceProvider`<sup>Required</sup> <a name="ServiceProvider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider"></a>

```csharp
public string ServiceProvider { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientConfig <a name="OauthClientConfig" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OauthClientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiUrl,
    string HttpUrl,
    string ServiceProvider,
    string Id = null,
    string Key = null,
    string Name = null,
    string OauthToken = null,
    string Organization = null,
    string PrivateKey = null,
    string RsaPublicKey = null,
    string Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#api_url OauthClient#api_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl">HttpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#http_url OauthClient#http_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider">ServiceProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#id OauthClient#id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#key OauthClient#key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#name OauthClient#name}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken">OauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#organization OauthClient#organization}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#private_key OauthClient#private_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey">RsaPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#secret OauthClient#secret}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#api_url OauthClient#api_url}.

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl"></a>

```csharp
public string HttpUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#http_url OauthClient#http_url}.

---

##### `ServiceProvider`<sup>Required</sup> <a name="ServiceProvider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider"></a>

```csharp
public string ServiceProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#id OauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#key OauthClient#key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#name OauthClient#name}.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken"></a>

```csharp
public string OauthToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#organization OauthClient#organization}.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#private_key OauthClient#private_key}.

---

##### `RsaPublicKey`<sup>Optional</sup> <a name="RsaPublicKey" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey"></a>

```csharp
public string RsaPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs/resources/oauth_client#secret OauthClient#secret}.

---



