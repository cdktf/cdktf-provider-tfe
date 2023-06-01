# `tfe_organization_token`

Refer to the Terraform Registory for docs: [`tfe_organization_token`](https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token).

# `organizationToken` Submodule <a name="`organizationToken` Submodule" id="@cdktf/provider-tfe.organizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationToken <a name="OrganizationToken" id="@cdktf/provider-tfe.organizationToken.OrganizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token tfe_organization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OrganizationToken(Construct Scope, string Id, OrganizationTokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig">OrganizationTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig">OrganizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetForceRegenerate">ResetForceRegenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetForceRegenerate` <a name="ResetForceRegenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetForceRegenerate"></a>

```csharp
private void ResetForceRegenerate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

OrganizationToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerateInput">ForceRegenerateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerate">ForceRegenerate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `ForceRegenerateInput`<sup>Optional</sup> <a name="ForceRegenerateInput" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerateInput"></a>

```csharp
public object ForceRegenerateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `ForceRegenerate`<sup>Required</sup> <a name="ForceRegenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.forceRegenerate"></a>

```csharp
public object ForceRegenerate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.organizationToken.OrganizationToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationTokenConfig <a name="OrganizationTokenConfig" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new OrganizationTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ForceRegenerate = null,
    string Id = null,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forceRegenerate">ForceRegenerate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#force_regenerate OrganizationToken#force_regenerate}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#id OrganizationToken#id}. |
| <code><a href="#@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#organization OrganizationToken#organization}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ForceRegenerate`<sup>Optional</sup> <a name="ForceRegenerate" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.forceRegenerate"></a>

```csharp
public object ForceRegenerate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#force_regenerate OrganizationToken#force_regenerate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#id OrganizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.organizationToken.OrganizationTokenConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.45.0/docs/resources/organization_token#organization OrganizationToken#organization}.

---



