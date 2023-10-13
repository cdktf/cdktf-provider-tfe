# `tfe_policy_set`

Refer to the Terraform Registory for docs: [`tfe_policy_set`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set).

# `policySet` Submodule <a name="`policySet` Submodule" id="@cdktf/provider-tfe.policySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySet <a name="PolicySet" id="@cdktf/provider-tfe.policySet.PolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new PolicySet(Construct Scope, string Id, PolicySetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig">PolicySetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetConfig">PolicySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo">PutVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetGlobal">ResetGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverridable">ResetOverridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath">ResetPoliciesPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetSlug">ResetSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo">ResetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds">ResetWorkspaceIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.policySet.PolicySet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.policySet.PolicySet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo"></a>

```csharp
private void PutVcsRepo(PolicySetVcsRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.policySet.PolicySet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlobal` <a name="ResetGlobal" id="@cdktf/provider-tfe.policySet.PolicySet.resetGlobal"></a>

```csharp
private void ResetGlobal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.policySet.PolicySet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-tfe.policySet.PolicySet.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.policySet.PolicySet.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOverridable` <a name="ResetOverridable" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverridable"></a>

```csharp
private void ResetOverridable()
```

##### `ResetPoliciesPath` <a name="ResetPoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath"></a>

```csharp
private void ResetPoliciesPath()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds"></a>

```csharp
private void ResetPolicyIds()
```

##### `ResetSlug` <a name="ResetSlug" id="@cdktf/provider-tfe.policySet.PolicySet.resetSlug"></a>

```csharp
private void ResetSlug()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo"></a>

```csharp
private void ResetVcsRepo()
```

##### `ResetWorkspaceIds` <a name="ResetWorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds"></a>

```csharp
private void ResetWorkspaceIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

PolicySet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

PolicySet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

PolicySet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.globalInput">GlobalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput">OverridableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput">PoliciesPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput">PolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slugInput">SlugInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput">VcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.global">Global</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridable">Overridable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath">PoliciesPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIds">PolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slug">Slug</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.policySet.PolicySet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.policySet.PolicySet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.policySet.PolicySet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.policySet.PolicySet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.policySet.PolicySet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.policySet.PolicySet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo"></a>

```csharp
public PolicySetVcsRepoOutputReference VcsRepo { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalInput`<sup>Optional</sup> <a name="GlobalInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.globalInput"></a>

```csharp
public object GlobalInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OverridableInput`<sup>Optional</sup> <a name="OverridableInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput"></a>

```csharp
public object OverridableInput { get; }
```

- *Type:* object

---

##### `PoliciesPathInput`<sup>Optional</sup> <a name="PoliciesPathInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput"></a>

```csharp
public string PoliciesPathInput { get; }
```

- *Type:* string

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput"></a>

```csharp
public string[] PolicyIdsInput { get; }
```

- *Type:* string[]

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.slugInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SlugInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput"></a>

```csharp
public PolicySetVcsRepo VcsRepoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput"></a>

```csharp
public string[] WorkspaceIdsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.policySet.PolicySet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Global`<sup>Required</sup> <a name="Global" id="@cdktf/provider-tfe.policySet.PolicySet.property.global"></a>

```csharp
public object Global { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.policySet.PolicySet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-tfe.policySet.PolicySet.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.policySet.PolicySet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.policySet.PolicySet.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Overridable`<sup>Required</sup> <a name="Overridable" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridable"></a>

```csharp
public object Overridable { get; }
```

- *Type:* object

---

##### `PoliciesPath`<sup>Required</sup> <a name="PoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath"></a>

```csharp
public string PoliciesPath { get; }
```

- *Type:* string

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIds"></a>

```csharp
public string[] PolicyIds { get; }
```

- *Type:* string[]

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-tfe.policySet.PolicySet.property.slug"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Slug { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetConfig <a name="PolicySetConfig" id="@cdktf/provider-tfe.policySet.PolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new PolicySetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    object Global = null,
    string Id = null,
    string Kind = null,
    string Organization = null,
    object Overridable = null,
    string PoliciesPath = null,
    string[] PolicyIds = null,
    System.Collections.Generic.IDictionary<string, string> Slug = null,
    PolicySetVcsRepo VcsRepo = null,
    string[] WorkspaceIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.global">Global</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable">Overridable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath">PoliciesPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds">PolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug">Slug</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#name PolicySet#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#description PolicySet#description}.

---

##### `Global`<sup>Optional</sup> <a name="Global" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.global"></a>

```csharp
public object Global { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#global PolicySet#global}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `Overridable`<sup>Optional</sup> <a name="Overridable" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable"></a>

```csharp
public object Overridable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `PoliciesPath`<sup>Optional</sup> <a name="PoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath"></a>

```csharp
public string PoliciesPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds"></a>

```csharp
public string[] PolicyIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `Slug`<sup>Optional</sup> <a name="Slug" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Slug { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo"></a>

```csharp
public PolicySetVcsRepo VcsRepo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `WorkspaceIds`<sup>Optional</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

### PolicySetVcsRepo <a name="PolicySetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new PolicySetVcsRepo {
    string Identifier,
    string Branch = null,
    string GithubAppInstallationId = null,
    object IngressSubmodules = null,
    string OauthTokenId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#identifier PolicySet#identifier}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#branch PolicySet#branch}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules">IngressSubmodules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#identifier PolicySet#identifier}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#branch PolicySet#branch}.

---

##### `GithubAppInstallationId`<sup>Optional</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId"></a>

```csharp
public string GithubAppInstallationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}.

---

##### `IngressSubmodules`<sup>Optional</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules"></a>

```csharp
public object IngressSubmodules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

##### `OauthTokenId`<sup>Optional</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetVcsRepoOutputReference <a name="PolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tfe;

new PolicySetVcsRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId">ResetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules">ResetIngressSubmodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId">ResetOauthTokenId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetGithubAppInstallationId` <a name="ResetGithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```csharp
private void ResetGithubAppInstallationId()
```

##### `ResetIngressSubmodules` <a name="ResetIngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules"></a>

```csharp
private void ResetIngressSubmodules()
```

##### `ResetOauthTokenId` <a name="ResetOauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId"></a>

```csharp
private void ResetOauthTokenId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput">GithubAppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput">IngressSubmodulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput">OauthTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules">IngressSubmodules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `GithubAppInstallationIdInput`<sup>Optional</sup> <a name="GithubAppInstallationIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```csharp
public string GithubAppInstallationIdInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IngressSubmodulesInput`<sup>Optional</sup> <a name="IngressSubmodulesInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```csharp
public object IngressSubmodulesInput { get; }
```

- *Type:* object

---

##### `OauthTokenIdInput`<sup>Optional</sup> <a name="OauthTokenIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```csharp
public string OauthTokenIdInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```csharp
public string GithubAppInstallationId { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IngressSubmodules`<sup>Required</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```csharp
public object IngressSubmodules { get; }
```

- *Type:* object

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```csharp
public string OauthTokenId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue"></a>

```csharp
public PolicySetVcsRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---



